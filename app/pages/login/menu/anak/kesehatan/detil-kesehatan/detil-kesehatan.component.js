"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Kesehatan_1 = require("../Kesehatan");
var kesehatan_service_1 = require("../kesehatan.service");
var nativescript_angular_1 = require("nativescript-angular");
var Toast = require("nativescript-toast");
var DetilKesehatanComponent = (function () {
    function DetilKesehatanComponent(modal, service) {
        var _this = this;
        this.modal = modal;
        this.service = service;
        this.statuses = [
            { key: 0, label: "Meninggal" },
            { key: 1, label: "Sehat" },
            { key: 2, label: "Sakit" }
        ];
        this.submitsucess = function (res) {
            Toast.makeText(res.message).show();
            _this.modal.closeCallback();
        };
        var params = this.modal.context;
        this.tahap = params.detail_tumbuh;
        this.hasilKesehatan = new Kesehatan_1.Kesehatan();
        if (params.result !== null) {
            this.isstore = false;
            this.hasilKesehatan.id = params.result.id;
            this.hasilKesehatan.tumbuh_id = params.result.tumbuh_id;
            this.hasilKesehatan.anak_id = params.result.anak.id;
            this.hasilKesehatan.penyebab = params.result.penyebab;
            this.hasilKesehatan.status = params.result.status;
            // this.bidan = params.result.bidan;
        }
        else {
            this.isstore = true;
            this.hasilKesehatan.tumbuh_id = params.id;
            this.hasilKesehatan.anak_id = params.anak.id;
        }
    }
    DetilKesehatanComponent.prototype.submit = function () {
        console.log(JSON.stringify(this.hasilKesehatan));
        if (this.isstore) {
            this.service.store(this.hasilKesehatan).subscribe(this.submitsucess);
        }
        else {
            this.service.edit(this.hasilKesehatan).subscribe(this.submitsucess);
        }
    };
    DetilKesehatanComponent.prototype.ngOnInit = function () { };
    DetilKesehatanComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-detil-kesehatan',
            templateUrl: './detil-kesehatan.component.html',
            styleUrls: ['./detil-kesehatan.component.css'],
            providers: [kesehatan_service_1.KesehatanService]
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.ModalDialogParams,
            kesehatan_service_1.KesehatanService])
    ], DetilKesehatanComponent);
    return DetilKesehatanComponent;
}());
exports.DetilKesehatanComponent = DetilKesehatanComponent;
