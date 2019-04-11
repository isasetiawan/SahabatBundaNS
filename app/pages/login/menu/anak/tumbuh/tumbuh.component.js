"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var tumbuh_service_1 = require("./tumbuh.service");
var tumbuh_modal_1 = require("./modal/tumbuh.modal");
var static_funcs_1 = require("../../../../../utils/static.funcs");
var Toast = require("nativescript-toast");
var types_1 = require("tns-core-modules/utils/types");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var TumbuhComponent = (function () {
    function TumbuhComponent(service, router, navigator, modal, vcref) {
        this.service = service;
        this.router = router;
        this.navigator = navigator;
        this.modal = modal;
        this.vcref = vcref;
        this.bbus = new observable_array_1.ObservableArray([]);
        this.tbus = new observable_array_1.ObservableArray([]);
        this.tbbs = new observable_array_1.ObservableArray([]);
        this.showDate = static_funcs_1.StaticFuncs.showDate;
    }
    Object.defineProperty(TumbuhComponent.prototype, "anak", {
        get: function () { return this._anak; },
        enumerable: true,
        configurable: true
    });
    TumbuhComponent.prototype.ngOnInit = function () {
        var _this = this;
        //load tumbuh
        this.router.queryParams.subscribe(function (p) {
            _this._anak = p;
            _this.loadtumbuh(null);
        });
    };
    TumbuhComponent.prototype.loadtumbuh = function (args) {
        var _this = this;
        this.service.show(this._anak.id).subscribe(function (response) {
            _this.pertumbuhan = response.content;
            if (args !== null)
                args.object.notifyPullToRefreshFinished();
        });
        //load graph tbu
        this.service.graphTBU(this.anak).subscribe(function (res) { return _this.tbus = new observable_array_1.ObservableArray(res.content); });
        //load graph bbu
        this.service.graphBBU(this.anak).subscribe(function (res) { return _this.bbus = new observable_array_1.ObservableArray(res.content); });
        //load graph tbbu
        this.service.graphTBBB(this.anak).subscribe(function (res) { return _this.tbbs = new observable_array_1.ObservableArray(res.content); });
    };
    TumbuhComponent.prototype.showModal = function (tumbuh) {
        var _this = this;
        var options = {
            context: tumbuh,
            fullscreen: false,
            viewContainerRef: this.vcref
        };
        this.modal.showModal(tumbuh_modal_1.TumbuhModal, options).then(function (res) {
            console.log(JSON.stringify(res));
            if (!types_1.isUndefined(res)) {
                if (res.is_store) {
                    _this.service.store(_this._anak, res.tumbuh).subscribe(function (res) {
                        Toast.makeText(res.message).show();
                        _this.loadtumbuh(null);
                    });
                }
                else {
                    _this.service.update(_this._anak, res.tumbuh).subscribe(function (res) {
                        Toast.makeText(res.message).show();
                        _this.loadtumbuh(null);
                    });
                }
            }
        });
    };
    TumbuhComponent = __decorate([
        core_1.Component({
            selector: "ns-tumbuh",
            moduleId: module.id,
            providers: [tumbuh_service_1.TumbuhService],
            templateUrl: "./tumbuh.component.html",
            styleUrls: ["tumbuh-common.css"]
        }),
        __metadata("design:paramtypes", [tumbuh_service_1.TumbuhService,
            router_1.ActivatedRoute,
            nativescript_angular_1.RouterExtensions,
            dialogs_1.ModalDialogService,
            core_1.ViewContainerRef])
    ], TumbuhComponent);
    return TumbuhComponent;
}());
exports.TumbuhComponent = TumbuhComponent;
