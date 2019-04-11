import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, NavigationExtras} from "@angular/router";
import {Anak} from "../../anak";
import {KembangService} from "./kembang.service";
import {ObservableArray} from "tns-core-modules/data/observable-array";
import * as Toast from "nativescript-toast";
import {RouterExtensions} from "nativescript-angular";
import {PlatformLocation} from "@angular/common";

@Component({
    selector:"ns-kembang",
    moduleId:module.id,
    templateUrl:"./kembang.component.html",
    styleUrls:["./kembang-common.css"],
    providers:[KembangService]
})
export class KembangComponent implements OnInit{

    anak:Anak;
    kembangs:ObservableArray<any>;

    stands = {
        "S":"Perkembangan Sesuai",
        "P":"Perkembangan Menyimpang",
        "M":"Perkembangan Meragukan",
        "-":null
    };

    constructor(
        private router:ActivatedRoute,
        private service:KembangService,
        private navigator:RouterExtensions,
        private location:PlatformLocation
    ){
        this.location.onPopState((e)=>{this.loadData()})
    }

    ngOnInit(){
        this.loadData()
    }

    loadData(){
        this.router.queryParams.subscribe(p=>{
            this.anak = p as Anak;
            this.service.index(this.anak).subscribe(
                res=>{
                    this.kembangs = res.content;
                    this.kembangs.map(item=>item.status = this.stands[item.status])
                }
            )
        })
    }

    onItemtap(item){
        let navexrta: NavigationExtras;
        if (item.status){
            navexrta = {
                queryParams: {item: item.id, anak: this.anak.id, mode: "edit"}
            };
        } else {
            navexrta = {
                queryParams: {item: item.id, anak: this.anak.id, mode: "store"}
            };
        }
        this.navigator.navigate(['/periksa_kembang'],navexrta)
    }

    onHasilTap(item){
        let navexrta: NavigationExtras = {
            queryParams: {item: item.id, anak: this.anak.id, mode: "hasil"}
        };
        this.navigator.navigate(['/hasil_kembang'], navexrta)

    }

}