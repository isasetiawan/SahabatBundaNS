import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Config} from "../../config";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {LoadingIndicator} from "nativescript-loading-indicator";

@Injectable()
export class HamilService{

    private loadingindicator:LoadingIndicator;
    constructor(private http:HttpClient){
        this.loadingindicator = new LoadingIndicator();
    }

    index(){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/kehamilan/",
        )   
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

    show(idkehamilan){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/kehamilan/"+idkehamilan,
        )   
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

    r_kehamilan(idkehamilan){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/kehamilan/"+idkehamilan+"/riwayat",
        )   
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

    r_kesehatan(idkehamilan){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/kehamilan/"+idkehamilan+"/kesehatan",
        )   
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

    r_melahirkan(idkehamilan){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/kehamilan/"+idkehamilan+"/melahirkan",
        )   
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

    r_keluhan(idkehamilan){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/kehamilan/"+idkehamilan+"/keluhan",
        )   
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

}