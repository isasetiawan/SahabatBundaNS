import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Anak} from "../../anak";
import {Config} from "../../../../config";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {LoadingIndicator} from "nativescript-loading-indicator";

@Injectable()
export class KembangService {

    private loadingindicator:LoadingIndicator;
    constructor(private http:HttpClient){
        this.loadingindicator = new LoadingIndicator();
    }
    
    index(anak:Anak){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/anak/"+anak.id+"/kembang")
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

    show(idanak:number,idkembang:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/anak/"+idanak+"/kembang/"+idkembang,
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }

    store(jawaban,idkembang,idanak){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.post(
            Config.urlAPI+"/anak/"+idanak+"/kembang/"+idkembang,
            jawaban,
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());

    }

    //get edit apa :/
    edit(idanak:number,idkembang:number){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/anak/"+idanak+"/kembang/"+idkembang+"/edit",
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());
    }


    //post update buat apa :/
    update(jawaban,idkembang,idanak){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.put(
            Config.urlAPI+"/anak/"+idanak+"/kembang/"+idkembang,
            jawaban,
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());

    }

    result(idkembang,idanak){
        this.loadingindicator.show(Config.progress_dialog_options);
        return this.http.get(
            Config.urlAPI+"/anak/"+idanak+"/kembang/"+idkembang+"/result",
        )
            .catch(err=>Observable.throw(err))
            .finally(()=>this.loadingindicator.hide());

    }
    

}