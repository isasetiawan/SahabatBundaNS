"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var user_service_1 = require("./user.service");
var user_1 = require("./user");
var nativescript_angular_1 = require("nativescript-angular");
var appSettings = require("application-settings");
var LoginComponent = (function () {
    function LoginComponent(page, userService, router) {
        this.page = page;
        this.userService = userService;
        this.router = router;
        page.actionBarHidden = true;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.checkToken();
    };
    LoginComponent.prototype.checkToken = function () {
        var _this = this;
        this.userService.profile()
            .subscribe(function (response) { return _this.router.navigate(['/menu'], { clearHistory: true }); });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(JSON.stringify(this.user));
        this.userService.login(this.user)
            .subscribe(function (response) {
            appSettings.setString("token", response.content.token);
            _this.router.navigate(['/menu'], { clearHistory: true });
        }, function (error) {
            if (error.json().message === "invalid_credentials") {
                alert("Nama pengguna atau Kata Sandi salah");
            }
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(["/register"]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "ns-login",
            moduleId: module.id,
            providers: [user_service_1.UserService],
            templateUrl: "./login.component.html",
            styleUrls: ["./login-common.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page,
            user_service_1.UserService,
            nativescript_angular_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
