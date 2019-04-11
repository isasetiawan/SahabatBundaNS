import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Newuser} from "./newuser";
import {Config} from "../config";
import {HttpClient} from "@angular/common/http";
import {LoadingIndicator} from "nativescript-loading-indicator";
import {Observable} from "rxjs/Observable";


@Injectable()
export class RegisterService {

    private loadingindicator:LoadingIndicator;
    constructor(private http:HttpClient){
        this.loadingindicator = new LoadingIndicator();
    }

    register(user:Newuser){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI + "/register",
            user,
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

    provinsi(){
        return this.http.get(
            Config.urlAPI+"/provinsi",
        )
            .catch(err=>Observable.throw(err))

    }

    kabupaten(id:number){
        return this.http.get(
            Config.urlAPI+"/kabupaten/"+id,
        )
            .catch(err=>Observable.throw(err))

    }

    kecamatan(id){
        return this.http.get(
            Config.urlAPI+"/kecamatan/"+id,
        )
            .catch(err=>Observable.throw(err))
    }

    kelurahan(id){
        return this.http.get(
            Config.urlAPI+"/kelurahan/"+id,
        )
            .catch(err=>Observable.throw(err))

    }

}