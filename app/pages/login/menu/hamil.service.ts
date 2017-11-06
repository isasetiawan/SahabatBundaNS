import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Config} from "../../config";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HamilService{

    constructor(private http:Http){

    }

    getHeaders():Headers{
        let saved_token = localStorage.getItem("token");
        let headers = new Headers();
        headers.append("Secret", Config.keyAPI);
        headers.append("Authorization", "Bearer "+saved_token);
        headers.append("Content-Type", "application/json");
        return headers;
    }

    index(){
        return this.http.get(
            Config.urlAPI+"/kehamilan/",
            {headers:this.getHeaders()}
        )   .map(res=>res.json())
            .catch(this.handleErrors)
    }

    show(idkehamilan){
        return this.http.get(
            Config.urlAPI+"/kehamilan/"+idkehamilan,
            {headers:this.getHeaders()}
        )   .map(res=>res.json())
            .catch(this.handleErrors)
    }

    r_kehamilan(idkehamilan){
        return this.http.get(
            Config.urlAPI+"/kehamilan/"+idkehamilan+"/riwayat",
            {headers:this.getHeaders()}
        )   .map(res=>res.json())
            .catch(this.handleErrors)
    }

    r_kesehatan(idkehamilan){
        return this.http.get(
            Config.urlAPI+"/kehamilan/"+idkehamilan+"/kesehatan",
            {headers:this.getHeaders()}
        )   .map(res=>res.json())
            .catch(this.handleErrors)
    }

    r_melahirkan(idkehamilan){
        return this.http.get(
            Config.urlAPI+"/kehamilan/"+idkehamilan+"/melahirkan",
            {headers:this.getHeaders()}
        )   .map(res=>res.json())
            .catch(this.handleErrors)
    }

    r_keluhan(idkehamilan){
        return this.http.get(
            Config.urlAPI+"/kehamilan/"+idkehamilan+"/keluhan",
            {headers:this.getHeaders()}
        )   .map(res=>res.json())
            .catch(this.handleErrors)
    }

    handleErrors(error:Response){
        console.log("Anak Service ",JSON.stringify(error.json()));
        return Observable.throw(error)
    }

}