"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var anak_1 = require("../anak");
var anak_service_1 = require("../anak.service");
var Toast = require("nativescript-toast");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs = require("ui/dialogs");
var AnakComponent = (function () {
    function AnakComponent(navigate, router, service) {
        this.navigate = navigate;
        this.router = router;
        this.service = service;
        this.is_store = false;
    }
    AnakComponent_1 = AnakComponent;
    AnakComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (p) {
            console.log(JSON.stringify(p));
            if (!AnakComponent_1.isEmpty(p)) {
                _this._anak = new anak_1.Anak(p.id, p.orangtua_id, p.nama, p.gender, p.birthdate.split(" ")[0]);
            }
            else {
                _this._anak = new anak_1.Anak(0, 0, "", "L", "");
                _this.is_store = true;
            }
        });
    };
    AnakComponent.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    Object.defineProperty(AnakComponent.prototype, "anak", {
        get: function () {
            return this._anak;
        },
        enumerable: true,
        configurable: true
    });
    AnakComponent.prototype.submit = function () {
        var _this = this;
        if (!this.is_store) {
            this.service.update(this._anak).subscribe(function (res) {
                Toast.makeText(res.message).show();
                _this.navigate.backToPreviousPage();
            });
        }
        else {
            this.service.store(this._anak).subscribe(function (res) {
                Toast.makeText(res.message).show();
                _this.navigate.backToPreviousPage();
            });
        }
    };
    AnakComponent.prototype.delete = function () {
        var _this = this;
        dialogs.prompt({
            title: "",
            message: "Masukkan kata sandi untuk konfirmasi",
            okButtonText: "Hapus",
            cancelButtonText: "Batal",
            defaultText: "",
            inputType: dialogs.inputType.password
        }).then(function (r) {
            if (r.result === true) {
                _this.service.delete(r.text, _this._anak.id).subscribe(function (res) {
                    Toast.makeText(res.message).show();
                    _this.navigate.backToPreviousPage();
                });
            }
        });
    };
    AnakComponent.prototype.goToTumbuh = function () {
        var navexrta = {
            queryParams: this._anak
        };
        this.navigate.navigate(['/tumbuh'], navexrta);
    };
    AnakComponent.prototype.goToKembang = function () {
        var navexrta = {
            queryParams: this._anak
        };
        this.navigate.navigate(['/kembang'], navexrta);
    };
    AnakComponent.prototype.goToVaksin = function () {
        var navexrta = {
            queryParams: this._anak
        };
        this.navigate.navigate(['/vaksin'], navexrta);
    };
    AnakComponent.prototype.goToHealthy = function () {
        var navexrta = {
            queryParams: this._anak
        };
        this.navigate.navigate(['/kesehatan'], navexrta);
    };
    AnakComponent = AnakComponent_1 = __decorate([
        core_1.Component({
            selector: "ns-anak",
            moduleId: module.id,
            providers: [anak_service_1.AnakService],
            templateUrl: "./anak.component.html",
            styleUrls: ["anak-common.css"]
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions, router_1.ActivatedRoute, anak_service_1.AnakService])
    ], AnakComponent);
    return AnakComponent;
    var AnakComponent_1;
}());
exports.AnakComponent = AnakComponent;
