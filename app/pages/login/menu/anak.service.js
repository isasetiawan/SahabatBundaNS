"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../../config");
var http_1 = require("@angular/common/http");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var AnakService = (function () {
    function AnakService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    AnakService.prototype.index = function () {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/anak")
            .catch(function (err) { return Rx_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    AnakService.prototype.update = function (anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + "/anak/" + anak.id, anak)
            .catch(function (err) { return Rx_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    AnakService.prototype.store = function (anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + "/anak", anak)
            .catch(function (err) { return Rx_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    AnakService.prototype.delete = function (password, idanak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + "/anak/" + idanak, {
            _method: "delete",
            password: password
        })
            .catch(function (err) { return Rx_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    AnakService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AnakService);
    return AnakService;
}());
exports.AnakService = AnakService;
