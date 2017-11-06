import {Component} from "@angular/core";
import {ModalDialogParams} from "nativescript-angular";
import * as moment from "moment/moment"
import {Tumbuh} from "../tumbuh";

@Component({
    selector: "ns-modal-tumbuh",
    moduleId:module.id,
    templateUrl: "./tumbuh.modal.html"
})
export class TumbuhModal {

    tumbuh:Tumbuh;
    is_store:boolean = true;

    public constructor(private params:ModalDialogParams){
        console.log("TElo ",JSON.stringify(this.params.context));
        this.tumbuh = new Tumbuh(this.params.context.hasil);
        if (this.params.context.hasil !== null){
            this.is_store = false;
        } else {
            this.tumbuh.tumbuh_id = this.params.context.id;
            console.log(this.params.context.id)
        }
    }

    submit(){
        this.tumbuh.tanggal = moment(this.tumbuh.tanggal).format("Y-MM-DD");
        this.params.closeCallback({tumbuh:this.tumbuh, is_store:this.is_store})
    }
}

