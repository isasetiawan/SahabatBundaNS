import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import {User} from "./user";
import {Config} from "../config";


@Injectable()
export class UserService {
    constructor(private http:Http){}

    getHeaders():Headers{
        let saved_token = localStorage.getItem("token");
        let headers = new Headers();
        headers.append("Secret", Config.keyAPI);
        headers.append("Authorization", "Bearer "+saved_token);
        headers.append("Content-Type", "application/json");
        return headers;
    }

    login(user:User){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Secret",Config.keyAPI)
        return this.http.post(
            Config.urlAPI + "/login",
            JSON.stringify(user),
            {headers:headers}
        )
            .map(response => response.json())
            .do(data => {
                console.log("balasan"+JSON.stringify(data))
            })
            .catch(this.handleErrors)
    }

    logout(){
        return this.http.post(
            Config.urlAPI + "/logout",
            JSON.stringify({}),
            {headers:this.getHeaders()}
        )
            .map(response => response.json())
            .catch(this.handleErrors)
    }

    profile(){
        return this.http.get(
            Config.urlAPI + "/profile",
            {headers: this.getHeaders()}
        )
            .map(res=>res.json())
            .catch(this.handleErrors)
    }

    edit_profile(profile:any){
        return this.http.post(
            Config.urlAPI + "/profile",
            JSON.stringify(profile),
            {headers: this.getHeaders()}
        )
            .map(res=>res.json())
            .catch(this.handleErrors)
    }

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}