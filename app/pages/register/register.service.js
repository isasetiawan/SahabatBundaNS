"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../config");
var http_1 = require("@angular/common/http");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var Observable_1 = require("rxjs/Observable");
var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    RegisterService.prototype.register = function (user) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + "/register", user)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    RegisterService.prototype.provinsi = function () {
        return this.http.get(config_1.Config.urlAPI + "/provinsi")
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    RegisterService.prototype.kabupaten = function (id) {
        return this.http.get(config_1.Config.urlAPI + "/kabupaten/" + id)
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    RegisterService.prototype.kecamatan = function (id) {
        return this.http.get(config_1.Config.urlAPI + "/kecamatan/" + id)
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    RegisterService.prototype.kelurahan = function (id) {
        return this.http.get(config_1.Config.urlAPI + "/kelurahan/" + id)
            .catch(function (err) { return Observable_1.Observable.throw(err); });
    };
    RegisterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], RegisterService);
    return RegisterService;
}());
exports.RegisterService = RegisterService;
