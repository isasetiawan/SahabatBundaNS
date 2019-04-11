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
        this.service.getProfile().subscribe(function (res) { return _this.profile = res.content; });
    }
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.service.updateProfile(this.profile).subscribe(function (res) {
            Toast.makeText("Berhasil").show();
            _this.router.backToPreviousPage();
        });
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
