import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {KembangService} from "../kembang.service";
import {ActivatedRoute} from "@angular/router";
import * as Toast from "nativescript-toast";
import {ObservableArray} from "tns-core-modules/data/observable-array";
import {RouterExtensions} from "nativescript-angular";
import * as dialogs from "ui/dialogs";
import "rxjs/add/operator/do";
import {ListViewEventData} from "nativescript-pro-ui/listview";

@Component({
    selector:"ns-periksa-kembang",
    moduleId:module.id,
    templateUrl:"./periksa.component.html",
    styleUrls:["./periksa-common.css"],
    providers:[KembangService]
})
export class PeriksaComponent implements OnInit{

    constructor(
        private router:ActivatedRoute,
        private service:KembangService,
        private routerExt:RouterExtensions,
        private changeDetector: ChangeDetectorRef
    ){}

    params:any;
    data:any = {umur:0};
    imgurl:string;
    questions:ObservableArray<any>;

    ngOnInit(){
        this.router.queryParams.subscribe(p=>{
            console.log(JSON.stringify(p));
            this.params = p;
            this.loadQuestions()
        });
    }

    showGuide(){
        if (localStorage.getItem("guide_kembang") !== "1"){
            dialogs.confirm({
                message: "Pada halaman ini terdapat pertanyaan-pertanyaan dalam bentuk kartu-kartu, tekan kartu jika jawaban dari pertanyaan tersebut adalah 'Ya', tekan tombol bulat sebelah kanan bawah layar untuk menyimpannya",
                okButtonText: "Jangan perlihatkan pesan ini lagi",
                cancelButtonText: "Selalu perlihatkan pesan ini"
            }).then(result => {
                localStorage.setItem("guide_kembang", result ? "1" : "0")
            });
        }
    }


    loadQuestions(){
        let data_provider;

        if (this.params.mode == "store"){
            data_provider = this.service.show(this.params.anak, this.params.item);
        } else {
            data_provider = this.service.edit(this.params.anak, this.params.item);
        }

        data_provider.subscribe(
            res=>{
                res.content.data.pertanyaan.map(data=>data.answer = false);
                this.data = res.content.data;
                this.questions = new ObservableArray(this.data.pertanyaan);
                this.imgurl = res.content.img_url;
                this.changeDetector.detectChanges();
                this.showGuide();
            }
        )
    }

    onYes(args: ListViewEventData){
        let item = this.questions.getItem(args.index);
        item.answer = true;
    }

    onNo(args: ListViewEventData){
        let item = this.questions.getItem(args.index);
        item.answer = false;
    }

    submitdata(){
        let ans = {};
        for (let i=0; i<this.questions.length;i++){
            ans['jawaban_'+(i+1)] = this.questions.getItem(i).answer ? "1" : "0"
        }

        let data_prov;

        if (this.params.mode == "store"){
            data_prov = this.service.store(ans,this.params.item,this.params.anak)
        } else {
            data_prov = this.service.update(ans,this.params.item,this.params.anak)
        }

        data_prov.subscribe(
            res=>{
                Toast.makeText(res.message).show();
                this.routerExt.backToPreviousPage()
            },
            err=>{
                Toast.makeText(err.json().message).show()
                console.log(JSON.stringify(err.json()))
            }
        );
    }
}