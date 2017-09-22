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

    handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
    }
}