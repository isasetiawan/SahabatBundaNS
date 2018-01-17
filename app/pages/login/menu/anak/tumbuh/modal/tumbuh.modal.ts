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
        this.tumbuh = new Tumbuh();
        if (this.params.context.result !== null){
            this.tumbuh = this.params.context.result as Tumbuh;
        }
    }

    submit(){
        this.tumbuh.tanggal = moment(this.tumbuh.tanggal).format("Y-MM-DD");
        this.params.closeCallback({tumbuh:this.tumbuh, is_store:this.is_store})
    }
}

