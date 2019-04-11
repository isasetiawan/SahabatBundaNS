"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../../config");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var Observable_1 = require("rxjs/Observable");
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    ProfileService.prototype.getProfile = function () {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/profile")
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    ProfileService.prototype.updateProfile = function (profile) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + "/profile", profile)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
