import {Component, OnInit} from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import {AnakService} from "./anak.service";
import * as Toast from 'nativescript-toast';
import {Router, NavigationExtras} from "@angular/router";
import {Anak} from "./anak";
import {PlatformLocation} from "@angular/common";
import {StaticFuncs} from "../../../utils/static.funcs";
import {Kehamilan} from "./Kehamilan";
import {HamilService} from "./hamil.service";
import {UserService} from "../user.service";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector:"ns-login",
    moduleId:module.id,
    providers:[AnakService,HamilService,UserService],
    templateUrl:"./menu.component.html",
    styleUrls:["menu-common.css"],
})
export class MenuComponent implements OnInit {

    anak_anak:ObservableArray<Anak>;
    kehamilans:ObservableArray<Kehamilan>;

    showDate = StaticFuncs.getMonthAge;

    constructor(private anakService:AnakService,
                private hamilService:HamilService,
                private userService:UserService,
                private router:Router,
                private routerExt:RouterExtensions,
                private location:PlatformLocation)
    {
        this.location.onPopState((e)=>{this.getAnaks(null)})
    }
    
    ngOnInit() {
        this.getAnaks(null)
        this.getKehamilans(null)

    }

    getAnaks(args){
        this.anakService.index()
        .subscribe(
            (response) => {
                this.anak_anak = new ObservableArray(response);
                if (args !== null) args.object.notifyPullToRefreshFinished();
            },
            (error) => {
                if (error.status === 401){
                    Toast.makeText("Silahkan login dahulu").show();
                    this.router.navigate([''])
                }                
                if (args !== null) args.object.notifyPullToRefreshFinished();                
            }
        )
    }

    getKehamilans(args){
        this.hamilService.index().subscribe(
            res=>{
                this.kehamilans = new ObservableArray(res.content);
                if (args !== null) args.object.notifyPullToRefreshFinished();
            },
            err => Toast.makeText(err.json().message).show()
        )
    }

    onAddAnakTap(){
        this.router.navigate(["/anak"])
    }

    onHamilTap(item){
        let navextra:NavigationExtras = {
            queryParams: item
        };
        this.router.navigate(["/hamil"],navextra)
    }

    onitemtap(item){
        let navextra:NavigationExtras = {
            queryParams: item
        };
        this.router.navigate(["/anak"],navextra)
    }

    logout(){
        this.userService.logout().subscribe(
            res=>{
                Toast.makeText(res.message).show()
                this.routerExt.navigate(['/login'],{ clearHistory: true })
            },
            err=>Toast.makeText(err.json().message).show()
        )
    }

    gotoProfile(){
        this.router.navigate(["/profile"])
    }
}