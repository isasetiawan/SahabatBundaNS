"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./pages/login/login.component");
var register_component_1 = require("./pages/register/register.component");
var menu_component_1 = require("./pages/login/menu/menu.component");
var anak_component_1 = require("./pages/login/menu/anak/anak.component");
var tumbuh_component_1 = require("./pages/login/menu/anak/tumbuh/tumbuh.component");
var kembang_component_1 = require("./pages/login/menu/anak/kembang/kembang.component");
var periksa_component_1 = require("./pages/login/menu/anak/kembang/periksa/periksa.component");
var hasil_component_1 = require("./pages/login/menu/anak/kembang/hasil/hasil.component");
var vaksinasi_component_1 = require("./pages/login/menu/anak/vaksinasi/vaksinasi.component");
var hamil_component_1 = require("./pages/login/menu/hamil/hamil.component");
var profile_component_1 = require("./pages/login/menu/profile/profile.component");
var kesehatan_component_1 = require("./pages/login/menu/anak/kesehatan/kesehatan.component");
var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "register", component: register_component_1.RegisterComponent },
    { path: "menu", component: menu_component_1.MenuComponent },
    { path: "anak", component: anak_component_1.AnakComponent },
    { path: "tumbuh", component: tumbuh_component_1.TumbuhComponent },
    { path: "kembang", component: kembang_component_1.KembangComponent },
    { path: "periksa_kembang", component: periksa_component_1.PeriksaComponent },
    { path: "hasil_kembang", component: hasil_component_1.HasilComponent },
    { path: "vaksin", component: vaksinasi_component_1.VaksinasiComponent },
    { path: "hamil", component: hamil_component_1.HamilComponent },
    { path: "profile", component: profile_component_1.ProfileComponent },
    { path: "kesehatan", component: kesehatan_component_1.KesehatanComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
