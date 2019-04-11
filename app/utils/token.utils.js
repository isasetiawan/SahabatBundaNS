"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../pages/config");
var TokenUtils = (function () {
    function TokenUtils(http) {
        this.http = http;
    }
    TokenUtils.prototype.checkToken = function () {
        return this.http.post(config_1.Config.urlAPI + "/profile", {})
            .catch(function (err) { return Rx_1.Observable.throw(err); });
    };
    TokenUtils = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TokenUtils);
    return TokenUtils;
}());
exports.TokenUtils = TokenUtils;
