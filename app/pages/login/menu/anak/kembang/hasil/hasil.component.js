"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kembang_service_1 = require("../kembang.service");
var router_1 = require("@angular/router");
var Toast = require("nativescript-toast");
var HasilComponent = (function () {
    function HasilComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    HasilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (p) {
            _this.params = p;
            _this.loadResult();
        });
    };
    HasilComponent.prototype.loadResult = function () {
        var _this = this;
        this.service.result(this.params.item, this.params.anak).subscribe(function (res) {
            var result = res.content;
            result.pertanyaan.map(function (item, i) { return item.jawaban = item.jawaban = result.jawaban[i + ''] === 0 ? "Tidak" : "Ya"; });
            _this.questions = result.pertanyaan;
            _this.answer = result.jawaban;
            _this.stim_kasar = result.stimulasi.kasar;
            _this.stim_halus = result.stimulasi.halus;
            _this.stim_bicara = result.stimulasi.bicara;
            _this.stim_sosial = result.stimulasi.sosial;
            console.log(JSON.stringify(result));
        }, function (err) { return Toast.makeText(JSON.stringify(err.json().message)).show(); });
    };
    HasilComponent = __decorate([
        core_1.Component({
            selector: "ns-hasil",
            moduleId: module.id,
            providers: [kembang_service_1.KembangService],
            templateUrl: "./hasil.component.html",
            styleUrls: ["./hasil-common.css"]
        }),
        __metadata("design:paramtypes", [kembang_service_1.KembangService,
            router_1.ActivatedRoute])
    ], HasilComponent);
    return HasilComponent;
}());
exports.HasilComponent = HasilComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGFzaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELHNEQUFrRDtBQUNsRCwwQ0FBK0M7QUFDL0MsMENBQTRDO0FBUzVDO0lBQ0ksd0JBQ1ksT0FBc0IsRUFDdEIsTUFBcUI7UUFEckIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFlO0lBQy9CLENBQUM7SUFZSCxpQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQzdCLFVBQUEsQ0FBQztZQUNHLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNyQixDQUFDLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQUEsaUJBa0JDO1FBakJHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUM1RCxVQUFBLEdBQUc7WUFDQyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBRXpCLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFDLENBQUMsSUFBRyxPQUFBLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxHQUFHLElBQUksRUFBekUsQ0FBeUUsQ0FBQyxDQUFDO1lBQzNHLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNuQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFFN0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUN6QyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDM0MsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUFDLEVBQ0QsVUFBQSxHQUFHLElBQUUsT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQXpELENBQXlELENBQ2pFLENBQUM7SUFDTixDQUFDO0lBM0NRLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxVQUFVO1lBQ25CLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixTQUFTLEVBQUMsQ0FBQyxnQ0FBYyxDQUFDO1lBQzFCLFdBQVcsRUFBQyx3QkFBd0I7WUFDcEMsU0FBUyxFQUFDLENBQUMsb0JBQW9CLENBQUM7U0FDbkMsQ0FBQzt5Q0FHc0IsZ0NBQWM7WUFDZix1QkFBYztPQUh4QixjQUFjLENBNEMxQjtJQUFELHFCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0tlbWJhbmdTZXJ2aWNlfSBmcm9tIFwiLi4va2VtYmFuZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjpcIm5zLWhhc2lsXCIsXHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICBwcm92aWRlcnM6W0tlbWJhbmdTZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOlwiLi9oYXNpbC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOltcIi4vaGFzaWwtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGFzaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHNlcnZpY2U6S2VtYmFuZ1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6QWN0aXZhdGVkUm91dGUsXHJcbiAgICApe31cclxuXHJcbiAgICBwYXJhbXM6YW55O1xyXG5cclxuICAgIHF1ZXN0aW9uczpBcnJheTxhbnk+O1xyXG4gICAgYW5zd2VyOmFueTtcclxuXHJcbiAgICBzdGltX2thc2FyOkFycmF5PGFueT47XHJcbiAgICBzdGltX2hhbHVzOkFycmF5PGFueT47XHJcbiAgICBzdGltX2JpY2FyYTpBcnJheTxhbnk+O1xyXG4gICAgc3RpbV9zb3NpYWw6QXJyYXk8YW55PjtcclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcD0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyYW1zID0gcDtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFJlc3VsdCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFJlc3VsdCgpe1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5yZXN1bHQodGhpcy5wYXJhbXMuaXRlbSx0aGlzLnBhcmFtcy5hbmFrKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlcy5jb250ZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wZXJ0YW55YWFuLm1hcCgoaXRlbSxpKT0+aXRlbS5qYXdhYmFuID0gaXRlbS5qYXdhYmFuID0gcmVzdWx0Lmphd2FiYW5baSsnJ10gPT09IDAgPyBcIlRpZGFrXCIgOiBcIllhXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSByZXN1bHQucGVydGFueWFhbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5zd2VyID0gcmVzdWx0Lmphd2FiYW47XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGltX2thc2FyID0gcmVzdWx0LnN0aW11bGFzaS5rYXNhcjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RpbV9oYWx1cyA9IHJlc3VsdC5zdGltdWxhc2kuaGFsdXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0aW1fYmljYXJhID0gcmVzdWx0LnN0aW11bGFzaS5iaWNhcmE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0aW1fc29zaWFsID0gcmVzdWx0LnN0aW11bGFzaS5zb3NpYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycj0+VG9hc3QubWFrZVRleHQoSlNPTi5zdHJpbmdpZnkoZXJyLmpzb24oKS5tZXNzYWdlKSkuc2hvdygpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdfQ==