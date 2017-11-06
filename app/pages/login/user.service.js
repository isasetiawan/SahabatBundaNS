"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getHeaders = function () {
        var saved_token = localStorage.getItem("token");
        var headers = new http_1.Headers();
        headers.append("Secret", config_1.Config.keyAPI);
        headers.append("Authorization", "Bearer " + saved_token);
        headers.append("Content-Type", "application/json");
        return headers;
    };
    UserService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Secret", config_1.Config.keyAPI);
        return this.http.post(config_1.Config.urlAPI + "/login", JSON.stringify(user), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.log("balasan" + JSON.stringify(data));
        })
            .catch(this.handleErrors);
    };
    UserService.prototype.logout = function () {
        return this.http.post(config_1.Config.urlAPI + "/logout", JSON.stringify({}), { headers: this.getHeaders() })
            .map(function (response) { return response.json(); })
            .catch(this.handleErrors);
    };
    UserService.prototype.profile = function () {
        return this.http.get(config_1.Config.urlAPI + "/profile", { headers: this.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    UserService.prototype.edit_profile = function (profile) {
        return this.http.post(config_1.Config.urlAPI + "/profile", JSON.stringify(profile), { headers: this.getHeaders() })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUcvQixvQ0FBaUM7QUFJakM7SUFDSSxxQkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFBRSxDQUFDO0lBRWhDLGdDQUFVLEdBQVY7UUFDSSxJQUFJLFdBQVcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBQyxXQUFXLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFTO1FBQ1gsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFDLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ2pCLGVBQU0sQ0FBQyxNQUFNLEdBQUcsUUFBUSxFQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNwQixFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FDcEI7YUFDSSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEVBQUUsQ0FBQyxVQUFBLElBQUk7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDL0MsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsZUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2xCLEVBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUM5QjthQUNJLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLEVBQzFCLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUMvQjthQUNJLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDcEIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLE9BQVc7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixlQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsRUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFDdkIsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFDLENBQy9CO2FBQ0ksR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFFLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNwQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBNURRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FFZ0IsV0FBSTtPQURwQixXQUFXLENBNkR2QjtJQUFELGtCQUFDO0NBQUEsQUE3REQsSUE2REM7QUE3RFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCl7fVxyXG5cclxuICAgIGdldEhlYWRlcnMoKTpIZWFkZXJze1xyXG4gICAgICAgIGxldCBzYXZlZF90b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiU2VjcmV0XCIsIENvbmZpZy5rZXlBUEkpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIitzYXZlZF90b2tlbik7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKHVzZXI6VXNlcil7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIlNlY3JldFwiLENvbmZpZy5rZXlBUEkpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICAgICAgICBDb25maWcudXJsQVBJICsgXCIvbG9naW5cIixcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodXNlciksXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOmhlYWRlcnN9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLmRvKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJiYWxhc2FuXCIrSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycylcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIENvbmZpZy51cmxBUEkgKyBcIi9sb2dvdXRcIixcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe30pLFxyXG4gICAgICAgICAgICB7aGVhZGVyczp0aGlzLmdldEhlYWRlcnMoKX1cclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpXHJcbiAgICB9XHJcblxyXG4gICAgcHJvZmlsZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAgICAgICBDb25maWcudXJsQVBJICsgXCIvcHJvZmlsZVwiLFxyXG4gICAgICAgICAgICB7aGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKCl9XHJcbiAgICAgICAgKVxyXG4gICAgICAgICAgICAubWFwKHJlcz0+cmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKVxyXG4gICAgfVxyXG5cclxuICAgIGVkaXRfcHJvZmlsZShwcm9maWxlOmFueSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICAgICAgICBDb25maWcudXJsQVBJICsgXCIvcHJvZmlsZVwiLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShwcm9maWxlKSxcclxuICAgICAgICAgICAge2hlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycygpfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLm1hcChyZXM9PnJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycylcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgfVxyXG59Il19