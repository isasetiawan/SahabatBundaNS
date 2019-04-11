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
        this.service.r_kehamilan(this.kehamilan.id).subscribe(function (res) {
            _this.riwayat = res.content;
            _this.service.r_kesehatan(_this.kehamilan.id).subscribe(function (res) {
                _this.kesehatan = res.content;
                _this.service.r_melahirkan(_this.kehamilan.id).subscribe(function (res) {
                    _this.melahirkan = res.content;
                    _this.service.r_keluhan(_this.kehamilan.id).subscribe(function (res) { return _this.keluhan = res.content; });
                });
            });
        });
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
