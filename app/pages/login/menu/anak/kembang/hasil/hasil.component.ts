import {Component, OnInit} from "@angular/core";
import {KembangService} from "../kembang.service";
import {ActivatedRoute} from "@angular/router";
import * as Toast from "nativescript-toast";

@Component({
    selector:"ns-hasil",
    moduleId:module.id,
    providers:[KembangService],
    templateUrl:"./hasil.component.html",
    styleUrls:["./hasil-common.css"]
})
export class HasilComponent implements OnInit{
    constructor(
        private service:KembangService,
        private router:ActivatedRoute,
    ){}

    params:any;

    questions:Array<any>;
    answer:any;

    stim_kasar:Array<any>;
    stim_halus:Array<any>;
    stim_bicara:Array<any>;
    stim_sosial:Array<any>;

    ngOnInit(){
        this.router.queryParams.subscribe(
            p=> {
                this.params = p;
                this.loadResult()
            }
        )
    }

    loadResult(){
        this.service.result(this.params.item,this.params.anak).subscribe(
            res=>{
                let result = res.content;

                result.pertanyaan.map((item,i)=>item.jawaban = item.jawaban = result.jawaban[i+''] === 0 ? "Tidak" : "Ya");
                this.questions = result.pertanyaan;
                this.answer = result.jawaban;

                this.stim_kasar = result.stimulasi.kasar;
                this.stim_halus = result.stimulasi.halus;
                this.stim_bicara = result.stimulasi.bicara;
                this.stim_sosial = result.stimulasi.sosial;

                console.log(JSON.stringify(result));
            }
        );
    }
}