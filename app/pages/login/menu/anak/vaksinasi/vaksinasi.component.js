"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var vaksin_service_1 = require("./vaksin.service");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var VaksinasiComponent = (function () {
    function VaksinasiComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    VaksinasiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (p) {
            _this.anak = p;
            _this.service.show(_this.anak.id).subscribe(function (res) {
                _this.vakins = new observable_array_1.ObservableArray(res.content);
            });
        });
    };
    VaksinasiComponent = __decorate([
        core_1.Component({
            selector: "ns-vaksinasi",
            moduleId: module.id,
            templateUrl: "./vaksinasi.component.html",
            styleUrls: ["./vaksinasi-common.css"],
            providers: [vaksin_service_1.VaksinService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            vaksin_service_1.VaksinService])
    ], VaksinasiComponent);
    return VaksinasiComponent;
}());
exports.VaksinasiComponent = VaksinasiComponent;
