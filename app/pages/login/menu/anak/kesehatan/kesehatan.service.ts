import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoadingIndicator} from "nativescript-loading-indicator";
import {Anak} from "../../anak";
import {Config} from "../../../../config";
import {Observable} from "rxjs/Observable";
import {Kesehatan} from "./Kesehatan";

@Injectable()
export class KesehatanService {

    private loadingindicator:LoadingIndicator;
    constructor(private http:HttpClient){
        this.loadingindicator = new LoadingIndicator();
    }

    index(anak:Anak){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/anak/"+anak.id+"/kesehatan/all",
            {headers:Config.createHeaders()}
        )
            .catch(err => Observable.throw(err))
            .finally(()=>this.loadingindicator.hide())

    }

    store(data:Kesehatan){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+"/anak/"+data.anak_id+"/kesehatan",
            data,
            {headers:Config.createHeaders()}
        )
            .catch(err => Observable.throw(err))
            .finally(()=>this.loadingindicator.hide())
    }

    edit(data:Kesehatan){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+"/anak/"+data.anak_id+"/kesehatan/"+data.id,
            data,
            {headers:Config.createHeaders()}
        )
            .catch(err => Observable.throw(err))
            .finally(()=>this.loadingindicator.hide())
    }

}
