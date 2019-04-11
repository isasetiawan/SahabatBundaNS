import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Kehamilan} from "../Kehamilan";
import {HamilService} from "../hamil.service";
import * as Toast from "nativescript-toast";

@Component({
    selector:"ns-hamil",
    moduleId:module.id,
    templateUrl:"./hamil-component.html",
    styleUrls:["./hamil-common.css"],
    providers:[HamilService]
})
export class HamilComponent implements OnInit{

    kehamilan:Kehamilan;
    riwayat:any;
    kesehatan:any;
    melahirkan:any;
    keluhan:any;

    dropoutChoice = [
        {key:"1",label:"Ya"},
        {key:"0",label:"Tidak"},

    ];

    penolongChoides = [
        {key:1, label:"Ya"},
        {key:0, label:"Bukan"},
    ];

    keluhanChoices = [
        {key:1, label:"Ya"},
        {key:0, label:"Tidak"},
    ];

    constructor(private actvRt:ActivatedRoute, private service:HamilService){

    }

    ngOnInit(){
        this.actvRt.queryParams.subscribe(p=>{
            this.kehamilan = p as Kehamilan;
            this.loadData();
        });
        Toast.makeText("Data-data ini hanya bisa diisi oleh bidan").show();
    }

    loadData(){
        this.service.r_kehamilan(this.kehamilan.id).subscribe(
            res=> {
                this.riwayat = res.content;
                this.service.r_kesehatan(this.kehamilan.id).subscribe(
                    res=> {
                        this.kesehatan = res.content;
                        this.service.r_melahirkan(this.kehamilan.id).subscribe(
                            res=> {
                                this.melahirkan = res.content;
                                this.service.r_keluhan(this.kehamilan.id).subscribe(
                                    res=> this.keluhan = res.content,
                                )
                            }
                        );
                    }
                );
            }
        );
    }
}