import {Http} from "@angular/http";
import {Config} from "../../../config";
import {TokenUtils} from "../../../../utils/token.utils";
import {Injectable} from "@angular/core";
import {Profile} from "./profile";

@Injectable()
export class ProfileService {
    constructor(private http:Http){}

    getProfile(){
        return this.http.get(
            Config.urlAPI+"/profile",
            {headers:TokenUtils.getHeaders()}
        )   .map(res=>res.json())
            .catch(TokenUtils.handleErrors)
    }

    updateProfile(profile:Profile){
        return this.http.put(
            Config.urlAPI+"/profile",
            JSON.stringify(profile),
            {headers:TokenUtils.getHeaders()}
        )   .map(res=>res.json())
            .catch(TokenUtils.handleErrors)
    }

}