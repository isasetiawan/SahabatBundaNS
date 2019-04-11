import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, NavigationExtras} from "@angular/router";
import {Anak} from "../anak";
import {AnakService} from "../anak.service";
import * as Toast from 'nativescript-toast';
import {RouterExtensions} from "nativescript-angular";
import * as dialogs from "ui/dialogs";


@Component({
    selector:"ns-anak",
    moduleId:module.id,
    providers:[AnakService],
    templateUrl:"./anak.component.html",
    styleUrls:["anak-common.css"]
})
export class AnakComponent implements OnInit{

    _anak:Anak;
    is_store:boolean = false;

    constructor(private navigate:RouterExtensions, private router:ActivatedRoute, private service:AnakService){
    }

    ngOnInit(){
        this.router.queryParams.subscribe(
            p=> {
                console.log(JSON.stringify(p));
                if (!AnakComponent.isEmpty(p)){
                    this._anak = new Anak(p.id,p.orangtua_id,p.nama,p.gender,p.birthdate.split(" ")[0])
                } else {
                    this._anak = new Anak(0,0,"","L","");
                    this.is_store = true;
                }
            }
        )
    }

    static isEmpty(obj) {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    get anak():Anak{
        return this._anak
    }

    submit(){
        if (!this.is_store){
            this.service.update(this._anak).subscribe(
                res=>{
                    Toast.makeText(res.message).show();
                    this.navigate.backToPreviousPage()
                }
            )
        } else {
            this.service.store(this._anak).subscribe(
                res=>{
                    Toast.makeText(res.message).show();
                    this.navigate.backToPreviousPage()
                }
            )
        }
    }

    delete(){
        dialogs.prompt(
            {
                title: "",
                message: "Masukkan kata sandi untuk konfirmasi",
                okButtonText: "Hapus",
                cancelButtonText: "Batal",
                defaultText: "",
                inputType: dialogs.inputType.password
            }
        ).then(r => {
            if (r.result === true){
                this.service.delete(r.text,this._anak.id).subscribe(
                    res=>{
                        Toast.makeText(res.message).show();
                        this.navigate.backToPreviousPage()
                    }
                )
            }
        });
    }

    goToTumbuh(){
        let navexrta:NavigationExtras = {
            queryParams:this._anak
        };
        this.navigate.navigate(['/tumbuh'],navexrta)
    }

    goToKembang(){
        let navexrta:NavigationExtras = {
            queryParams:this._anak
        };
        this.navigate.navigate(['/kembang'],navexrta)
    }

    goToVaksin(){
        let navexrta:NavigationExtras = {
            queryParams:this._anak
        };
        this.navigate.navigate(['/vaksin'],navexrta)
    }

    goToHealthy(){
        let navexrta:NavigationExtras = {
            queryParams:this._anak
        };
        this.navigate.navigate(['/kesehatan'],navexrta)
    }
}