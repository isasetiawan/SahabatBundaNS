"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../../config");
var Observable_1 = require("rxjs/Observable");
var HamilService = (function () {
    function HamilService(http) {
        this.http = http;
    }
    HamilService.prototype.getHeaders = function () {
        var saved_token = localStorage.getItem("token");
        var headers = new http_1.Headers();
        headers.append("Secret", config_1.Config.keyAPI);
        headers.append("Authorization", "Bearer " + saved_token);
        headers.append("Content-Type", "application/json");
        return headers;
    };
    HamilService.prototype.index = function () {
        return this.http.get(config_1.Config.urlAPI + "/kehamilan/", { headers: this.getHeaders() }).map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    HamilService.prototype.show = function (idkehamilan) {
        return this.http.get(config_1.Config.urlAPI + "/kehamilan/" + idkehamilan, { headers: this.getHeaders() }).map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    HamilService.prototype.r_kehamilan = function (idkehamilan) {
        return this.http.get(config_1.Config.urlAPI + "/kehamilan/" + idkehamilan + "/riwayat", { headers: this.getHeaders() }).map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    HamilService.prototype.r_kesehatan = function (idkehamilan) {
        return this.http.get(config_1.Config.urlAPI + "/kehamilan/" + idkehamilan + "/kesehatan", { headers: this.getHeaders() }).map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    HamilService.prototype.r_melahirkan = function (idkehamilan) {
        return this.http.get(config_1.Config.urlAPI + "/kehamilan/" + idkehamilan + "/melahirkan", { headers: this.getHeaders() }).map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    HamilService.prototype.r_keluhan = function (idkehamilan) {
        return this.http.get(config_1.Config.urlAPI + "/kehamilan/" + idkehamilan + "/keluhan", { headers: this.getHeaders() }).map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    HamilService.prototype.handleErrors = function (error) {
        console.log("Anak Service ", JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    HamilService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], HamilService);
    return HamilService;
}());
exports.HamilService = HamilService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtaWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbWlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0NBQTRDO0FBQzVDLHVDQUFvQztBQUNwQyw4Q0FBMkM7QUFHM0M7SUFFSSxzQkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFFN0IsQ0FBQztJQUVELGlDQUFVLEdBQVY7UUFDSSxJQUFJLFdBQVcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsYUFBYSxFQUMzQixFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FDOUIsQ0FBSSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3BCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxXQUFXO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixlQUFNLENBQUMsTUFBTSxHQUFDLGFBQWEsR0FBQyxXQUFXLEVBQ3ZDLEVBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUM5QixDQUFJLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLFdBQVc7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixlQUFNLENBQUMsTUFBTSxHQUFDLGFBQWEsR0FBQyxXQUFXLEdBQUMsVUFBVSxFQUNsRCxFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FDOUIsQ0FBSSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3BCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxXQUFXO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sR0FBQyxhQUFhLEdBQUMsV0FBVyxHQUFDLFlBQVksRUFDcEQsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQzlCLENBQUksR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsV0FBVztRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2hCLGVBQU0sQ0FBQyxNQUFNLEdBQUMsYUFBYSxHQUFDLFdBQVcsR0FBQyxhQUFhLEVBQ3JELEVBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUM5QixDQUFJLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLFdBQVc7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixlQUFNLENBQUMsTUFBTSxHQUFDLGFBQWEsR0FBQyxXQUFXLEdBQUMsVUFBVSxFQUNsRCxFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FDOUIsQ0FBSSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3BCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxLQUFjO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQWxFUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBR2dCLFdBQUk7T0FGcEIsWUFBWSxDQW9FeEI7SUFBRCxtQkFBQztDQUFBLEFBcEVELElBb0VDO0FBcEVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7Q29uZmlnfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGFtaWxTZXJ2aWNle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGVhZGVycygpOkhlYWRlcnN7XHJcbiAgICAgICAgbGV0IHNhdmVkX3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJTZWNyZXRcIiwgQ29uZmlnLmtleUFQSSk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiK3NhdmVkX3Rva2VuKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5kZXgoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSStcIi9rZWhhbWlsYW4vXCIsXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOnRoaXMuZ2V0SGVhZGVycygpfVxyXG4gICAgICAgICkgICAubWFwKHJlcz0+cmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgfVxyXG5cclxuICAgIHNob3coaWRrZWhhbWlsYW4pe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAgICAgICBDb25maWcudXJsQVBJK1wiL2tlaGFtaWxhbi9cIitpZGtlaGFtaWxhbixcclxuICAgICAgICAgICAge2hlYWRlcnM6dGhpcy5nZXRIZWFkZXJzKCl9XHJcbiAgICAgICAgKSAgIC5tYXAocmVzPT5yZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICB9XHJcblxyXG4gICAgcl9rZWhhbWlsYW4oaWRrZWhhbWlsYW4pe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAgICAgICBDb25maWcudXJsQVBJK1wiL2tlaGFtaWxhbi9cIitpZGtlaGFtaWxhbitcIi9yaXdheWF0XCIsXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOnRoaXMuZ2V0SGVhZGVycygpfVxyXG4gICAgICAgICkgICAubWFwKHJlcz0+cmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgfVxyXG5cclxuICAgIHJfa2VzZWhhdGFuKGlka2VoYW1pbGFuKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSStcIi9rZWhhbWlsYW4vXCIraWRrZWhhbWlsYW4rXCIva2VzZWhhdGFuXCIsXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOnRoaXMuZ2V0SGVhZGVycygpfVxyXG4gICAgICAgICkgICAubWFwKHJlcz0+cmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgfVxyXG5cclxuICAgIHJfbWVsYWhpcmthbihpZGtlaGFtaWxhbil7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkrXCIva2VoYW1pbGFuL1wiK2lka2VoYW1pbGFuK1wiL21lbGFoaXJrYW5cIixcclxuICAgICAgICAgICAge2hlYWRlcnM6dGhpcy5nZXRIZWFkZXJzKCl9XHJcbiAgICAgICAgKSAgIC5tYXAocmVzPT5yZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICB9XHJcblxyXG4gICAgcl9rZWx1aGFuKGlka2VoYW1pbGFuKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICAgICAgICAgQ29uZmlnLnVybEFQSStcIi9rZWhhbWlsYW4vXCIraWRrZWhhbWlsYW4rXCIva2VsdWhhblwiLFxyXG4gICAgICAgICAgICB7aGVhZGVyczp0aGlzLmdldEhlYWRlcnMoKX1cclxuICAgICAgICApICAgLm1hcChyZXM9PnJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycylcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6UmVzcG9uc2Upe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQW5hayBTZXJ2aWNlIFwiLEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKVxyXG4gICAgfVxyXG5cclxufSJdfQ==