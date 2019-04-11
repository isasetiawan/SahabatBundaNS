"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var appSettings = require("application-settings");
var Config = (function () {
    function Config() {
    }
    Config.createHeaders = function () {
        var saved_token = appSettings.getString("token");
        var header = {
            "Secret": this.keyAPI,
            "Authorization": "Bearer " + saved_token,
        };
        return new http_1.HttpHeaders(header);
    };
    Config.urlAPI = "https://dev.ibu.sahabatbundaku.org/api";
    Config.keyAPI = "fEZYTJ8L2K8y94fmJ8c94stx6plDmL62";
    Config.progress_dialog_options = {
        message: 'Memproses data',
        progress: 0.65,
        android: {
            indeterminate: true,
            cancelable: false,
            cancelListener: function (dialog) { console.log("Loading cancelled"); },
            // max: 100,
            // progressNumberFormat: "%1d/%2d",
            // progressPercentFormat: 0.53,
            progressStyle: 1,
            secondaryProgress: 1
        },
        ios: {
            details: "Memroses data",
            margin: 10,
            dimBackground: true,
            color: "#4B9ED6",
            backgroundColor: "yellow",
            userInteractionEnabled: false,
            hideBezel: true,
        }
    };
    return Config;
}());
exports.Config = Config;
