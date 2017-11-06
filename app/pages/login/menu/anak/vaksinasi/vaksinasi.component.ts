import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {RouterExtensions} from "nativescript-angular";
import {PlatformLocation} from "@angular/common";
import {VaksinService} from "./vaksin.service";
import {ObservableArray} from "tns-core-modules/data/observable-array";
import {Anak} from "../../anak";
import * as Toast from "nativescript-toast";

@Component({
    selector:"ns-vaksinasi",
    moduleId:module.id,
    templateUrl:"./vaksinasi.component.html",
    styleUrls:["./vaksinasi-common.css"],
    providers:[VaksinService]
})
export class VaksinasiComponent implements OnInit {

    vakins:ObservableArray<any>;
    anak:Anak;

    constructor(
        private router:ActivatedRoute,
        private service:VaksinService,
        // private navigator:RouterExtensions,
        // private location:PlatformLocation
    ){}

    ngOnInit(){
        this.router.queryParams.subscribe(p=>{
            this.anak = p as Anak
            this.service.show(this.anak.id).subscribe(
                res=>{
                    this.vakins = new ObservableArray(res.content)
                },
                err => {Toast.makeText(err.json().message).show()}
            )
        })
    }

}