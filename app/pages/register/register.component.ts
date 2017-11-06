import {Component, OnInit} from "@angular/core";
import * as scrollViewModule from "tns-core-modules/ui/scroll-view";
import {Newuser} from "./newuser";
import {RegisterService} from "./register.service";
import {Router} from "@angular/router";
import * as dialogs from "ui/dialogs";

@Component({
    selector:"ns-register",
    moduleId:module.id,
    providers:[RegisterService],
    templateUrl:"./register.component.html",
    styleUrls:["./register-common.css","./register.css"]
})
export class RegisterComponent implements OnInit{
    ngOnInit() {
        this._user= new Newuser("","","","","","","","","","","","");
    }

    _user:Newuser;

    constructor(private service:RegisterService, private router:Router){}

    get user():Newuser{
        return this._user
    }

    submit(){
        this.service.register(this._user)
            .subscribe(
                (response) => dialogs.alert("Akun berhasil didaftarkan").then(()=> this.router.navigate(['/login'])),
                (error) => alert(error.json().message),
            )
    }
}