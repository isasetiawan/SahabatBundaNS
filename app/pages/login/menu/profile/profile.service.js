"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var config_1 = require("../../../config");
var token_utils_1 = require("../../../../utils/token.utils");
var core_1 = require("@angular/core");
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getProfile = function () {
        return this.http.get(config_1.Config.urlAPI + "/profile", { headers: token_utils_1.TokenUtils.getHeaders() }).map(function (res) { return res.json(); })
            .catch(token_utils_1.TokenUtils.handleErrors);
    };
    ProfileService.prototype.updateProfile = function (profile) {
        return this.http.put(config_1.Config.urlAPI + "/profile", JSON.stringify(profile), { headers: token_utils_1.TokenUtils.getHeaders() }).map(function (res) { return res.json(); })
            .catch(token_utils_1.TokenUtils.handleErrors);
    };
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1DO0FBQ25DLDBDQUF1QztBQUN2Qyw2REFBeUQ7QUFDekQsc0NBQXlDO0FBSXpDO0lBQ0ksd0JBQW9CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO0lBQUUsQ0FBQztJQUVoQyxtQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNoQixlQUFNLENBQUMsTUFBTSxHQUFDLFVBQVUsRUFDeEIsRUFBQyxPQUFPLEVBQUMsd0JBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBQyxDQUNwQyxDQUFJLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBRSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDcEIsS0FBSyxDQUFDLHdCQUFVLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxPQUFlO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDaEIsZUFBTSxDQUFDLE1BQU0sR0FBQyxVQUFVLEVBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQ3ZCLEVBQUMsT0FBTyxFQUFDLHdCQUFVLENBQUMsVUFBVSxFQUFFLEVBQUMsQ0FDcEMsQ0FBSSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUUsT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3BCLEtBQUssQ0FBQyx3QkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7SUFsQlEsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUVnQixXQUFJO09BRHBCLGNBQWMsQ0FvQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi8uLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IHtUb2tlblV0aWxzfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvdG9rZW4udXRpbHNcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1Byb2ZpbGV9IGZyb20gXCIuL3Byb2ZpbGVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKXt9XHJcblxyXG4gICAgZ2V0UHJvZmlsZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAgICAgICBDb25maWcudXJsQVBJK1wiL3Byb2ZpbGVcIixcclxuICAgICAgICAgICAge2hlYWRlcnM6VG9rZW5VdGlscy5nZXRIZWFkZXJzKCl9XHJcbiAgICAgICAgKSAgIC5tYXAocmVzPT5yZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goVG9rZW5VdGlscy5oYW5kbGVFcnJvcnMpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUHJvZmlsZShwcm9maWxlOlByb2ZpbGUpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxyXG4gICAgICAgICAgICBDb25maWcudXJsQVBJK1wiL3Byb2ZpbGVcIixcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkocHJvZmlsZSksXHJcbiAgICAgICAgICAgIHtoZWFkZXJzOlRva2VuVXRpbHMuZ2V0SGVhZGVycygpfVxyXG4gICAgICAgICkgICAubWFwKHJlcz0+cmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKFRva2VuVXRpbHMuaGFuZGxlRXJyb3JzKVxyXG4gICAgfVxyXG5cclxufSJdfQ==