"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kembang_service_1 = require("../kembang.service");
var router_1 = require("@angular/router");
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
        });
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
