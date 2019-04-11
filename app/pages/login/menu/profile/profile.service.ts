import {Http} from "@angular/http";
import {Config} from "../../../config";
import {TokenUtils} from "../../../../utils/token.utils";
import {Injectable} from "@angular/core";
import {Profile} from "./profile";
import {HttpClient} from "@angular/common/http";
import {LoadingIndicator} from "nativescript-loading-indicator";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProfileService {

    private loadingindicator:LoadingIndicator;
    constructor(private http:HttpClient){
        this.loadingindicator = new LoadingIndicator();
    }

    getProfile(){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/profile",
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());

    }

    updateProfile(profile:Profile){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+"/profile",
            profile,
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());

    }

}