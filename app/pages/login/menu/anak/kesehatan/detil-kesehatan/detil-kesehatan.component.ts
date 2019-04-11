import { Component, OnInit } from '@angular/core';
import {Kesehatan} from "../Kesehatan";
import {KesehatanService} from "../kesehatan.service";
import {ModalDialogParams} from "nativescript-angular";
import * as Toast from "nativescript-toast";

@Component({
  moduleId: module.id,
  selector: 'app-detil-kesehatan',
  templateUrl: './detil-kesehatan.component.html',
  styleUrls: ['./detil-kesehatan.component.css'],
    providers:[KesehatanService]
})
export class DetilKesehatanComponent implements OnInit {

    hasilKesehatan:Kesehatan;
    tahap:string;
    statuses = [
        {key:0,label:"Meninggal"},
        {key:1,label:"Sehat"},
        {key:2,label:"Sakit"}
    ];
    isstore:boolean;

    constructor(
        private modal:ModalDialogParams,
        private service:KesehatanService
    ){
        let params = this.modal.context;

        this.tahap = params.detail_tumbuh;

        this.hasilKesehatan = new Kesehatan();

        if (params.result !== null){
            this.isstore = false;
            this.hasilKesehatan.id = params.result.id;
            this.hasilKesehatan.tumbuh_id = params.result.tumbuh_id;
            this.hasilKesehatan.anak_id = params.result.anak.id;
            this.hasilKesehatan.penyebab = params.result.penyebab;
            this.hasilKesehatan.status = params.result.status;
            // this.bidan = params.result.bidan;
        } else {
            this.isstore = true;
            this.hasilKesehatan.tumbuh_id = params.id;
            this.hasilKesehatan.anak_id = params.anak.id;
        }
    }

    submitsucess = (res)=>{
        Toast.makeText(res.message).show();
        this.modal.closeCallback()
    };

    submit(){
        console.log(JSON.stringify(this.hasilKesehatan));
        if (this.isstore) {
            this.service.store(this.hasilKesehatan).subscribe(this.submitsucess);
        } else {
            this.service.edit(this.hasilKesehatan).subscribe(this.submitsucess);
        }
    }


    ngOnInit() { }

}
