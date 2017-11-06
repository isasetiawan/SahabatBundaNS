"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hamil_service_1 = require("../hamil.service");
var Toast = require("nativescript-toast");
var HamilComponent = (function () {
    function HamilComponent(actvRt, service) {
        this.actvRt = actvRt;
        this.service = service;
        this.dropoutChoice = [
            { key: "1", label: "Ya" },
            { key: "0", label: "Tidak" },
        ];
        this.penolongChoides = [
            { key: 1, label: "Ya" },
            { key: 0, label: "Bukan" },
        ];
        this.keluhanChoices = [
            { key: 1, label: "Ya" },
            { key: 0, label: "Tidak" },
        ];
    }
    HamilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actvRt.queryParams.subscribe(function (p) {
            _this.kehamilan = p;
            _this.loadData();
        });
        Toast.makeText("Data-data ini hanya bisa diisi oleh bidan").show();
    };
    HamilComponent.prototype.loadData = function () {
        var _this = this;
        this.service.r_kehamilan(this.kehamilan.id).subscribe(function (res) { return _this.riwayat = res.content; }, function (err) { return Toast.makeText(err.json().message).show(); });
        this.service.r_kesehatan(this.kehamilan.id).subscribe(function (res) { return _this.kesehatan = res.content; }, function (err) { return Toast.makeText(err.json().message).show(); });
        this.service.r_melahirkan(this.kehamilan.id).subscribe(function (res) { return _this.melahirkan = res.content; }, function (err) { return Toast.makeText(err.json().message).show(); });
        this.service.r_keluhan(this.kehamilan.id).subscribe(function (res) { return _this.keluhan = res.content; }, function (err) { return Toast.makeText(err.json().message).show(); });
    };
    HamilComponent = __decorate([
        core_1.Component({
            selector: "ns-hamil",
            moduleId: module.id,
            templateUrl: "./hamil-component.html",
            styleUrls: ["./hamil-common.css"],
            providers: [hamil_service_1.HamilService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, hamil_service_1.HamilService])
    ], HamilComponent);
    return HamilComponent;
}());
exports.HamilComponent = HamilComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFtaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFtaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELDBDQUErQztBQUUvQyxrREFBOEM7QUFDOUMsMENBQTRDO0FBUzVDO0lBd0JJLHdCQUFvQixNQUFxQixFQUFVLE9BQW9CO1FBQW5ELFdBQU0sR0FBTixNQUFNLENBQWU7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBaEJ2RSxrQkFBYSxHQUFHO1lBQ1osRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUM7WUFDcEIsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUM7U0FFMUIsQ0FBQztRQUVGLG9CQUFlLEdBQUc7WUFDZCxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLElBQUksRUFBQztZQUNuQixFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFDLE9BQU8sRUFBQztTQUN6QixDQUFDO1FBRUYsbUJBQWMsR0FBRztZQUNiLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsSUFBSSxFQUFDO1lBQ25CLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUMsT0FBTyxFQUFDO1NBQ3pCLENBQUM7SUFJRixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUMvQixLQUFJLENBQUMsU0FBUyxHQUFHLENBQWMsQ0FBQztZQUNoQyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLDJDQUEyQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkUsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFvQkM7UUFuQkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ2pELFVBQUEsR0FBRyxJQUFHLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxFQUExQixDQUEwQixFQUNoQyxVQUFBLEdBQUcsSUFBRyxPQUFBLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUF6QyxDQUF5QyxDQUNsRCxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ2pELFVBQUEsR0FBRyxJQUFHLE9BQUEsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUE1QixDQUE0QixFQUNsQyxVQUFBLEdBQUcsSUFBRyxPQUFBLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUF6QyxDQUF5QyxDQUNsRCxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQ2xELFVBQUEsR0FBRyxJQUFHLE9BQUEsS0FBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxFQUE3QixDQUE2QixFQUNuQyxVQUFBLEdBQUcsSUFBRyxPQUFBLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUF6QyxDQUF5QyxDQUNsRCxDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQy9DLFVBQUEsR0FBRyxJQUFHLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxFQUExQixDQUEwQixFQUNoQyxVQUFBLEdBQUcsSUFBRyxPQUFBLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUF6QyxDQUF5QyxDQUNsRCxDQUFBO0lBQ0wsQ0FBQztJQXhEUSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsVUFBVTtZQUNuQixRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsV0FBVyxFQUFDLHdCQUF3QjtZQUNwQyxTQUFTLEVBQUMsQ0FBQyxvQkFBb0IsQ0FBQztZQUNoQyxTQUFTLEVBQUMsQ0FBQyw0QkFBWSxDQUFDO1NBQzNCLENBQUM7eUNBeUI2Qix1QkFBYyxFQUFrQiw0QkFBWTtPQXhCOUQsY0FBYyxDQXlEMUI7SUFBRCxxQkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0tlaGFtaWxhbn0gZnJvbSBcIi4uL0tlaGFtaWxhblwiO1xyXG5pbXBvcnQge0hhbWlsU2VydmljZX0gZnJvbSBcIi4uL2hhbWlsLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjpcIm5zLWhhbWlsXCIsXHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDpcIi4vaGFtaWwtY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczpbXCIuL2hhbWlsLWNvbW1vbi5jc3NcIl0sXHJcbiAgICBwcm92aWRlcnM6W0hhbWlsU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhhbWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICAgIGtlaGFtaWxhbjpLZWhhbWlsYW47XHJcbiAgICByaXdheWF0OmFueTtcclxuICAgIGtlc2VoYXRhbjphbnk7XHJcbiAgICBtZWxhaGlya2FuOmFueTtcclxuICAgIGtlbHVoYW46YW55O1xyXG5cclxuICAgIGRyb3BvdXRDaG9pY2UgPSBbXHJcbiAgICAgICAge2tleTpcIjFcIixsYWJlbDpcIllhXCJ9LFxyXG4gICAgICAgIHtrZXk6XCIwXCIsbGFiZWw6XCJUaWRha1wifSxcclxuXHJcbiAgICBdO1xyXG5cclxuICAgIHBlbm9sb25nQ2hvaWRlcyA9IFtcclxuICAgICAgICB7a2V5OjEsIGxhYmVsOlwiWWFcIn0sXHJcbiAgICAgICAge2tleTowLCBsYWJlbDpcIkJ1a2FuXCJ9LFxyXG4gICAgXTtcclxuXHJcbiAgICBrZWx1aGFuQ2hvaWNlcyA9IFtcclxuICAgICAgICB7a2V5OjEsIGxhYmVsOlwiWWFcIn0sXHJcbiAgICAgICAge2tleTowLCBsYWJlbDpcIlRpZGFrXCJ9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdHZSdDpBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzZXJ2aWNlOkhhbWlsU2VydmljZSl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5hY3R2UnQucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHA9PntcclxuICAgICAgICAgICAgdGhpcy5rZWhhbWlsYW4gPSBwIGFzIEtlaGFtaWxhbjtcclxuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFRvYXN0Lm1ha2VUZXh0KFwiRGF0YS1kYXRhIGluaSBoYW55YSBiaXNhIGRpaXNpIG9sZWggYmlkYW5cIikuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWREYXRhKCl7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnJfa2VoYW1pbGFuKHRoaXMua2VoYW1pbGFuLmlkKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcz0+IHRoaXMucml3YXlhdCA9IHJlcy5jb250ZW50LFxyXG4gICAgICAgICAgICBlcnI9PiBUb2FzdC5tYWtlVGV4dChlcnIuanNvbigpLm1lc3NhZ2UpLnNob3coKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VydmljZS5yX2tlc2VoYXRhbih0aGlzLmtlaGFtaWxhbi5pZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXM9PiB0aGlzLmtlc2VoYXRhbiA9IHJlcy5jb250ZW50LFxyXG4gICAgICAgICAgICBlcnI9PiBUb2FzdC5tYWtlVGV4dChlcnIuanNvbigpLm1lc3NhZ2UpLnNob3coKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VydmljZS5yX21lbGFoaXJrYW4odGhpcy5rZWhhbWlsYW4uaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzPT4gdGhpcy5tZWxhaGlya2FuID0gcmVzLmNvbnRlbnQsXHJcbiAgICAgICAgICAgIGVycj0+IFRvYXN0Lm1ha2VUZXh0KGVyci5qc29uKCkubWVzc2FnZSkuc2hvdygpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnJfa2VsdWhhbih0aGlzLmtlaGFtaWxhbi5pZCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXM9PiB0aGlzLmtlbHVoYW4gPSByZXMuY29udGVudCxcclxuICAgICAgICAgICAgZXJyPT4gVG9hc3QubWFrZVRleHQoZXJyLmpzb24oKS5tZXNzYWdlKS5zaG93KClcclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0=