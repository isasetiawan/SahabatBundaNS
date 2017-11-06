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
var angular_1 = require("nativescript-telerik-ui-pro/dataform/angular");
var angular_2 = require("nativescript-telerik-ui-pro/listview/angular");
var token_utils_1 = require("./utils/token.utils");
var anak_component_1 = require("./pages/login/menu/anak/anak.component");
var tumbuh_component_1 = require("./pages/login/menu/anak/tumbuh/tumbuh.component");
var tumbuh_modal_1 = require("./pages/login/menu/anak/tumbuh/modal/tumbuh.modal");
var angular_3 = require("nativescript-telerik-ui-pro/chart/angular");
var kembang_component_1 = require("./pages/login/menu/anak/kembang/kembang.component");
var periksa_component_1 = require("./pages/login/menu/anak/kembang/periksa/periksa.component");
var angular_4 = require("nativescript-fresco/angular");
var applicationModule = require("tns-core-modules/application");
var frescoModule = require("nativescript-fresco");
var hasil_component_1 = require("./pages/login/menu/anak/kembang/hasil/hasil.component");
var vaksinasi_component_1 = require("./pages/login/menu/anak/vaksinasi/vaksinasi.component");
var hamil_component_1 = require("./pages/login/menu/hamil/hamil.component");
var profile_component_1 = require("./pages/login/menu/profile/profile.component");
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
                // RadDataFormComponent,
                angular_1.NativeScriptUIDataFormModule,
                angular_2.NativeScriptUIListViewModule,
                angular_3.NativeScriptUIChartModule,
                angular_4.TNSFrescoModule
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
                profile_component_1.ProfileComponent
            ],
            providers: [
                item_service_1.ItemService,
                token_utils_1.TokenUtils,
                nativescript_angular_1.ModalDialogService
            ],
            entryComponents: [tumbuh_modal_1.TumbuhModal],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDZEQUFpRjtBQUNqRixrREFBaUU7QUFDakUsaUVBQTZEO0FBQzdELDBFQUFzRTtBQUN0RSxvRUFBZ0U7QUFDaEUsd0VBQTBGO0FBQzFGLHdFQUE0RjtBQUM1RixtREFBZ0Q7QUFDaEQseUVBQXNFO0FBQ3RFLG9GQUFnRjtBQUNoRixrRkFBOEU7QUFDOUUscUVBQW9GO0FBQ3BGLHVGQUFtRjtBQUNuRiwrRkFBMkY7QUFDM0YsdURBQTREO0FBRTVELGdFQUFrRTtBQUNsRSxrREFBb0Q7QUFDcEQseUZBQXFGO0FBRXJGLDZGQUF5RjtBQUN6Riw0RUFBd0U7QUFDeEUsa0ZBQThFO0FBRTlFLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUIsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUMzQixZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBNkNEO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTNDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw4QkFBZ0I7Z0JBQ2hCLDhDQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0Qix3QkFBd0I7Z0JBQ3hCLHNDQUE0QjtnQkFDNUIsc0NBQTRCO2dCQUM1QixtQ0FBeUI7Z0JBQ3pCLHlCQUFlO2FBQ2xCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLHNDQUFpQjtnQkFDakIsOEJBQWE7Z0JBQ2IsOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2YsMEJBQVc7Z0JBQ1gsb0NBQWdCO2dCQUNoQixvQ0FBZ0I7Z0JBQ2hCLGdDQUFjO2dCQUNkLHdDQUFrQjtnQkFDbEIsZ0NBQWM7Z0JBQ2Qsb0NBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2dCQUNYLHdCQUFVO2dCQUNWLHlDQUFrQjthQUNyQjtZQUNELGVBQWUsRUFBQyxDQUFDLDBCQUFXLENBQUM7WUFDN0IsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHtNb2RhbERpYWxvZ1NlcnZpY2UsIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0SHR0cE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSZWdpc3RlckNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21lbnUvbWVudS5jb21wb25lbnRcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpLXByby9kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpLXByby9saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBUb2tlblV0aWxzIH0gZnJvbSBcIi4vdXRpbHMvdG9rZW4udXRpbHNcIlxuaW1wb3J0IHsgQW5ha0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21lbnUvYW5hay9hbmFrLmNvbXBvbmVudFwiXG5pbXBvcnQge1R1bWJ1aENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWVudS9hbmFrL3R1bWJ1aC90dW1idWguY29tcG9uZW50XCI7XG5pbXBvcnQge1R1bWJ1aE1vZGFsfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tZW51L2FuYWsvdHVtYnVoL21vZGFsL3R1bWJ1aC5tb2RhbFwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvL2NoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7S2VtYmFuZ0NvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWVudS9hbmFrL2tlbWJhbmcva2VtYmFuZy5jb21wb25lbnRcIjtcbmltcG9ydCB7UGVyaWtzYUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWVudS9hbmFrL2tlbWJhbmcvcGVyaWtzYS9wZXJpa3NhLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUTlNGcmVzY29Nb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtZnJlc2NvL2FuZ3VsYXJcIjtcblxuaW1wb3J0ICogYXMgYXBwbGljYXRpb25Nb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCAqIGFzIGZyZXNjb01vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LWZyZXNjb1wiO1xuaW1wb3J0IHtIYXNpbENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbWVudS9hbmFrL2tlbWJhbmcvaGFzaWwvaGFzaWwuY29tcG9uZW50XCI7XG5pbXBvcnQge1Zha3NpblNlcnZpY2V9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21lbnUvYW5hay92YWtzaW5hc2kvdmFrc2luLnNlcnZpY2VcIjtcbmltcG9ydCB7VmFrc2luYXNpQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9tZW51L2FuYWsvdmFrc2luYXNpL3Zha3NpbmFzaS5jb21wb25lbnRcIjtcbmltcG9ydCB7SGFtaWxDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21lbnUvaGFtaWwvaGFtaWwuY29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL21lbnUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudFwiO1xuXG5pZiAoYXBwbGljYXRpb25Nb2R1bGUuYW5kcm9pZCkge1xuICAgIGFwcGxpY2F0aW9uTW9kdWxlLm9uKFwibGF1bmNoXCIsICgpID0+IHtcbiAgICAgICAgZnJlc2NvTW9kdWxlLmluaXRpYWxpemUoKTtcbiAgICB9KTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIC8vIFJhZERhdGFGb3JtQ29tcG9uZW50LFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgICBUTlNGcmVzY29Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBSZWdpc3RlckNvbXBvbmVudCxcbiAgICAgICAgTWVudUNvbXBvbmVudCxcbiAgICAgICAgQW5ha0NvbXBvbmVudCxcbiAgICAgICAgVHVtYnVoQ29tcG9uZW50LFxuICAgICAgICBUdW1idWhNb2RhbCxcbiAgICAgICAgS2VtYmFuZ0NvbXBvbmVudCxcbiAgICAgICAgUGVyaWtzYUNvbXBvbmVudCxcbiAgICAgICAgSGFzaWxDb21wb25lbnQsXG4gICAgICAgIFZha3NpbmFzaUNvbXBvbmVudCxcbiAgICAgICAgSGFtaWxDb21wb25lbnQsXG4gICAgICAgIFByb2ZpbGVDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJdGVtU2VydmljZSxcbiAgICAgICAgVG9rZW5VdGlscyxcbiAgICAgICAgTW9kYWxEaWFsb2dTZXJ2aWNlXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6W1R1bWJ1aE1vZGFsXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19