"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var config_1 = require("../../../../config");
var Observable_1 = require("rxjs/Observable");
var KesehatanService = (function () {
    function KesehatanService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    KesehatanService.prototype.index = function (anak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/anak/" + anak.id + "/kesehatan/all", { headers: config_1.Config.createHeaders() })
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KesehatanService.prototype.store = function (data) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.post(config_1.Config.urlAPI + "/anak/" + data.anak_id + "/kesehatan", data, { headers: config_1.Config.createHeaders() })
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KesehatanService.prototype.edit = function (data) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.put(config_1.Config.urlAPI + "/anak/" + data.anak_id + "/kesehatan/" + data.id, data, { headers: config_1.Config.createHeaders() })
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    KesehatanService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], KesehatanService);
    return KesehatanService;
}());
exports.KesehatanService = KesehatanService;
