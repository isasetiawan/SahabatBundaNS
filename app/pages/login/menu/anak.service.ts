import { Injectable } from "@angular/core"
import { Http, Headers, Response } from "@angular/http"
import { Observable } from "rxjs/Rx"
import {Anak} from "./anak";

import "rxjs/add/operator/do"
import "rxjs/add/operator/map"

import {Config} from "../../config"
import {HttpClient} from "@angular/common/http";
import {LoadingIndicator} from "nativescript-loading-indicator";

@Injectable()
export class AnakService {

    private loadingindicator:LoadingIndicator;
    constructor(private http:HttpClient){
        this.loadingindicator = new LoadingIndicator();
    }

    index(){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI + "/anak",
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

    update(anak){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI + "/anak/"+anak.id,
            anak,
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

    store(anak){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI + "/anak",
            anak,
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

    delete(password:string, idanak:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI + "/anak/"+idanak,
            {
                _method:"delete",
                password:password
            },
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }


}