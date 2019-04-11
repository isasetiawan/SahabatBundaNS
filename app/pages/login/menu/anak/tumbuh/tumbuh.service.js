"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../../../config");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var http_1 = require("@angular/common/http");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var TumbuhService = (function () {
    function TumbuhService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    TumbuhService.prototype.show = function (id) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/anak/" + id + "/tumbuh")
            .catch(function (err) { return Rx_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    TumbuhService.prototype.store = function (anak, tumbuh) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + "/anak/" + anak.id + "/tumbuh/" + tumbuh.tumbuh_id, tumbuh)
            .catch(function (err) { return Rx_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    TumbuhService.prototype.update = function (anak, tumbuh) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + "/anak/" + anak.id + "/tumbuh/" + tumbuh.tumbuh_id, tumbuh)
            .catch(function (err) { return Rx_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    TumbuhService.prototype.graphBBU = function (anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/anak/" + anak.id + "/tumbuh/bbu")
            .catch(function (err) { return Rx_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    TumbuhService.prototype.graphTBU = function (anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/anak/" + anak.id + "/tumbuh/tbu")
            .catch(function (err) { return Rx_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    TumbuhService.prototype.graphTBBB = function (anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/anak/" + anak.id + "/tumbuh/tbbb")
            .catch(function (err) { return Rx_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    TumbuhService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TumbuhService);
    return TumbuhService;
}());
exports.TumbuhService = TumbuhService;
