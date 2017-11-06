"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var newuser_1 = require("./newuser");
var register_service_1 = require("./register.service");
var router_1 = require("@angular/router");
var dialogs = require("ui/dialogs");
var RegisterComponent = (function () {
    function RegisterComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this._user = new newuser_1.Newuser("", "", "", "", "", "", "", "", "", "", "", "");
    };
    Object.defineProperty(RegisterComponent.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        this.service.register(this._user)
            .subscribe(function (response) { return dialogs.alert("Akun berhasil didaftarkan").then(function () { return _this.router.navigate(['/login']); }); }, function (error) { return alert(error.json().message); });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "ns-register",
            moduleId: module.id,
            providers: [register_service_1.RegisterService],
            templateUrl: "./register.component.html",
            styleUrls: ["./register-common.css", "./register.css"]
        }),
        __metadata("design:paramtypes", [register_service_1.RegisterService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBRWhELHFDQUFrQztBQUNsQyx1REFBbUQ7QUFDbkQsMENBQXVDO0FBQ3ZDLG9DQUFzQztBQVN0QztJQU9JLDJCQUFvQixPQUF1QixFQUFVLE1BQWE7UUFBOUMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFPO0lBQUUsQ0FBQztJQU5yRSxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRSxJQUFJLGlCQUFPLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBTUQsc0JBQUksbUNBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsa0NBQU0sR0FBTjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUM1QixTQUFTLENBQ04sVUFBQyxRQUFRLElBQUssT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQWhDLENBQWdDLENBQUMsRUFBdEYsQ0FBc0YsRUFDcEcsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixDQUN6QyxDQUFBO0lBQ1QsQ0FBQztJQW5CUSxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxhQUFhO1lBQ3RCLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixTQUFTLEVBQUMsQ0FBQyxrQ0FBZSxDQUFDO1lBQzNCLFdBQVcsRUFBQywyQkFBMkI7WUFDdkMsU0FBUyxFQUFDLENBQUMsdUJBQXVCLEVBQUMsZ0JBQWdCLENBQUM7U0FDdkQsQ0FBQzt5Q0FROEIsa0NBQWUsRUFBaUIsZUFBTTtPQVB6RCxpQkFBaUIsQ0FvQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBzY3JvbGxWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCI7XHJcbmltcG9ydCB7TmV3dXNlcn0gZnJvbSBcIi4vbmV3dXNlclwiO1xyXG5pbXBvcnQge1JlZ2lzdGVyU2VydmljZX0gZnJvbSBcIi4vcmVnaXN0ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOlwibnMtcmVnaXN0ZXJcIixcclxuICAgIG1vZHVsZUlkOm1vZHVsZS5pZCxcclxuICAgIHByb3ZpZGVyczpbUmVnaXN0ZXJTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOlwiLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOltcIi4vcmVnaXN0ZXItY29tbW9uLmNzc1wiLFwiLi9yZWdpc3Rlci5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlcj0gbmV3IE5ld3VzZXIoXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIF91c2VyOk5ld3VzZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOlJlZ2lzdGVyU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKXt9XHJcblxyXG4gICAgZ2V0IHVzZXIoKTpOZXd1c2Vye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyXHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCl7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuX3VzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IGRpYWxvZ3MuYWxlcnQoXCJBa3VuIGJlcmhhc2lsIGRpZGFmdGFya2FuXCIpLnRoZW4oKCk9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKSksXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KGVycm9yLmpzb24oKS5tZXNzYWdlKSxcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG59Il19