"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var anak_service_1 = require("./anak.service");
var Toast = require("nativescript-toast");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var static_funcs_1 = require("../../../utils/static.funcs");
var hamil_service_1 = require("./hamil.service");
var user_service_1 = require("../user.service");
var nativescript_angular_1 = require("nativescript-angular");
var MenuComponent = (function () {
    function MenuComponent(anakService, hamilService, userService, router, routerExt, location) {
        var _this = this;
        this.anakService = anakService;
        this.hamilService = hamilService;
        this.userService = userService;
        this.router = router;
        this.routerExt = routerExt;
        this.location = location;
        this.showDate = static_funcs_1.StaticFuncs.getMonthAge;
        this.location.onPopState(function (e) { _this.getAnaks(null); });
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.getAnaks(null);
        this.getKehamilans(null);
    };
    MenuComponent.prototype.getAnaks = function (args) {
        var _this = this;
        this.anakService.index()
            .subscribe(function (response) {
            _this.anak_anak = new observable_array_1.ObservableArray(response.content);
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    MenuComponent.prototype.getKehamilans = function (args) {
        var _this = this;
        this.hamilService.index().subscribe(function (res) {
            _this.kehamilans = new observable_array_1.ObservableArray(res.content);
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    MenuComponent.prototype.onAddAnakTap = function () {
        this.router.navigate(["/anak"]);
    };
    MenuComponent.prototype.onHamilTap = function (item) {
        var navextra = {
            queryParams: item
        };
        this.router.navigate(["/hamil"], navextra);
    };
    MenuComponent.prototype.onitemtap = function (item) {
        var navextra = {
            queryParams: item
        };
        this.router.navigate(["/anak"], navextra);
    };
    MenuComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().subscribe(function (res) {
            Toast.makeText(res.message).show();
            _this.routerExt.navigate(['/login'], { clearHistory: true });
        }, function (err) { return Toast.makeText(err.json().message).show(); });
    };
    MenuComponent.prototype.gotoProfile = function () {
        this.router.navigate(["/profile"]);
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: "ns-login",
            moduleId: module.id,
            providers: [anak_service_1.AnakService, hamil_service_1.HamilService, user_service_1.UserService],
            templateUrl: "./menu.component.html",
            styleUrls: ["menu-common.css"],
        }),
        __metadata("design:paramtypes", [anak_service_1.AnakService,
            hamil_service_1.HamilService,
            user_service_1.UserService,
            router_1.Router,
            nativescript_angular_1.RouterExtensions,
            common_1.PlatformLocation])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
