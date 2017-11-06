import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Config} from "../../../../config";
import {Observable} from "rxjs/Observable";

@Injectable()
export class VaksinService{
    constructor(private http:Http){}

    getHeaders():Headers{
        let saved_token = localStorage.getItem("token");
        let headers = new Headers();
        headers.append("Secret", Config.keyAPI);
        headers.append("Authorization", "Bearer "+saved_token);
        headers.append("Content-Type", "application/json");
        return headers;
    }

    show(idanak){
        return this.http.get(
            Config.urlAPI+"/anak/"+idanak+"/vaksinasi",
            {headers:this.getHeaders()}
        )   .map(res=>res.json())
            .catch(this.handleErrors)
    }

    handleErrors(error:Response){
        console.log("Anak Service ",JSON.stringify(error.json()));
        return Observable.throw(error)
    }
}