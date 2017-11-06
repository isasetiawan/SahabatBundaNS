import { Component, OnInit } from "@angular/core"
import { Page } from "ui/page";
import {UserService} from "./user.service";
import {User} from "./user";
import {TokenUtils} from "../../utils/token.utils"
import {RouterExtensions} from "nativescript-angular";
require("nativescript-localstorage")

@Component({
    selector:"ns-login",
    moduleId:module.id,
    providers: [UserService],
    templateUrl:"./login.component.html",
    styleUrls: ["./login-common.css"]
})
export class LoginComponent implements OnInit {
    user: User;
    
    
    constructor(
        private page:Page, 
        private userService:UserService, 
        private router:RouterExtensions,
        private tokutil:TokenUtils){
            
            page.actionBarHidden = true;
            this.user = new User();
        }
        
    ngOnInit() {
        this.checkToken()
    }

    checkToken(){
        this.tokutil.checkToken().subscribe(
            (response) => this.router.navigate(['/menu'],{ clearHistory: true })
        )
    }

    login(){
        console.log(JSON.stringify(this.user));
        this.userService.login(this.user)
            .subscribe(
                (response) =>{ 
                    localStorage.setItem("token", response.content.token);
                    this.router.navigate(['/menu'],{ clearHistory: true })
                },
                (error) =>{
                    if (error.json().message === "invalid_credentials") {
                        alert("Nama pengguna atau Kata Sandi salah")
                    }
                }
            )
    }

    register(){
        this.router.navigate(["/register"])
    }

}