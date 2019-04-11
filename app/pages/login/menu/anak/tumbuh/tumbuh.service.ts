import {Injectable} from "@angular/core";
import {Http,Headers} from "@angular/http";
import {Config} from "../../../../config";
import {Observable} from "rxjs/Rx";

import "rxjs/add/operator/map"
import {Tumbuh} from "./tumbuh";
import {Anak} from "../../anak";
import {HttpClient} from "@angular/common/http";
import {LoadingIndicator} from "nativescript-loading-indicator";

@Injectable()
export class TumbuhService {

    private loadingindicator:LoadingIndicator;
    constructor(private http:HttpClient){
        this.loadingindicator = new LoadingIndicator();
    }

    show(id:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/anak/"+id+"/tumbuh",
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }


    store(anak:Anak, tumbuh:Tumbuh){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+"/anak/"+anak.id+"/tumbuh/"+tumbuh.tumbuh_id,
            tumbuh,
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

    update(anak:Anak, tumbuh:Tumbuh){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+"/anak/"+anak.id+"/tumbuh/"+tumbuh.tumbuh_id,
            tumbuh,
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

    graphBBU(anak:Anak){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/anak/"+anak.id+"/tumbuh/bbu",
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }


    graphTBU(anak:Anak){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/anak/"+anak.id+"/tumbuh/tbu",
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }


    graphTBBB(anak:Anak){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/anak/"+anak.id+"/tumbuh/tbbb",
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }


}