import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {MenuComponent} from "./pages/login/menu/menu.component";
import { AnakComponent } from "./pages/login/menu/anak/anak.component"
import {TumbuhComponent} from "./pages/login/menu/anak/tumbuh/tumbuh.component";
import {KembangComponent} from "./pages/login/menu/anak/kembang/kembang.component";
import {PeriksaComponent} from "./pages/login/menu/anak/kembang/periksa/periksa.component";
import {HasilComponent} from "./pages/login/menu/anak/kembang/hasil/hasil.component";
import {VaksinasiComponent} from "./pages/login/menu/anak/vaksinasi/vaksinasi.component";
import {HamilComponent} from "./pages/login/menu/hamil/hamil.component";
import {ProfileService} from "./pages/login/menu/profile/profile.service";
import {ProfileComponent} from "./pages/login/menu/profile/profile.component";
import {KesehatanComponent} from "./pages/login/menu/anak/kesehatan/kesehatan.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent},
    { path: "register", component: RegisterComponent},
    { path: "menu", component:MenuComponent},
    { path: "anak", component:AnakComponent},
    { path: "tumbuh", component:TumbuhComponent},
    { path: "kembang", component:KembangComponent},
    { path: "periksa_kembang", component:PeriksaComponent},
    { path: "hasil_kembang", component:HasilComponent},
    { path: "vaksin", component:VaksinasiComponent},
    { path: "hamil", component:HamilComponent},
    { path: "profile", component:ProfileComponent},
    { path: "kesehatan", component:KesehatanComponent}

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }