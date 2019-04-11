"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var newuser_1 = require("./newuser");
var register_service_1 = require("./register.service");
var router_1 = require("@angular/router");
var dialogs = require("ui/dialogs");
var RegisterComponent = (function () {
    function RegisterComponent(service, router) {
        this.service = service;
        this.router = router;
        this.loadprovinces();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new newuser_1.Newuser("", "", "", "", "", "", "", "", "", "", "", "");
    };
    RegisterComponent.prototype.loadprovinces = function () {
        var _this = this;
        this.service.provinsi().subscribe(function (res) {
            _this.provinces = res.content;
            _this.selprov = _this.provinces.find(function (x) { return x.id === _this.user.provinsi_id; }).nama;
        });
    };
    ;
    RegisterComponent.prototype.askprovince = function () {
        var _this = this;
        dialogs.action({
            message: "Pilih Provinsi Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.provinces.map(function (x) { return x.nama; })
        }).then(function (result) {
            if (result !== "Batal" && result !== _this.selprov) {
                _this.selprov = result;
                _this.user.provinsi_id = _this.provinces.find(function (x) { return x.nama === result; }).id;
                _this.selkab = "";
                _this.selkec = "";
                _this.selpus = "";
                _this.selkelu = "";
                _this.loadkabupatens();
            }
        });
    };
    RegisterComponent.prototype.loadkabupatens = function () {
        var _this = this;
        if (this.user.provinsi_id !== null) {
            this.service.kabupaten(this.user.provinsi_id).subscribe(function (res) {
                _this.kabupatens = res.content;
                _this.selkab = _this.kabupatens.find(function (x) { return x.id === _this.user.kabupaten_id; }).nama;
            });
        }
    };
    RegisterComponent.prototype.askkabupaten = function () {
        var _this = this;
        dialogs.action({
            message: "Pilih Kabupaten/Kota Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.kabupatens.map(function (x) { return x.nama; })
        }).then(function (result) {
            if (result !== "Batal" && result !== _this.selkab) {
                _this.selkab = result;
                _this.user.kabupaten_id = _this.kabupatens.find(function (x) { return x.nama === result; }).id;
                _this.selkec = "";
                _this.selpus = "";
                _this.selkelu = "";
                _this.loadkecamatans();
            }
        });
    };
    RegisterComponent.prototype.loadkecamatans = function () {
        var _this = this;
        if (this.user.kabupaten_id !== null) {
            this.service.kecamatan(this.user.kabupaten_id).subscribe(function (res) {
                _this.kecamatans = res.content;
                _this.selkec = _this.kecamatans.find(function (x) { return x.id === _this.user.kecamatan_id; }).nama;
            });
        }
    };
    RegisterComponent.prototype.askkecamatan = function () {
        var _this = this;
        dialogs.action({
            message: "Pilih Kecamatan Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.kecamatans.map(function (x) { return x.nama; })
        }).then(function (result) {
            if (result !== "Batal" && result !== _this.selkec) {
                _this.selkec = result;
                _this.user.kecamatan_id = _this.kecamatans.find(function (x) { return x.nama === result; }).id;
                _this.selpus = "";
                _this.selkelu = "";
                _this.loadkelurahan();
            }
        });
    };
    RegisterComponent.prototype.loadkelurahan = function () {
        var _this = this;
        if (this.user.kecamatan_id !== null) {
            this.service.kelurahan(this.user.kecamatan_id).subscribe(function (res) {
                _this.kelurahan = res.content;
                _this.selkelu = _this.kelurahan.find(function (x) { return x.id === _this.user.kelurahan_id; }).nama;
            });
        }
    };
    RegisterComponent.prototype.askkelurahan = function () {
        var _this = this;
        dialogs.action({
            message: "Pilih Kelurahan Anda Bekerja",
            cancelButtonText: "Batal",
            actions: this.kelurahan.map(function (x) { return x.nama; })
        }).then(function (result) {
            if (result !== "Batal" && result !== _this.selkelu) {
                _this.selkelu = result;
                _this.user.kelurahan_id = _this.kelurahan.find(function (x) { return x.nama === result; }).id;
            }
        });
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        if (this.user.password === this.user.password_confirmation) {
            this.service.register(this.user)
                .subscribe(function (response) { return dialogs.alert("Akun berhasil didaftarkan").then(function () { return _this.router.navigate(['/login']); }); }, function (err) { });
        }
        else {
            alert("Password dan konfirmasi password belum sama");
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "ns-register",
            moduleId: module.id,
            providers: [register_service_1.RegisterService],
            templateUrl: "./register.component.html",
            styleUrls: ["./register-common.css", "./register.css"]
        }),
        __metadata("design:paramtypes", [register_service_1.RegisterService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
