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
import {NativeScriptUIDataFormModule} from "nativescript-telerik-ui-pro/dataform/angular";
import { NativeScriptUIListViewModule } from "nativescript-telerik-ui-pro/listview/angular";
import { TokenUtils } from "./utils/token.utils"
import { AnakComponent } from "./pages/login/menu/anak/anak.component"
import {TumbuhComponent} from "./pages/login/menu/anak/tumbuh/tumbuh.component";
import {TumbuhModal} from "./pages/login/menu/anak/tumbuh/modal/tumbuh.modal";
import {NativeScriptUIChartModule} from "nativescript-telerik-ui-pro/chart/angular";
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
        // RadDataFormComponent,
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
        ProfileComponent
    ],
    providers: [
        ItemService,
        TokenUtils,
        ModalDialogService
    ],
    entryComponents:[TumbuhModal],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
