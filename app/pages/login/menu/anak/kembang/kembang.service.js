"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../../../config");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/common/http");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var KembangService = (function () {
    function KembangService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    KembangService.prototype.index = function (anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/anak/" + anak.id + "/kembang")
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KembangService.prototype.show = function (idanak, idkembang) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/anak/" + idanak + "/kembang/" + idkembang)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KembangService.prototype.store = function (jawaban, idkembang, idanak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + "/anak/" + idanak + "/kembang/" + idkembang, jawaban)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    //get edit apa :/
    KembangService.prototype.edit = function (idanak, idkembang) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/anak/" + idanak + "/kembang/" + idkembang + "/edit")
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    //post update buat apa :/
    KembangService.prototype.update = function (jawaban, idkembang, idanak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + "/anak/" + idanak + "/kembang/" + idkembang, jawaban)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KembangService.prototype.result = function (idkembang, idanak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/anak/" + idanak + "/kembang/" + idkembang + "/result")
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KembangService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], KembangService);
    return KembangService;
}());
exports.KembangService = KembangService;
