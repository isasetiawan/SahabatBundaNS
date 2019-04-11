import {Component, OnInit} from "@angular/core";
import * as scrollViewModule from "tns-core-modules/ui/scroll-view";
import {Newuser} from "./newuser";
import {RegisterService} from "./register.service";
import {Router} from "@angular/router";
import * as dialogs from "ui/dialogs";
import * as Toast from "nativescript-toast";

@Component({
    selector:"ns-register",
    moduleId:module.id,
    providers:[RegisterService],
    templateUrl:"./register.component.html",
    styleUrls:["./register-common.css","./register.css"]
})
export class RegisterComponent implements OnInit{
    ngOnInit() {
        this.user= new Newuser(
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        );
    }

    user:Newuser;

    provinces:any[];
    selprov:string;

    kabupatens:any[];
    selkab:string;

    kecamatans:any[];
    selkec:string;

    puskesmases:any[];
    selpus:string;

    kelurahan:any[];
    selkelu:string;

    constructor(private service:RegisterService, private router:Router){
        this.loadprovinces()
    }

    loadprovinces(){
        this.service.provinsi().subscribe(
            res=>{
                this.provinces = res.content;
                this.selprov = this.provinces.find(x => x.id === this.user.provinsi_id).nama;
            }
        );
    };

    askprovince(){
        dialogs.action({
            message: "Pilih Provinsi Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.provinces.map(x => x.nama)
        }).then(result => {
            if (result !== "Batal" && result !== this.selprov){
                this.selprov = result;
                this.user.provinsi_id = this.provinces.find(x => x.nama === result).id;
                this.selkab = "";
                this.selkec = "";
                this.selpus = "";
                this.selkelu = "";
                this.loadkabupatens();
            }
        });
    }

    loadkabupatens(){
        if (this.user.provinsi_id !== null){
            this.service.kabupaten(this.user.provinsi_id).subscribe(
                res=>{
                    this.kabupatens = res.content;
                    this.selkab = this.kabupatens.find(x=> x.id === this.user.kabupaten_id).nama;
                }
            )
        }
    }

    askkabupaten(){
        dialogs.action({
            message: "Pilih Kabupaten/Kota Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.kabupatens.map(x => x.nama)
        }).then(result => {
            if (result !== "Batal" && result !== this.selkab){
                this.selkab = result;
                this.user.kabupaten_id= this.kabupatens.find(x => x.nama === result).id;
                this.selkec = "";
                this.selpus = "";
                this.selkelu = "";
                this.loadkecamatans();
            }
        });
    }

    loadkecamatans(){
        if (this.user.kabupaten_id !== null){
            this.service.kecamatan(this.user.kabupaten_id).subscribe(
                res=>{
                    this.kecamatans = res.content;
                    this.selkec = this.kecamatans.find(x=>x.id === this.user.kecamatan_id).nama;
                }
            )
        }
    }

    askkecamatan(){
        dialogs.action({
            message: "Pilih Kecamatan Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.kecamatans.map(x => x.nama)
        }).then(result => {
            if (result !== "Batal" && result !== this.selkec){
                this.selkec = result;
                this.user.kecamatan_id= this.kecamatans.find(x => x.nama === result).id;
                this.selpus = "";
                this.selkelu = "";
                this.loadkelurahan();
            }
        });
    }

    loadkelurahan(){
        if(this.user.kecamatan_id !== null){
            this.service.kelurahan(this.user.kecamatan_id).subscribe(
                res => {
                    this.kelurahan = res.content;
                    this.selkelu = this.kelurahan.find(x=>x.id===this.user.kelurahan_id).nama;
                }
            )
        }

    }

    askkelurahan(){
        dialogs.action({
            message: "Pilih Kelurahan Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.kelurahan.map(x => x.nama)
        }).then(result => {
            if (result !== "Batal" && result !== this.selkelu){
                this.selkelu = result;
                this.user.kelurahan_id= this.kelurahan.find(x => x.nama === result).id;
            }
        });
    }

    submit(){
        if (this.user.password === this.user.password_confirmation){
            this.service.register(this.user)
                .subscribe(
                    (response) => dialogs.alert("Akun berhasil didaftarkan").then(()=> this.router.navigate(['/login'])),
                    err => {}
                )
        } else {
            alert("Password dan konfirmasi password belum sama");
        }
    }
}