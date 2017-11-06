import {Component, OnInit, ViewContainerRef} from "@angular/core";
import * as tabViewModule from "tns-core-modules/ui/tab-view";
import {ActivatedRoute} from "@angular/router";
import {RouterExtensions} from "nativescript-angular";
import {ModalDialogService} from "nativescript-angular/directives/dialogs";
import {TumbuhService} from "./tumbuh.service";
import {Anak} from "../../anak";
import {TumbuhModal} from "./modal/tumbuh.modal";
import * as moment from "moment/moment"
import {StaticFuncs} from "../../../../../utils/static.funcs";
import * as Toast from "nativescript-toast";
import {isUndefined} from "tns-core-modules/utils/types";
import {messageType} from "tns-core-modules/trace";
import error = messageType.error;
import {ObservableArray} from "tns-core-modules/data/observable-array";


@Component({
    selector:"ns-tumbuh",
    moduleId:module.id,
    providers:[TumbuhService],
    templateUrl:"./tumbuh.component.html",
    styleUrls:["tumbuh-common.css"]
})
export class TumbuhComponent implements OnInit{

    constructor(
        private service:TumbuhService,
        private router:ActivatedRoute,
        private navigator:RouterExtensions,
        private modal:ModalDialogService,
        private vcref:ViewContainerRef
    ){}

    _anak:Anak;
    get anak():Anak{return this._anak}
    pertumbuhan:Array<any>;
    bbus:ObservableArray<any> = new ObservableArray([]);
    tbus:ObservableArray<any> = new ObservableArray([]);

    showDate = StaticFuncs.showDate;

    ngOnInit(){
        //load tumbuh
        this.router.queryParams.subscribe(p=>{
            this._anak = p as Anak;
            this.loadtumbuh(null)
        })
    }

    loadtumbuh(args){
        this.service.show(this._anak.id).subscribe(
            response=>{
                this.pertumbuhan=response.content;
                if (args !== null) args.object.notifyPullToRefreshFinished()
            },
            error=>alert(error.json().message)
        );

        //load graph tbu
        this.service.graphTBU(this.anak).subscribe(
            res => this.tbus = new ObservableArray(res.content),
            err => Toast.makeText(err.json().message).show()
        );

        //load graph bbu
        this.service.graphBBU(this.anak).subscribe(
            res => this.bbus = new ObservableArray(res.content),
            err => Toast.makeText(err.json().message).show()
        );

        //load graph tbbu
        this.service.graphTBBB(this.anak).subscribe(
            res => console.log("tbbu oke ", JSON.stringify(res)),
            err => Toast.makeText(err.json().message).show()
        );

    }

    showModal(tumbuh){
        let options = {
            context: tumbuh,
            fullscreen:false,
            viewContainerRef: this.vcref
        };
        this.modal.showModal(TumbuhModal,options).then(res=>{
            console.log(JSON.stringify(res));
            if (!isUndefined(res)){
                if (res.is_store) {
                    this.service.store(this._anak,res.tumbuh).subscribe(
                        res => {
                            Toast.makeText(res.message).show();
                            this.loadtumbuh(null)
                        },
                        err => {
                            Toast.makeText(err.json().message)
                        }
                    )
                } else {
                    this.service.update(this._anak,res.tumbuh).subscribe(
                        res => {
                            Toast.makeText(res.message).show();
                            this.loadtumbuh(null)
                        },
                        err => {
                            Toast.makeText(err.json().message).show()
                        }
                    )
                }
            }
        })
    }
}