import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Config} from "../../../../config";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {LoadingIndicator} from "nativescript-loading-indicator";

@Injectable()
export class VaksinService{

    private loadingindicator:LoadingIndicator;
    constructor(private http:HttpClient){
        this.loadingindicator = new LoadingIndicator();
    }

    show(idanak){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/anak/"+idanak+"/vaksinasi",
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

}