import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Newuser} from "./newuser";
import {Config} from "../config";
import {Observable} from "rxjs/Observable";


@Injectable()
export class RegisterService {
    constructor(private http:Http){}

    register(user:Newuser){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Secret",Config.keyAPI);

        return this.http.post(
            Config.urlAPI + "/register",
            JSON.stringify(user),
            { headers: headers }
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