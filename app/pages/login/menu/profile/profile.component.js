"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var profile_service_1 = require("./profile.service");
var Toast = require("nativescript-toast");
var nativescript_angular_1 = require("nativescript-angular");
var ProfileComponent = (function () {
    function ProfileComponent(service, router) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.service.getProfile().subscribe(function (res) { return _this.profile = res.content; }, function (err) { return Toast.makeText(err.json().message).show(); });
    }
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.service.updateProfile(this.profile).subscribe(function (res) {
            Toast.makeText("Berhasil").show();
            _this.router.backToPreviousPage();
        }, function (err) { return Toast.makeText(err.json().message).show(); });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: "ns-login",
            moduleId: module.id,
            providers: [profile_service_1.ProfileService],
            templateUrl: "profile.component.html",
            styleUrls: ["./profile-common.css"]
        }),
        __metadata("design:paramtypes", [profile_service_1.ProfileService, nativescript_angular_1.RouterExtensions])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUN4QyxxREFBaUQ7QUFDakQsMENBQTRDO0FBRTVDLDZEQUFzRDtBQVN0RDtJQUlJLDBCQUFvQixPQUFzQixFQUFVLE1BQXVCO1FBQTNFLGlCQUtDO1FBTG1CLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2RSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FDL0IsVUFBQSxHQUFHLElBQUcsT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFhLEdBQUcsQ0FBQyxPQUFPLEVBQXBDLENBQW9DLEVBQzFDLFVBQUEsR0FBRyxJQUFHLE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQXpDLENBQXlDLENBQ2xELENBQUM7SUFDTixDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FDOUMsVUFBQSxHQUFHO1lBQ0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxLQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDckMsQ0FBQyxFQUNELFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQXpDLENBQXlDLENBQ25ELENBQUM7SUFDTixDQUFDO0lBbkJRLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLFVBQVU7WUFDbkIsUUFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLFNBQVMsRUFBQyxDQUFDLGdDQUFjLENBQUM7WUFDMUIsV0FBVyxFQUFDLHdCQUF3QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQUs4QixnQ0FBYyxFQUFpQix1Q0FBZ0I7T0FKbEUsZ0JBQWdCLENBcUI1QjtJQUFELHVCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UHJvZmlsZVNlcnZpY2V9IGZyb20gXCIuL3Byb2ZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XHJcbmltcG9ydCB7UHJvZmlsZX0gZnJvbSBcIi4vcHJvZmlsZVwiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjpcIm5zLWxvZ2luXCIsXHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICBwcm92aWRlcnM6W1Byb2ZpbGVTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOlwicHJvZmlsZS5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3Byb2ZpbGUtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9maWxlOlByb2ZpbGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOlByb2ZpbGVTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXJFeHRlbnNpb25zKXtcclxuICAgICAgICB0aGlzLnNlcnZpY2UuZ2V0UHJvZmlsZSgpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzPT4gdGhpcy5wcm9maWxlID0gPFByb2ZpbGU+IHJlcy5jb250ZW50LFxyXG4gICAgICAgICAgICBlcnI9PiBUb2FzdC5tYWtlVGV4dChlcnIuanNvbigpLm1lc3NhZ2UpLnNob3coKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZVByb2ZpbGUodGhpcy5wcm9maWxlKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChcIkJlcmhhc2lsXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnIgPT4gVG9hc3QubWFrZVRleHQoZXJyLmpzb24oKS5tZXNzYWdlKS5zaG93KClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufSJdfQ==