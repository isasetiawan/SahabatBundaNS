import {Injectable} from "@angular/core";
import {Http,Headers} from "@angular/http";
import {Config} from "../../../../config";
import {Observable} from "rxjs/Rx";

import "rxjs/add/operator/map"
import {Tumbuh} from "./tumbuh";
import {Anak} from "../../anak";

@Injectable()
export class TumbuhService {
    constructor(private http:Http){}

    getHeaders():Headers{
        let saved_token = localStorage.getItem("token");
        let headers = new Headers();
        headers.append("Secret", Config.keyAPI);
        headers.append("Authorization", "Bearer "+saved_token);
        headers.append("Content-Type", "application/json");
        return headers;
    }

    show(id:number){
        return this.http.get(
            Config.urlAPI+"/anak/"+id+"/tumbuh",
            {headers:this.getHeaders()}
        )
            .map(response=>response.json())
            .catch(TumbuhService.handleErrors)
    }

    store(anak:Anak, tumbuh:Tumbuh){
        return this.http.post(
            Config.urlAPI+"/anak/"+anak.id+"/tumbuh/"+tumbuh.tumbuh_id,
            JSON.stringify(tumbuh),
            {headers:this.getHeaders()}
        )
            .map(res=>res.json())
            .catch(TumbuhService.handleErrors)
    }

    update(anak:Anak, tumbuh:Tumbuh){
        return this.http.put(
            Config.urlAPI+"/anak/"+anak.id+"/tumbuh/"+tumbuh.tumbuh_id,
            JSON.stringify(tumbuh),
            {headers:this.getHeaders()}
        )
            .map(res=>res.json())
            .catch(TumbuhService.handleErrors)
    }

    graphBBU(anak:Anak){
        return this.http.get(
            Config.urlAPI+"/anak/"+anak.id+"/tumbuh/bbu",
            {headers:this.getHeaders()}
        )
            .map(res=>res.json())
            .catch(TumbuhService.handleErrors)
    }

    graphTBU(anak:Anak){
        return this.http.get(
            Config.urlAPI+"/anak/"+anak.id+"/tumbuh/tbu",
            {headers:this.getHeaders()}
        )
            .map(res=>res.json())
            .catch(TumbuhService.handleErrors)
    }

    graphTBBB(anak:Anak){
        return this.http.get(
            Config.urlAPI+"/anak/"+anak.id+"/tumbuh/tbbb",
            {headers:this.getHeaders()}
        )
            .map(res=>res.json())
            .catch(TumbuhService.handleErrors)
    }

    static handleErrors(error:Response){
        console.log("Anak Service ",JSON.stringify(error.json()));
        return Observable.throw(error)
    }

}