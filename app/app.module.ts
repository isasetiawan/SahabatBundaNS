import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import {ModalDialogService, NativeScriptFormsModule} from "nativescript-angular";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {MenuComponent} from "./pages/login/menu/menu.component";
import { TokenUtils } from "./utils/token.utils"
import { AnakComponent } from "./pages/login/menu/anak/anak.component"
import {TumbuhComponent} from "./pages/login/menu/anak/tumbuh/tumbuh.component";
import {TumbuhModal} from "./pages/login/menu/anak/tumbuh/modal/tumbuh.modal";
import {KembangComponent} from "./pages/login/menu/anak/kembang/kembang.component";
import {PeriksaComponent} from "./pages/login/menu/anak/kembang/periksa/periksa.component";
import {TNSFrescoModule} from "nativescript-fresco/angular";

import * as applicationModule from "tns-core-modules/application";
import * as frescoModule from "nativescript-fresco";
import {HasilComponent} from "./pages/login/menu/anak/kembang/hasil/hasil.component";
import {VaksinService} from "./pages/login/menu/anak/vaksinasi/vaksin.service";
import {VaksinasiComponent} from "./pages/login/menu/anak/vaksinasi/vaksinasi.component";
import {HamilComponent} from "./pages/login/menu/hamil/hamil.component";
import {ProfileComponent} from "./pages/login/menu/profile/profile.component";
import {NativeScriptUIDataFormModule} from "nativescript-pro-ui/dataform/angular";
import {NativeScriptUIListViewModule} from "nativescript-pro-ui/listview/angular";
import {NativeScriptUIChartModule} from "nativescript-pro-ui/chart/angular";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptorService} from "./auth-interceptor.service";
import {NativeScriptHttpClientModule} from "nativescript-angular/http-client";
import {KesehatanComponent} from "./pages/login/menu/anak/kesehatan/kesehatan.component";
import {DetilKesehatanComponent} from "./pages/login/menu/anak/kesehatan/detil-kesehatan/detil-kesehatan.component";

if (applicationModule.android) {
    applicationModule.on("launch", () => {
        frescoModule.initialize();
    });
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIListViewModule,
        NativeScriptUIChartModule,
        TNSFrescoModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        MenuComponent,
        AnakComponent,
        TumbuhComponent,
        TumbuhModal,
        KembangComponent,
        PeriksaComponent,
        HasilComponent,
        VaksinasiComponent,
        HamilComponent,
        ProfileComponent,
        KesehatanComponent,
        DetilKesehatanComponent
    ],
    providers: [
        ItemService,
        TokenUtils,
        ModalDialogService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ],
    entryComponents:[TumbuhModal,DetilKesehatanComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
