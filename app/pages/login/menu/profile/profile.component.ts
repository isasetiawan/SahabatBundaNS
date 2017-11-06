import {Component} from "@angular/core";
import {ProfileService} from "./profile.service";
import * as Toast from "nativescript-toast";
import {Profile} from "./profile";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector:"ns-login",
    moduleId:module.id,
    providers:[ProfileService],
    templateUrl:"profile.component.html",
    styleUrls: ["./profile-common.css"]
})
export class ProfileComponent {

    private profile:Profile;

    constructor(private service:ProfileService, private router:RouterExtensions){
        this.service.getProfile().subscribe(
            res=> this.profile = <Profile> res.content,
            err=> Toast.makeText(err.json().message).show()
        );
    }

    update(){
        this.service.updateProfile(this.profile).subscribe(
            res => {
                Toast.makeText("Berhasil").show();
                this.router.backToPreviousPage();
            },
            err => Toast.makeText(err.json().message).show()
        );
    }

}