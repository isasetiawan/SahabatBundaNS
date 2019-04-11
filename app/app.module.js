"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var nativescript_angular_1 = require("nativescript-angular");
var http_1 = require("nativescript-angular/http");
var login_component_1 = require("./pages/login/login.component");
var register_component_1 = require("./pages/register/register.component");
var menu_component_1 = require("./pages/login/menu/menu.component");
var token_utils_1 = require("./utils/token.utils");
var anak_component_1 = require("./pages/login/menu/anak/anak.component");
var tumbuh_component_1 = require("./pages/login/menu/anak/tumbuh/tumbuh.component");
var tumbuh_modal_1 = require("./pages/login/menu/anak/tumbuh/modal/tumbuh.modal");
var kembang_component_1 = require("./pages/login/menu/anak/kembang/kembang.component");
var periksa_component_1 = require("./pages/login/menu/anak/kembang/periksa/periksa.component");
var angular_1 = require("nativescript-fresco/angular");
var applicationModule = require("tns-core-modules/application");
var frescoModule = require("nativescript-fresco");
var hasil_component_1 = require("./pages/login/menu/anak/kembang/hasil/hasil.component");
var vaksinasi_component_1 = require("./pages/login/menu/anak/vaksinasi/vaksinasi.component");
var hamil_component_1 = require("./pages/login/menu/hamil/hamil.component");
var profile_component_1 = require("./pages/login/menu/profile/profile.component");
var angular_2 = require("nativescript-pro-ui/dataform/angular");
var angular_3 = require("nativescript-pro-ui/listview/angular");
var angular_4 = require("nativescript-pro-ui/chart/angular");
var http_2 = require("@angular/common/http");
var auth_interceptor_service_1 = require("./auth-interceptor.service");
var http_client_1 = require("nativescript-angular/http-client");
var kesehatan_component_1 = require("./pages/login/menu/anak/kesehatan/kesehatan.component");
var detil_kesehatan_component_1 = require("./pages/login/menu/anak/kesehatan/detil-kesehatan/detil-kesehatan.component");
if (applicationModule.android) {
    applicationModule.on("launch", function () {
        frescoModule.initialize();
    });
}
var AppModule = (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                nativescript_angular_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                http_client_1.NativeScriptHttpClientModule,
                angular_2.NativeScriptUIDataFormModule,
                angular_3.NativeScriptUIListViewModule,
                angular_4.NativeScriptUIChartModule,
                angular_1.TNSFrescoModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                menu_component_1.MenuComponent,
                anak_component_1.AnakComponent,
                tumbuh_component_1.TumbuhComponent,
                tumbuh_modal_1.TumbuhModal,
                kembang_component_1.KembangComponent,
                periksa_component_1.PeriksaComponent,
                hasil_component_1.HasilComponent,
                vaksinasi_component_1.VaksinasiComponent,
                hamil_component_1.HamilComponent,
                profile_component_1.ProfileComponent,
                kesehatan_component_1.KesehatanComponent,
                detil_kesehatan_component_1.DetilKesehatanComponent
            ],
            providers: [
                item_service_1.ItemService,
                token_utils_1.TokenUtils,
                nativescript_angular_1.ModalDialogService,
                {
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_service_1.AuthInterceptorService,
                    multi: true
                }
            ],
            entryComponents: [tumbuh_modal_1.TumbuhModal, detil_kesehatan_component_1.DetilKesehatanComponent],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
