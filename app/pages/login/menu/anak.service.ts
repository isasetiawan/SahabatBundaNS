import { Injectable } from "@angular/core"
import { Http, Headers, Response } from "@angular/http"
import { Observable } from "rxjs/Rx"
import {Anak} from "./anak";

import "rxjs/add/operator/do"
import "rxjs/add/operator/map"

import {Config} from "../../config"

@Injectable()
export class AnakService {

    constructor(private http:Http){}

    index(){
        let saved_token = localStorage.getItem("token");
        let headers = new Headers();
        headers.append("Secret", Config.keyAPI);
        headers.append("Authorization", "Bearer "+saved_token);
        return this.http.get(
            Config.urlAPI + "/anak",
            { headers:headers }
        )
        .map(response=>{
            const data = response.json().content;
            return data.map(anak => anak as Anak)
        })
        .catch(AnakService.handleErrors)
    }

    update(anak){
        console.log(JSON.stringify(anak));
        let saved_token = localStorage.getItem("token");
        let headers = new Headers();
        headers.append("Secret", Config.keyAPI);
        headers.append("Authorization", "Bearer "+saved_token);
        headers.append("Content-Type", "application/json");

        return this.http.put(
            Config.urlAPI + "/anak/"+anak.id,
            JSON.stringify(anak),
            { headers:headers }
        )
            .map(response=>response.json())
            .do(data=>console.log(data))
            .catch(AnakService.handleErrors)
    }

    store(anak){
        let saved_token = localStorage.getItem("token");
        let headers = new Headers();
        headers.append("Secret", Config.keyAPI);
        headers.append("Authorization", "Bearer "+saved_token);
        headers.append("Content-Type", "application/json");

        return this.http.post(
            Config.urlAPI + "/anak",
            JSON.stringify(anak),
            { headers:headers }
        )
            .map(response=>response.json())
            .do(data=>console.log(data))
            .catch(AnakService.handleErrors)
    }

    delete(password:string, idanak:number){
        let saved_token = localStorage.getItem("token");
        let headers = new Headers();
        headers.append("Secret", Config.keyAPI);
        headers.append("Authorization", "Bearer "+saved_token);
        headers.append("Content-Type", "application/json");

        return this.http.post(
            Config.urlAPI + "/anak/"+idanak,
            JSON.stringify({
                _method:"delete",
                password:password
            }),
            { headers: headers }
        )
            .map(response=>response.json())
            .do(data=>console.log(data))
            .catch(AnakService.handleErrors)
    }

    static handleErrors(error:Response){
        console.log("Anak Service ",JSON.stringify(error.json()));
        return Observable.throw(error)
    }

}