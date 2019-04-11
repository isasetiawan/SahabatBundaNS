import { Injectable } from "@angular/core";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import {User} from "./user";
import {Config} from "../config";
import {HttpClient} from "@angular/common/http";
import {LoadingIndicator} from "nativescript-loading-indicator";
import {Observable} from "rxjs/Observable";


@Injectable()
export class UserService {

    private loadingindicator:LoadingIndicator;
    constructor(private http:HttpClient){
        this.loadingindicator = new LoadingIndicator();
    }

    login(user:User){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI + "/login",
            user,
        )
            .finally(()=>this.loadingindicator.hide())
            .catch(err=>Observable.throw(err))
    }

    logout(){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI + "/logout",
            JSON.stringify({}),
        )
            .finally(()=>this.loadingindicator.hide())
            .catch(err=>Observable.throw(err))

    }

    profile(){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI + "/profile",
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

    edit_profile(profile:any){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI + "/profile",
            profile,
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

}