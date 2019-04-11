"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var http_1 = require("@angular/common/http");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var Observable_1 = require("rxjs/Observable");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    UserService.prototype.login = function (user) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + "/login", user)
            .finally(function () { return _this.loadingindicator.hide(); })
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + "/logout", JSON.stringify({}))
            .finally(function () { return _this.loadingindicator.hide(); })
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    UserService.prototype.profile = function () {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/profile")
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    UserService.prototype.edit_profile = function (profile) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + "/profile", profile)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
