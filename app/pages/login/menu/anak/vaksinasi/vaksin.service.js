"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_1 = require("../../../../config");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/common/http");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var VaksinService = (function () {
    function VaksinService(http) {
        this.http = http;
        this.loadingindicator = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    VaksinService.prototype.show = function (idanak) {
        var _this = this;
        this.loadingindicator.show(config_1.Config.progress_dialog_options);
        return this.http.get(config_1.Config.urlAPI + "/anak/" + idanak + "/vaksinasi")
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .finally(function () { return _this.loadingindicator.hide(); });
    };
    VaksinService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], VaksinService);
    return VaksinService;
}());
exports.VaksinService = VaksinService;
