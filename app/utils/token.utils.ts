import {Injectable} from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import {Config} from "../pages/config"

@Injectable()
export class TokenUtils {
    public headers:Headers;
    public saved_token:string;

    constructor(private http:Http){
        
    }

    checkToken(){
        return this.http.post(Config.urlAPI+"/profile",{})
            .catch(err=>Observable.throw(err))
    }


}