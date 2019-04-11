"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var config_1 = require("./pages/config");
var Toast = require("nativescript-toast");
var dialogs = require("ui/dialogs");
var AuthInterceptorService = (function () {
    function AuthInterceptorService() {
    }
    AuthInterceptorService.prototype.intercept = function (req, next) {
        var request = req.clone({
            headers: config_1.Config.createHeaders()
        });
        console.log("");
        console.log("Creating request to " + req.url);
        return next.handle(request).catch(function (err) {
            console.log("error happened " + JSON.stringify(err));
            Toast.makeText(err.error.message).show();
            if (err.error.content !== undefined) {
                var errors = "";
                for (var key in err.error.content) {
                    errors += err.error.content[key] + "\n";
                }
                dialogs.alert({
                    title: err.error.message,
                    message: errors,
                    okButtonText: "Ok"
                }).then(function () { });
            }
            return Observable_1.Observable.throw(err);
        });
    };
    AuthInterceptorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());
exports.AuthInterceptorService = AuthInterceptorService;
