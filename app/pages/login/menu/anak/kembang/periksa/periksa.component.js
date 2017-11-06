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
        }, function (err) {
            Toast.makeText(err.json().message).show();
            _this.routerExt.backToPreviousPage();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyaWtzYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJpa3NhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRTtBQUNuRSxzREFBa0Q7QUFDbEQsMENBQStDO0FBQy9DLDBDQUE0QztBQUM1QywyRUFBdUU7QUFDdkUsNkRBQXNEO0FBRXRELG9DQUFzQztBQUN0QyxnQ0FBOEI7QUFTOUI7SUFFSSwwQkFDWSxNQUFxQixFQUNyQixPQUFzQixFQUN0QixTQUEwQixFQUMxQixjQUFpQztRQUhqQyxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBSTdDLFNBQUksR0FBTyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsQ0FBQztJQUhsQixDQUFDO0lBT0gsbUNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUEsQ0FBQztZQUMvQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUNaLE9BQU8sRUFBRSwwTUFBME07Z0JBQ25OLFlBQVksRUFBRSxtQ0FBbUM7Z0JBQ2pELGdCQUFnQixFQUFFLDhCQUE4QjthQUNuRCxDQUFDLENBQUMsSUFB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QStGNUI7SUFBRCx1QkFBQztDQUFBLEFBL0ZELElBK0ZDO0FBL0ZZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0tlbWJhbmdTZXJ2aWNlfSBmcm9tIFwiLi4va2VtYmFuZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xyXG5pbXBvcnQge09ic2VydmFibGVBcnJheX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7TGlzdFZpZXdFdmVudERhdGF9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS1wcm8vbGlzdHZpZXdcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjpcIm5zLXBlcmlrc2Eta2VtYmFuZ1wiLFxyXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6XCIuL3Blcmlrc2EuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczpbXCIuL3Blcmlrc2EtY29tbW9uLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczpbS2VtYmFuZ1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXJpa3NhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOkFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgc2VydmljZTpLZW1iYW5nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dDpSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgICApe31cclxuXHJcbiAgICBwYXJhbXM6YW55O1xyXG4gICAgZGF0YTphbnkgPSB7dW11cjowfTtcclxuICAgIGltZ3VybDpzdHJpbmc7XHJcbiAgICBxdWVzdGlvbnM6T2JzZXJ2YWJsZUFycmF5PGFueT47XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnJvdXRlci5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocD0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwKSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyYW1zID0gcDtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUXVlc3Rpb25zKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93R3VpZGUoKXtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkZV9rZW1iYW5nXCIpICE9PSBcIjFcIil7XHJcbiAgICAgICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBhZGEgaGFsYW1hbiBpbmkgdGVyZGFwYXQgcGVydGFueWFhbi1wZXJ0YW55YWFuIGRhbGFtIGJlbnR1ayBrYXJ0dS1rYXJ0dSwgdGVrYW4ga2FydHUgamlrYSBqYXdhYmFuIGRhcmkgcGVydGFueWFhbiB0ZXJzZWJ1dCBhZGFsYWggJ1lhJywgdGVrYW4gdG9tYm9sIGJ1bGF0IHNlYmVsYWgga2FuYW4gYmF3YWggbGF5YXIgdW50dWsgbWVueWltcGFubnlhXCIsXHJcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiSmFuZ2FuIHBlcmxpaGF0a2FuIHBlc2FuIGluaSBsYWdpXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIlNlbGFsdSBwZXJsaWhhdGthbiBwZXNhbiBpbmlcIlxyXG4gICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlX2tlbWJhbmdcIiwgcmVzdWx0ID8gXCIxXCIgOiBcIjBcIilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2FkUXVlc3Rpb25zKCl7XHJcbiAgICAgICAgbGV0IGRhdGFfcHJvdmlkZXI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5tb2RlID09IFwic3RvcmVcIil7XHJcbiAgICAgICAgICAgIGRhdGFfcHJvdmlkZXIgPSB0aGlzLnNlcnZpY2Uuc2hvdyh0aGlzLnBhcmFtcy5hbmFrLCB0aGlzLnBhcmFtcy5pdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhX3Byb3ZpZGVyID0gdGhpcy5zZXJ2aWNlLmVkaXQodGhpcy5wYXJhbXMuYW5haywgdGhpcy5wYXJhbXMuaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRhX3Byb3ZpZGVyLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzPT57XHJcbiAgICAgICAgICAgICAgICByZXMuY29udGVudC5kYXRhLnBlcnRhbnlhYW4ubWFwKGRhdGE9PmRhdGEuYW5zd2VyID0gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzLmNvbnRlbnQuZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLmRhdGEucGVydGFueWFhbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmltZ3VybCA9IHJlcy5jb250ZW50LmltZ191cmw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0d1aWRlKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycj0+IHtcclxuICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KGVyci5qc29uKCkubWVzc2FnZSkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQuYmFja1RvUHJldmlvdXNQYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgb25ZZXMoYXJnczogTGlzdFZpZXdFdmVudERhdGEpe1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5xdWVzdGlvbnMuZ2V0SXRlbShhcmdzLmluZGV4KTtcclxuICAgICAgICBpdGVtLmFuc3dlciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25ObyhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSl7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnF1ZXN0aW9ucy5nZXRJdGVtKGFyZ3MuaW5kZXgpO1xyXG4gICAgICAgIGl0ZW0uYW5zd2VyID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0ZGF0YSgpe1xyXG4gICAgICAgIGxldCBhbnMgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dGhpcy5xdWVzdGlvbnMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGFuc1snamF3YWJhbl8nKyhpKzEpXSA9IHRoaXMucXVlc3Rpb25zLmdldEl0ZW0oaSkuYW5zd2VyID8gXCIxXCIgOiBcIjBcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGFfcHJvdjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLm1vZGUgPT0gXCJzdG9yZVwiKXtcclxuICAgICAgICAgICAgZGF0YV9wcm92ID0gdGhpcy5zZXJ2aWNlLnN0b3JlKGFucyx0aGlzLnBhcmFtcy5pdGVtLHRoaXMucGFyYW1zLmFuYWspXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YV9wcm92ID0gdGhpcy5zZXJ2aWNlLnVwZGF0ZShhbnMsdGhpcy5wYXJhbXMuaXRlbSx0aGlzLnBhcmFtcy5hbmFrKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGF0YV9wcm92LnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzPT57XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHQuYmFja1RvUHJldmlvdXNQYWdlKClcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyPT57XHJcbiAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChlcnIuanNvbigpLm1lc3NhZ2UpLnNob3coKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyLmpzb24oKSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il19