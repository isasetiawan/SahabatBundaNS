"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var kembang_service_1 = require("./kembang.service");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var Toast = require("nativescript-toast");
var nativescript_angular_1 = require("nativescript-angular");
var common_1 = require("@angular/common");
var KembangComponent = (function () {
    function KembangComponent(router, service, navigator, location) {
        var _this = this;
        this.router = router;
        this.service = service;
        this.navigator = navigator;
        this.location = location;
        this.stands = {
            "S": "Perkembangan Sesuai",
            "P": "Perkembangan Menyimpang",
            "M": "Perkembangan Meragukan",
            "-": null
        };
        this.location.onPopState(function (e) { _this.loadData(); });
    }
    KembangComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    KembangComponent.prototype.loadData = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (p) {
            _this.anak = p;
            _this.service.index(_this.anak).subscribe(function (res) {
                console.log(JSON.stringify(res));
                _this.kembangs = new observable_array_1.ObservableArray(res.content);
                _this.kembangs.map(function (item) { return item.status = _this.stands[item.status]; });
            }, function (err) { Toast.makeText(err.json().message).show(); });
        });
    };
    KembangComponent.prototype.onItemtap = function (item) {
        var navexrta;
        if (item.status) {
            navexrta = {
                queryParams: { item: item.id, anak: this.anak.id, mode: "edit" }
            };
        }
        else {
            navexrta = {
                queryParams: { item: item.id, anak: this.anak.id, mode: "store" }
            };
        }
        this.navigator.navigate(['/periksa_kembang'], navexrta);
    };
    KembangComponent.prototype.onHasilTap = function (item) {
        var navexrta = {
            queryParams: { item: item.id, anak: this.anak.id, mode: "hasil" }
        };
        this.navigator.navigate(['/hasil_kembang'], navexrta);
    };
    KembangComponent = __decorate([
        core_1.Component({
            selector: "ns-kembang",
            moduleId: module.id,
            templateUrl: "./kembang.component.html",
            styleUrls: ["./kembang-common.css"],
            providers: [kembang_service_1.KembangService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            kembang_service_1.KembangService,
            nativescript_angular_1.RouterExtensions,
            common_1.PlatformLocation])
    ], KembangComponent);
    return KembangComponent;
}());
exports.KembangComponent = KembangComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VtYmFuZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrZW1iYW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCwwQ0FBaUU7QUFFakUscURBQWlEO0FBQ2pELDJFQUF1RTtBQUN2RSwwQ0FBNEM7QUFDNUMsNkRBQXNEO0FBQ3RELDBDQUFpRDtBQVNqRDtJQVlJLDBCQUNZLE1BQXFCLEVBQ3JCLE9BQXNCLEVBQ3RCLFNBQTBCLEVBQzFCLFFBQXlCO1FBSnJDLGlCQU9DO1FBTlcsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBWHJDLFdBQU0sR0FBRztZQUNMLEdBQUcsRUFBQyxxQkFBcUI7WUFDekIsR0FBRyxFQUFDLHlCQUF5QjtZQUM3QixHQUFHLEVBQUMsd0JBQXdCO1lBQzVCLEdBQUcsRUFBQyxJQUFJO1NBQ1gsQ0FBQztRQVFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQUMsQ0FBQyxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFBO0lBQ3BELENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBUyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ25DLFVBQUEsR0FBRztnQkFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGtDQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUNoRCxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQTtZQUNuRSxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUEsQ0FBQSxDQUFDLENBQ25ELENBQUE7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxvQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNWLElBQUksUUFBMEIsQ0FBQztRQUMvQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUNiLFFBQVEsR0FBRztnQkFDUCxXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQzthQUNqRSxDQUFDO1FBQ04sQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osUUFBUSxHQUFHO2dCQUNQLFdBQVcsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDO2FBQ2xFLENBQUM7UUFDTixDQUFDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLElBQUksUUFBUSxHQUFxQjtZQUM3QixXQUFXLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQztTQUNsRSxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBRXpELENBQUM7SUEzRFEsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsWUFBWTtZQUNyQixRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsV0FBVyxFQUFDLDBCQUEwQjtZQUN0QyxTQUFTLEVBQUMsQ0FBQyxzQkFBc0IsQ0FBQztZQUNsQyxTQUFTLEVBQUMsQ0FBQyxnQ0FBYyxDQUFDO1NBQzdCLENBQUM7eUNBY3FCLHVCQUFjO1lBQ2IsZ0NBQWM7WUFDWix1Q0FBZ0I7WUFDakIseUJBQWdCO09BaEI1QixnQkFBZ0IsQ0E2RDVCO0lBQUQsdUJBQUM7Q0FBQSxBQTdERCxJQTZEQztBQTdEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7QW5ha30gZnJvbSBcIi4uLy4uL2FuYWtcIjtcclxuaW1wb3J0IHtLZW1iYW5nU2VydmljZX0gZnJvbSBcIi4va2VtYmFuZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZUFycmF5fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQge1BsYXRmb3JtTG9jYXRpb259IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6XCJucy1rZW1iYW5nXCIsXHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDpcIi4va2VtYmFuZy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOltcIi4va2VtYmFuZy1jb21tb24uY3NzXCJdLFxyXG4gICAgcHJvdmlkZXJzOltLZW1iYW5nU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEtlbWJhbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgYW5hazpBbmFrO1xyXG4gICAga2VtYmFuZ3M6T2JzZXJ2YWJsZUFycmF5PGFueT47XHJcblxyXG4gICAgc3RhbmRzID0ge1xyXG4gICAgICAgIFwiU1wiOlwiUGVya2VtYmFuZ2FuIFNlc3VhaVwiLFxyXG4gICAgICAgIFwiUFwiOlwiUGVya2VtYmFuZ2FuIE1lbnlpbXBhbmdcIixcclxuICAgICAgICBcIk1cIjpcIlBlcmtlbWJhbmdhbiBNZXJhZ3VrYW5cIixcclxuICAgICAgICBcIi1cIjpudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOkFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgc2VydmljZTpLZW1iYW5nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIG5hdmlnYXRvcjpSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246UGxhdGZvcm1Mb2NhdGlvblxyXG4gICAgKXtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLm9uUG9wU3RhdGUoKGUpPT57dGhpcy5sb2FkRGF0YSgpfSlcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWREYXRhKCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHA9PntcclxuICAgICAgICAgICAgdGhpcy5hbmFrID0gcCBhcyBBbmFrO1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UuaW5kZXgodGhpcy5hbmFrKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXM9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtlbWJhbmdzID0gbmV3IE9ic2VydmFibGVBcnJheShyZXMuY29udGVudClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtlbWJhbmdzLm1hcChpdGVtPT5pdGVtLnN0YXR1cyA9IHRoaXMuc3RhbmRzW2l0ZW0uc3RhdHVzXSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnI9PntUb2FzdC5tYWtlVGV4dChlcnIuanNvbigpLm1lc3NhZ2UpLnNob3coKX1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25JdGVtdGFwKGl0ZW0pe1xyXG4gICAgICAgIGxldCBuYXZleHJ0YTogTmF2aWdhdGlvbkV4dHJhcztcclxuICAgICAgICBpZiAoaXRlbS5zdGF0dXMpe1xyXG4gICAgICAgICAgICBuYXZleHJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7aXRlbTogaXRlbS5pZCwgYW5hazogdGhpcy5hbmFrLmlkLCBtb2RlOiBcImVkaXRcIn1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXZleHJ0YSA9IHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7aXRlbTogaXRlbS5pZCwgYW5hazogdGhpcy5hbmFrLmlkLCBtb2RlOiBcInN0b3JlXCJ9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmF2aWdhdG9yLm5hdmlnYXRlKFsnL3Blcmlrc2Ffa2VtYmFuZyddLG5hdmV4cnRhKVxyXG4gICAgfVxyXG5cclxuICAgIG9uSGFzaWxUYXAoaXRlbSl7XHJcbiAgICAgICAgbGV0IG5hdmV4cnRhOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczoge2l0ZW06IGl0ZW0uaWQsIGFuYWs6IHRoaXMuYW5hay5pZCwgbW9kZTogXCJoYXNpbFwifVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0b3IubmF2aWdhdGUoWycvaGFzaWxfa2VtYmFuZyddLCBuYXZleHJ0YSlcclxuXHJcbiAgICB9XHJcblxyXG59Il19