"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var vaksin_service_1 = require("./vaksin.service");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var Toast = require("nativescript-toast");
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
            }, function (err) { Toast.makeText(err.json().message).show(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFrc2luYXNpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZha3NpbmFzaS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsMENBQStDO0FBRy9DLG1EQUErQztBQUMvQywyRUFBdUU7QUFFdkUsMENBQTRDO0FBUzVDO0lBS0ksNEJBQ1ksTUFBcUIsRUFDckIsT0FBcUI7UUFEckIsV0FBTSxHQUFOLE1BQU0sQ0FBZTtRQUNyQixZQUFPLEdBQVAsT0FBTyxDQUFjO0lBRy9CLENBQUM7SUFFSCxxQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBUyxDQUFBO1lBQ3JCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNyQyxVQUFBLEdBQUc7Z0JBQ0MsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGtDQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ2xELENBQUMsRUFDRCxVQUFBLEdBQUcsSUFBSyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxDQUFBLENBQUMsQ0FDckQsQ0FBQTtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXRCUSxrQkFBa0I7UUFQOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxjQUFjO1lBQ3ZCLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixXQUFXLEVBQUMsNEJBQTRCO1lBQ3hDLFNBQVMsRUFBQyxDQUFDLHdCQUF3QixDQUFDO1lBQ3BDLFNBQVMsRUFBQyxDQUFDLDhCQUFhLENBQUM7U0FDNUIsQ0FBQzt5Q0FPcUIsdUJBQWM7WUFDYiw4QkFBYTtPQVB4QixrQkFBa0IsQ0F3QjlCO0lBQUQseUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCB7UGxhdGZvcm1Mb2NhdGlvbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQge1Zha3NpblNlcnZpY2V9IGZyb20gXCIuL3Zha3Npbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZUFycmF5fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0IHtBbmFrfSBmcm9tIFwiLi4vLi4vYW5ha1wiO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tIFwibmF0aXZlc2NyaXB0LXRvYXN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOlwibnMtdmFrc2luYXNpXCIsXHJcbiAgICBtb2R1bGVJZDptb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDpcIi4vdmFrc2luYXNpLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6W1wiLi92YWtzaW5hc2ktY29tbW9uLmNzc1wiXSxcclxuICAgIHByb3ZpZGVyczpbVmFrc2luU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFZha3NpbmFzaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgdmFraW5zOk9ic2VydmFibGVBcnJheTxhbnk+O1xyXG4gICAgYW5hazpBbmFrO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOkFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgc2VydmljZTpWYWtzaW5TZXJ2aWNlLFxyXG4gICAgICAgIC8vIHByaXZhdGUgbmF2aWdhdG9yOlJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgLy8gcHJpdmF0ZSBsb2NhdGlvbjpQbGF0Zm9ybUxvY2F0aW9uXHJcbiAgICApe31cclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMucm91dGVyLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwPT57XHJcbiAgICAgICAgICAgIHRoaXMuYW5hayA9IHAgYXMgQW5ha1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2Uuc2hvdyh0aGlzLmFuYWsuaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHJlcz0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFraW5zID0gbmV3IE9ic2VydmFibGVBcnJheShyZXMuY29udGVudClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnIgPT4ge1RvYXN0Lm1ha2VUZXh0KGVyci5qc29uKCkubWVzc2FnZSkuc2hvdygpfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0iXX0=