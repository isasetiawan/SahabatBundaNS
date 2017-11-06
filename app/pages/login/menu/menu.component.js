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
            _this.anak_anak = new observable_array_1.ObservableArray(response);
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        }, function (error) {
            if (error.status === 401) {
                Toast.makeText("Silahkan login dahulu").show();
                _this.router.navigate(['']);
            }
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
        }, function (err) { return Toast.makeText(err.json().message).show(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCwyRUFBeUU7QUFDekUsK0NBQTJDO0FBQzNDLDBDQUE0QztBQUM1QywwQ0FBeUQ7QUFFekQsMENBQWlEO0FBQ2pELDREQUF3RDtBQUV4RCxpREFBNkM7QUFDN0MsZ0RBQTRDO0FBQzVDLDZEQUFzRDtBQVN0RDtJQU9JLHVCQUFvQixXQUF1QixFQUN2QixZQUF5QixFQUN6QixXQUF1QixFQUN2QixNQUFhLEVBQ2IsU0FBMEIsRUFDMUIsUUFBeUI7UUFMN0MsaUJBUUM7UUFSbUIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBUDdDLGFBQVEsR0FBRywwQkFBVyxDQUFDLFdBQVcsQ0FBQztRQVMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUE7SUFDeEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFNUIsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQWIsaUJBZUM7UUFkRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTthQUN2QixTQUFTLENBQ04sVUFBQyxRQUFRO1lBQ0wsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtDQUFlLENBQUMsUUFB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QUFDLDRCQUFZLEVBQUMsMEJBQVcsQ0FBQztZQUNoRCxXQUFXLEVBQUMsdUJBQXVCO1lBQ25DLFNBQVMsRUFBQyxDQUFDLGlCQUFpQixDQUFDO1NBQ2hDLENBQUM7eUNBUWtDLDBCQUFXO1lBQ1YsNEJBQVk7WUFDYiwwQkFBVztZQUNoQixlQUFNO1lBQ0gsdUNBQWdCO1lBQ2pCLHlCQUFnQjtPQVpwQyxhQUFhLENBaUZ6QjtJQUFELG9CQUFDO0NBQUEsQUFqRkQsSUFpRkM7QUFqRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0IHtBbmFrU2VydmljZX0gZnJvbSBcIi4vYW5hay5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XHJcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7QW5ha30gZnJvbSBcIi4vYW5ha1wiO1xyXG5pbXBvcnQge1BsYXRmb3JtTG9jYXRpb259IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtTdGF0aWNGdW5jc30gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3N0YXRpYy5mdW5jc1wiO1xyXG5pbXBvcnQge0tlaGFtaWxhbn0gZnJvbSBcIi4vS2VoYW1pbGFuXCI7XHJcbmltcG9ydCB7SGFtaWxTZXJ2aWNlfSBmcm9tIFwiLi9oYW1pbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6XCJucy1sb2dpblwiLFxyXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxyXG4gICAgcHJvdmlkZXJzOltBbmFrU2VydmljZSxIYW1pbFNlcnZpY2UsVXNlclNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6XCIuL21lbnUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczpbXCJtZW51LWNvbW1vbi5jc3NcIl0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBhbmFrX2FuYWs6T2JzZXJ2YWJsZUFycmF5PEFuYWs+O1xyXG4gICAga2VoYW1pbGFuczpPYnNlcnZhYmxlQXJyYXk8S2VoYW1pbGFuPjtcclxuXHJcbiAgICBzaG93RGF0ZSA9IFN0YXRpY0Z1bmNzLmdldE1vbnRoQWdlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5ha1NlcnZpY2U6QW5ha1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIGhhbWlsU2VydmljZTpIYW1pbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOlVzZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHQ6Um91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgbG9jYXRpb246UGxhdGZvcm1Mb2NhdGlvbilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLm9uUG9wU3RhdGUoKGUpPT57dGhpcy5nZXRBbmFrcyhudWxsKX0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0QW5ha3MobnVsbClcclxuICAgICAgICB0aGlzLmdldEtlaGFtaWxhbnMobnVsbClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5ha3MoYXJncyl7XHJcbiAgICAgICAgdGhpcy5hbmFrU2VydmljZS5pbmRleCgpXHJcbiAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWtfYW5hayA9IG5ldyBPYnNlcnZhYmxlQXJyYXkocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgIT09IG51bGwpIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQoXCJTaWxhaGthbiBsb2dpbiBkYWh1bHVcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnJ10pXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgIT09IG51bGwpIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBnZXRLZWhhbWlsYW5zKGFyZ3Mpe1xyXG4gICAgICAgIHRoaXMuaGFtaWxTZXJ2aWNlLmluZGV4KCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXM9PntcclxuICAgICAgICAgICAgICAgIHRoaXMua2VoYW1pbGFucyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkocmVzLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgIT09IG51bGwpIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gVG9hc3QubWFrZVRleHQoZXJyLmpzb24oKS5tZXNzYWdlKS5zaG93KClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgb25BZGRBbmFrVGFwKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FuYWtcIl0pXHJcbiAgICB9XHJcblxyXG4gICAgb25IYW1pbFRhcChpdGVtKXtcclxuICAgICAgICBsZXQgbmF2ZXh0cmE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGl0ZW1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9oYW1pbFwiXSxuYXZleHRyYSlcclxuICAgIH1cclxuXHJcbiAgICBvbml0ZW10YXAoaXRlbSl7XHJcbiAgICAgICAgbGV0IG5hdmV4dHJhOk5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBpdGVtXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvYW5ha1wiXSxuYXZleHRyYSlcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKXtcclxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ291dCgpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzPT57XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dC5uYXZpZ2F0ZShbJy9sb2dpbiddLHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycj0+VG9hc3QubWFrZVRleHQoZXJyLmpzb24oKS5tZXNzYWdlKS5zaG93KClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgZ290b1Byb2ZpbGUoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcHJvZmlsZVwiXSlcclxuICAgIH1cclxufSJdfQ==