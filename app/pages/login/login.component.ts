import { Component } from "@angular/core"
import { Page } from "ui/page";
require("nativescript-localstorage")

import {UserService} from "./user.service";
import {User} from "./user";

@Component({
    selector:"ns-login",
    moduleId:module.id,
    providers: [UserService],
    templateUrl:"./login.component.html",
    styleUrls: ["./login-common.css"]
})
export class LoginComponent {
    user:User;

    constructor(private page:Page, private userService:UserService){
        page.actionBarHidden = true;
        this.user = new User();
    }

    login(){
        console.log(JSON.stringify(this.user));
        this.userService.login(this.user)
            .subscribe(
                (response)=> localStorage.setItem("token", response.content.token)),
                (error) => alert(error.json().message
            )
    }

    register(){
        alert(localStorage.getItem("token"))
    }

}