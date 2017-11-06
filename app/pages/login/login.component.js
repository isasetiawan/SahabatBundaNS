"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var user_service_1 = require("./user.service");
var user_1 = require("./user");
var token_utils_1 = require("../../utils/token.utils");
var nativescript_angular_1 = require("nativescript-angular");
require("nativescript-localstorage");
var LoginComponent = (function () {
    function LoginComponent(page, userService, router, tokutil) {
        this.page = page;
        this.userService = userService;
        this.router = router;
        this.tokutil = tokutil;
        page.actionBarHidden = true;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.checkToken();
    };
    LoginComponent.prototype.checkToken = function () {
        var _this = this;
        this.tokutil.checkToken().subscribe(function (response) { return _this.router.navigate(['/menu'], { clearHistory: true }); });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(JSON.stringify(this.user));
        this.userService.login(this.user)
            .subscribe(function (response) {
            localStorage.setItem("token", response.content.token);
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
            nativescript_angular_1.RouterExtensions,
            token_utils_1.TokenUtils])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELGdDQUErQjtBQUMvQiwrQ0FBMkM7QUFDM0MsK0JBQTRCO0FBQzVCLHVEQUFrRDtBQUNsRCw2REFBc0Q7QUFDdEQsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUE7QUFTcEM7SUFJSSx3QkFDWSxJQUFTLEVBQ1QsV0FBdUIsRUFDdkIsTUFBdUIsRUFDdkIsT0FBa0I7UUFIbEIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNULGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFFdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTCxpQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FDL0IsVUFBQyxRQUFRLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQXRELENBQXNELENBQ3ZFLENBQUE7SUFDTCxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQWNDO1FBYkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDNUIsU0FBUyxDQUNOLFVBQUMsUUFBUTtZQUNMLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzFELENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDRixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxLQUFLLHFCQUFxQixDQUFDLENBQUMsQ0FBQztnQkFDakQsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUE7WUFDaEQsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFBO0lBQ1QsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQTFDUSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsVUFBVTtZQUNuQixRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixXQUFXLEVBQUMsd0JBQXdCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLENBQUM7eUNBTW1CLFdBQUk7WUFDRywwQkFBVztZQUNoQix1Q0FBZ0I7WUFDZix3QkFBVTtPQVJyQixjQUFjLENBNEMxQjtJQUFELHFCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHtUb2tlblV0aWxzfSBmcm9tIFwiLi4vLi4vdXRpbHMvdG9rZW4udXRpbHNcIlxyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjpcIm5zLWxvZ2luXCIsXHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDpcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTpQYWdlLCBcclxuICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlLCBcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjpSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgdG9rdXRpbDpUb2tlblV0aWxzKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrVG9rZW4oKVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVG9rZW4oKXtcclxuICAgICAgICB0aGlzLnRva3V0aWwuY2hlY2tUb2tlbigpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9tZW51J10seyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpKTtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT57IFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzcG9uc2UuY29udGVudC50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbWVudSddLHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKGVycm9yKSA9PntcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IuanNvbigpLm1lc3NhZ2UgPT09IFwiaW52YWxpZF9jcmVkZW50aWFsc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiTmFtYSBwZW5nZ3VuYSBhdGF1IEthdGEgU2FuZGkgc2FsYWhcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcigpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yZWdpc3RlclwiXSlcclxuICAgIH1cclxuXHJcbn0iXX0=