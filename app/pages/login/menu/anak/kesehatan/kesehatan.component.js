"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var kesehatan_service_1 = require("./kesehatan.service");
var nativescript_angular_1 = require("nativescript-angular");
var detil_kesehatan_component_1 = require("./detil-kesehatan/detil-kesehatan.component");
var KesehatanComponent = (function () {
    function KesehatanComponent(router, serv, vcrf, modal) {
        var _this = this;
        this.router = router;
        this.serv = serv;
        this.vcrf = vcrf;
        this.modal = modal;
        this.statuses = [
            "Meninggal",
            "Sehat",
            "Sakit"
        ];
        this.router.queryParams.subscribe(function (p) {
            _this.anak = p;
            _this.loadkesehtan(null);
        });
    }
    KesehatanComponent.prototype.ngOnInit = function () { };
    KesehatanComponent.prototype.loadkesehtan = function (args) {
        var _this = this;
        this.serv.index(this.anak).subscribe(function (res) {
            _this.kesehatans = res.content;
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
    };
    KesehatanComponent.prototype.view = function (item) {
        var _this = this;
        item.anak = this.anak;
        var options = {
            context: item,
            fullscreen: false,
            viewContainerRef: this.vcrf
        };
        console.log(JSON.stringify(options.context));
        this.modal.showModal(detil_kesehatan_component_1.DetilKesehatanComponent, options).then(function (res) { return _this.loadkesehtan(null); });
    };
    KesehatanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-kesehatan',
            templateUrl: './kesehatan.component.html',
            styleUrls: ['./kesehatan.component.css'],
            providers: [kesehatan_service_1.KesehatanService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            kesehatan_service_1.KesehatanService,
            core_1.ViewContainerRef,
            nativescript_angular_1.ModalDialogService])
    ], KesehatanComponent);
    return KesehatanComponent;
}());
exports.KesehatanComponent = KesehatanComponent;
