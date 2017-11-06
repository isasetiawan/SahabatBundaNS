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
        let headers = new Headers();
        headers.append("Secret","fEZYTJ8L2K8y94fmJ8c94stx6plDmL62")
        headers.append("Authorization","Bearer "+localStorage.getItem("token"))
        return this.http.post(Config.urlAPI+"/profile",
                "",
                {headers:headers}
            ).catch(err=>Observable.throw(err))
    }

    static getHeaders():Headers{
        let saved_token = localStorage.getItem("token");
        let headers = new Headers();
        headers.append("Secret", Config.keyAPI);
        headers.append("Authorization", "Bearer "+saved_token);
        headers.append("Content-Type", "application/json");
        return headers;
    }

    static handleErrors(error:Response){
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error)
    }

}