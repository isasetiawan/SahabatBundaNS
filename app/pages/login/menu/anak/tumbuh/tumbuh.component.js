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
        }, function (error) { return alert(error.json().message); });
        //load graph tbu
        this.service.graphTBU(this.anak).subscribe(function (res) { return _this.tbus = new observable_array_1.ObservableArray(res.content); }, function (err) { return Toast.makeText(err.json().message).show(); });
        //load graph bbu
        this.service.graphBBU(this.anak).subscribe(function (res) { return _this.bbus = new observable_array_1.ObservableArray(res.content); }, function (err) { return Toast.makeText(err.json().message).show(); });
        //load graph tbbu
        this.service.graphTBBB(this.anak).subscribe(function (res) { return console.log("tbbu oke ", JSON.stringify(res)); }, function (err) { return Toast.makeText(err.json().message).show(); });
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
                    }, function (err) {
                        Toast.makeText(err.json().message);
                    });
                }
                else {
                    _this.service.update(_this._anak, res.tumbuh).subscribe(function (res) {
                        Toast.makeText(res.message).show();
                        _this.loadtumbuh(null);
                    }, function (err) {
                        Toast.makeText(err.json().message).show();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVtYnVoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR1bWJ1aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0U7QUFFbEUsMENBQStDO0FBQy9DLDZEQUFzRDtBQUN0RCxtRUFBMkU7QUFDM0UsbURBQStDO0FBRS9DLHFEQUFpRDtBQUVqRCxrRUFBOEQ7QUFDOUQsMENBQTRDO0FBQzVDLHNEQUF5RDtBQUd6RCwyRUFBdUU7QUFVdkU7SUFFSSx5QkFDWSxPQUFxQixFQUNyQixNQUFxQixFQUNyQixTQUEwQixFQUMxQixLQUF3QixFQUN4QixLQUFzQjtRQUp0QixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFNbEMsU0FBSSxHQUF3QixJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsU0FBSSxHQUF3QixJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFcEQsYUFBUSxHQUFHLDBCQUFXLENBQUMsUUFBUSxDQUFDO0lBUjlCLENBQUM7SUFHSCxzQkFBSSxpQ0FBSTthQUFSLGNBQWdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFBLENBQUEsQ0FBQzs7O09BQUE7SUFPbEMsa0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEcsYUFBYTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDL0IsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFTLENBQUM7WUFDdkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUFm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cnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyB0YWJWaWV3TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RhYi12aWV3XCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHtNb2RhbERpYWxvZ1NlcnZpY2V9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHtUdW1idWhTZXJ2aWNlfSBmcm9tIFwiLi90dW1idWguc2VydmljZVwiO1xyXG5pbXBvcnQge0FuYWt9IGZyb20gXCIuLi8uLi9hbmFrXCI7XHJcbmltcG9ydCB7VHVtYnVoTW9kYWx9IGZyb20gXCIuL21vZGFsL3R1bWJ1aC5tb2RhbFwiO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSBcIm1vbWVudC9tb21lbnRcIlxyXG5pbXBvcnQge1N0YXRpY0Z1bmNzfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vdXRpbHMvc3RhdGljLmZ1bmNzXCI7XHJcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gXCJuYXRpdmVzY3JpcHQtdG9hc3RcIjtcclxuaW1wb3J0IHtpc1VuZGVmaW5lZH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdHlwZXNcIjtcclxuaW1wb3J0IHttZXNzYWdlVHlwZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdHJhY2VcIjtcclxuaW1wb3J0IGVycm9yID0gbWVzc2FnZVR5cGUuZXJyb3I7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZUFycmF5fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOlwibnMtdHVtYnVoXCIsXHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICBwcm92aWRlcnM6W1R1bWJ1aFNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6XCIuL3R1bWJ1aC5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOltcInR1bWJ1aC1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUdW1idWhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBzZXJ2aWNlOlR1bWJ1aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6QWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBuYXZpZ2F0b3I6Um91dGVyRXh0ZW5zaW9ucyxcclxuICAgICAgICBwcml2YXRlIG1vZGFsOk1vZGFsRGlhbG9nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHZjcmVmOlZpZXdDb250YWluZXJSZWZcclxuICAgICl7fVxyXG5cclxuICAgIF9hbmFrOkFuYWs7XHJcbiAgICBnZXQgYW5haygpOkFuYWt7cmV0dXJuIHRoaXMuX2FuYWt9XHJcbiAgICBwZXJ0dW1idWhhbjpBcnJheTxhbnk+O1xyXG4gICAgYmJ1czpPYnNlcnZhYmxlQXJyYXk8YW55PiA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW10pO1xyXG4gICAgdGJ1czpPYnNlcnZhYmxlQXJyYXk8YW55PiA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW10pO1xyXG5cclxuICAgIHNob3dEYXRlID0gU3RhdGljRnVuY3Muc2hvd0RhdGU7XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICAvL2xvYWQgdHVtYnVoXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHA9PntcclxuICAgICAgICAgICAgdGhpcy5fYW5hayA9IHAgYXMgQW5haztcclxuICAgICAgICAgICAgdGhpcy5sb2FkdHVtYnVoKG51bGwpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsb2FkdHVtYnVoKGFyZ3Mpe1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5zaG93KHRoaXMuX2FuYWsuaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzcG9uc2U9PntcclxuICAgICAgICAgICAgICAgIHRoaXMucGVydHVtYnVoYW49cmVzcG9uc2UuY29udGVudDtcclxuICAgICAgICAgICAgICAgIGlmIChhcmdzICE9PSBudWxsKSBhcmdzLm9iamVjdC5ub3RpZnlQdWxsVG9SZWZyZXNoRmluaXNoZWQoKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcj0+YWxlcnQoZXJyb3IuanNvbigpLm1lc3NhZ2UpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy9sb2FkIGdyYXBoIHRidVxyXG4gICAgICAgIHRoaXMuc2VydmljZS5ncmFwaFRCVSh0aGlzLmFuYWspLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IHRoaXMudGJ1cyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkocmVzLmNvbnRlbnQpLFxyXG4gICAgICAgICAgICBlcnIgPT4gVG9hc3QubWFrZVRleHQoZXJyLmpzb24oKS5tZXNzYWdlKS5zaG93KClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvL2xvYWQgZ3JhcGggYmJ1XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmdyYXBoQkJVKHRoaXMuYW5haykuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICByZXMgPT4gdGhpcy5iYnVzID0gbmV3IE9ic2VydmFibGVBcnJheShyZXMuY29udGVudCksXHJcbiAgICAgICAgICAgIGVyciA9PiBUb2FzdC5tYWtlVGV4dChlcnIuanNvbigpLm1lc3NhZ2UpLnNob3coKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vbG9hZCBncmFwaCB0YmJ1XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmdyYXBoVEJCQih0aGlzLmFuYWspLnN1YnNjcmliZShcclxuICAgICAgICAgICAgcmVzID0+IGNvbnNvbGUubG9nKFwidGJidSBva2UgXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpLFxyXG4gICAgICAgICAgICBlcnIgPT4gVG9hc3QubWFrZVRleHQoZXJyLmpzb24oKS5tZXNzYWdlKS5zaG93KClcclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93TW9kYWwodHVtYnVoKXtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29udGV4dDogdHVtYnVoLFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOmZhbHNlLFxyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjcmVmXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbChUdW1idWhNb2RhbCxvcHRpb25zKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChyZXMpKXtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuaXNfc3RvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc3RvcmUodGhpcy5fYW5hayxyZXMudHVtYnVoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkdHVtYnVoKG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChlcnIuanNvbigpLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS51cGRhdGUodGhpcy5fYW5hayxyZXMudHVtYnVoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkdHVtYnVoKG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChlcnIuanNvbigpLm1lc3NhZ2UpLnNob3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSJdfQ==