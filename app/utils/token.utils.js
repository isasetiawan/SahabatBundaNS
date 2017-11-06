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
        var headers = new http_1.Headers();
        headers.append("Secret", "fEZYTJ8L2K8y94fmJ8c94stx6plDmL62");
        headers.append("Authorization", "Bearer " + localStorage.getItem("token"));
        return this.http.post(config_1.Config.urlAPI + "/profile", "", { headers: headers }).catch(function (err) { return Rx_1.Observable.throw(err); });
    };
    TokenUtils.getHeaders = function () {
        var saved_token = localStorage.getItem("token");
        var headers = new http_1.Headers();
        headers.append("Secret", config_1.Config.keyAPI);
        headers.append("Authorization", "Bearer " + saved_token);
        headers.append("Content-Type", "application/json");
        return headers;
    };
    TokenUtils.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    TokenUtils = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], TokenUtils);
    return TokenUtils;
}());
exports.TokenUtils = TokenUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4udXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbi51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFFL0IsMENBQXNDO0FBR3RDO0lBSUksb0JBQW9CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO0lBRTdCLENBQUM7SUFFRCwrQkFBVSxHQUFWO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBQyxrQ0FBa0MsQ0FBQyxDQUFBO1FBQzNELE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFDLFNBQVMsR0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDdkUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQU0sQ0FBQyxNQUFNLEdBQUMsVUFBVSxFQUN0QyxFQUFFLEVBQ0YsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQ3BCLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsZUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFFTSxxQkFBVSxHQUFqQjtRQUNJLElBQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRU0sdUJBQVksR0FBbkIsVUFBb0IsS0FBYztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBOUJRLFVBQVU7UUFEdEIsaUJBQVUsRUFBRTt5Q0FLZ0IsV0FBSTtPQUpwQixVQUFVLENBZ0N0QjtJQUFELGlCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi9wYWdlcy9jb25maWdcIlxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVG9rZW5VdGlscyB7XHJcbiAgICBwdWJsaWMgaGVhZGVyczpIZWFkZXJzO1xyXG4gICAgcHVibGljIHNhdmVkX3Rva2VuOnN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tUb2tlbigpe1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIlNlY3JldFwiLFwiZkVaWVRKOEwySzh5OTRmbUo4Yzk0c3R4NnBsRG1MNjJcIilcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIixcIkJlYXJlciBcIitsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChDb25maWcudXJsQVBJK1wiL3Byb2ZpbGVcIixcclxuICAgICAgICAgICAgICAgIFwiXCIsXHJcbiAgICAgICAgICAgICAgICB7aGVhZGVyczpoZWFkZXJzfVxyXG4gICAgICAgICAgICApLmNhdGNoKGVycj0+T2JzZXJ2YWJsZS50aHJvdyhlcnIpKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRIZWFkZXJzKCk6SGVhZGVyc3tcclxuICAgICAgICBsZXQgc2F2ZWRfdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIlNlY3JldFwiLCBDb25maWcua2V5QVBJKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIrc2F2ZWRfdG9rZW4pO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaGFuZGxlRXJyb3JzKGVycm9yOlJlc3BvbnNlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcilcclxuICAgIH1cclxuXHJcbn0iXX0=