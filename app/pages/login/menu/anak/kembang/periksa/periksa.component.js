"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kembang_service_1 = require("../kembang.service");
var router_1 = require("@angular/router");
var Toast = require("nativescript-toast");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs = require("ui/dialogs");
require("rxjs/add/operator/do");
var PeriksaComponent = (function () {
    function PeriksaComponent(router, service, routerExt, changeDetector) {
        this.router = router;
        this.service = service;
        this.routerExt = routerExt;
        this.changeDetector = changeDetector;
        this.data = { umur: 0 };
    }
    PeriksaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (p) {
            console.log(JSON.stringify(p));
            _this.params = p;
            _this.loadQuestions();
        });
    };
    PeriksaComponent.prototype.showGuide = function () {
        if (localStorage.getItem("guide_kembang") !== "1") {
            dialogs.confirm({
                message: "Pada halaman ini terdapat pertanyaan-pertanyaan dalam bentuk kartu-kartu, tekan kartu jika jawaban dari pertanyaan tersebut adalah 'Ya', tekan tombol bulat sebelah kanan bawah layar untuk menyimpannya",
                okButtonText: "Jangan perlihatkan pesan ini lagi",
                cancelButtonText: "Selalu perlihatkan pesan ini"
            }).then(function (result) {
                localStorage.setItem("guide_kembang", result ? "1" : "0");
            });
        }
    };
    PeriksaComponent.prototype.loadQuestions = function () {
        var _this = this;
        var data_provider;
        if (this.params.mode == "store") {
            data_provider = this.service.show(this.params.anak, this.params.item);
        }
        else {
            data_provider = this.service.edit(this.params.anak, this.params.item);
        }
        data_provider.subscribe(function (res) {
            res.content.data.pertanyaan.map(function (data) { return data.answer = false; });
            _this.data = res.content.data;
            _this.questions = new observable_array_1.ObservableArray(_this.data.pertanyaan);
            _this.imgurl = res.content.img_url;
            _this.changeDetector.detectChanges();
            _this.showGuide();
        });
    };
    PeriksaComponent.prototype.onYes = function (args) {
        var item = this.questions.getItem(args.index);
        item.answer = true;
    };
    PeriksaComponent.prototype.onNo = function (args) {
        var item = this.questions.getItem(args.index);
        item.answer = false;
    };
    PeriksaComponent.prototype.submitdata = function () {
        var _this = this;
        var ans = {};
        for (var i = 0; i < this.questions.length; i++) {
            ans['jawaban_' + (i + 1)] = this.questions.getItem(i).answer ? "1" : "0";
        }
        var data_prov;
        if (this.params.mode == "store") {
            data_prov = this.service.store(ans, this.params.item, this.params.anak);
        }
        else {
            data_prov = this.service.update(ans, this.params.item, this.params.anak);
        }
        data_prov.subscribe(function (res) {
            Toast.makeText(res.message).show();
            _this.routerExt.backToPreviousPage();
        }, function (err) {
            Toast.makeText(err.json().message).show();
            console.log(JSON.stringify(err.json()));
        });
    };
    PeriksaComponent = __decorate([
        core_1.Component({
            selector: "ns-periksa-kembang",
            moduleId: module.id,
            templateUrl: "./periksa.component.html",
            styleUrls: ["./periksa-common.css"],
            providers: [kembang_service_1.KembangService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            kembang_service_1.KembangService,
            nativescript_angular_1.RouterExtensions,
            core_1.ChangeDetectorRef])
    ], PeriksaComponent);
    return PeriksaComponent;
}());
exports.PeriksaComponent = PeriksaComponent;
