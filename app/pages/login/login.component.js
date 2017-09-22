"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
require("nativescript-localstorage");
var user_service_1 = require("./user.service");
var user_1 = require("./user");
var LoginComponent = (function () {
    function LoginComponent(page, userService) {
        this.page = page;
        this.userService = userService;
        page.actionBarHidden = true;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.login = function () {
        console.log(JSON.stringify(this.user));
        this.userService.login(this.user)
            .subscribe(function (response) { return localStorage.setItem("token", response.content.token); }),
            function (error) { return alert(error.json().message); };
    };
    LoginComponent.prototype.register = function () {
        alert(localStorage.getItem("token"));
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "ns-login",
            moduleId: module.id,
            providers: [user_service_1.UserService],
            templateUrl: "./login.component.html",
            styleUrls: ["./login-common.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLGdDQUErQjtBQUMvQixPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtBQUVwQywrQ0FBMkM7QUFDM0MsK0JBQTRCO0FBUzVCO0lBR0ksd0JBQW9CLElBQVMsRUFBVSxXQUF1QjtRQUExQyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDMUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDNUIsU0FBUyxDQUNOLFVBQUMsUUFBUSxJQUFJLE9BQUEsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBckQsQ0FBcUQsQ0FBQztZQUNuRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUN4QyxFQURjLENBQ2QsQ0FBQTtJQUNULENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBbkJRLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxVQUFVO1lBQ25CLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1lBQ3hCLFdBQVcsRUFBQyx3QkFBd0I7WUFDcEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQzt5Q0FJMkIsV0FBSSxFQUFzQiwwQkFBVztPQUhyRCxjQUFjLENBcUIxQjtJQUFELHFCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5yZXF1aXJlKFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiKVxyXG5cclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjpcIm5zLWxvZ2luXCIsXHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDpcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICB1c2VyOlVzZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOlBhZ2UsIHByaXZhdGUgdXNlclNlcnZpY2U6VXNlclNlcnZpY2Upe1xyXG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXNwb25zZS5jb250ZW50LnRva2VuKSksXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KGVycm9yLmpzb24oKS5tZXNzYWdlXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlcigpe1xyXG4gICAgICAgIGFsZXJ0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpXHJcbiAgICB9XHJcblxyXG59Il19