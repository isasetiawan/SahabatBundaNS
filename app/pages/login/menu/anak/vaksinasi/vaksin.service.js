"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../../../../config");
var Observable_1 = require("rxjs/Observable");
var VaksinService = (function () {
    function VaksinService(http) {
        this.http = http;
    }
    VaksinService.prototype.getHeaders = function () {
        var saved_token = localStorage.getItem("token");
        var headers = new http_1.Headers();
        headers.append("Secret", config_1.Config.keyAPI);
        headers.append("Authorization", "Bearer " + saved_token);
        headers.append("Content-Type", "application/json");
        return headers;
    };
    VaksinService.prototype.show = function (idanak) {
        return this.http.get(config_1.Config.urlAPI + "/anak/" + idanak + "/vaksinasi", { headers: this.getHeaders() }).map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    VaksinService.prototype.handleErrors = function (error) {
        console.log("Anak Service ", JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    VaksinService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], VaksinService);
    return VaksinService;
}());
exports.VaksinService = VaksinService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFrc2luLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2YWtzaW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzQ0FBNEM7QUFDNUMsNkNBQTBDO0FBQzFDLDhDQUEyQztBQUczQztJQUNJLHVCQUFvQixJQUFTO1FBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztJQUFFLENBQUM7SUFFaEMsa0NBQVUsR0FBVjtRQUNJLElBQUksV0FBVyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUQsNEJBQUksR0FBSixVQUFLLE1BQU07UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsUUFBUSxHQUFDLE1BQU0sR0FBQyxZQUFZLEVBQzFDLEVBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUM5QixDQUFJLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLEtBQWM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBdkJRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FFZ0IsV0FBSTtPQURwQixhQUFhLENBd0J6QjtJQUFELG9CQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi8uLi8uLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWYWtzaW5TZXJ2aWNle1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApe31cclxuXHJcbiAgICBnZXRIZWFkZXJzKCk6SGVhZGVyc3tcclxuICAgICAgICBsZXQgc2F2ZWRfdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIlNlY3JldFwiLCBDb25maWcua2V5QVBJKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIrc2F2ZWRfdG9rZW4pO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxuXHJcbiAgICBzaG93KGlkYW5hayl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrXCIvYW5hay9cIitpZGFuYWsrXCIvdmFrc2luYXNpXCIsXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOnRoaXMuZ2V0SGVhZGVycygpfVxyXG4gICAgICAgICkgICAubWFwKHJlcz0+cmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9ycyhlcnJvcjpSZXNwb25zZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbmFrIFNlcnZpY2UgXCIsSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpXHJcbiAgICB9XHJcbn0iXX0=