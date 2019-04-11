"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var kembang_service_1 = require("./kembang.service");
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
                _this.kembangs = res.content;
                _this.kembangs.map(function (item) { return item.status = _this.stands[item.status]; });
            });
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
