"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var moment = require("moment/moment");
var tumbuh_1 = require("../tumbuh");
var TumbuhModal = (function () {
    function TumbuhModal(params) {
        this.params = params;
        this.is_store = true;
        console.log("TElo ", JSON.stringify(this.params.context));
        this.tumbuh = new tumbuh_1.Tumbuh(this.params.context.hasil);
        if (this.params.context.hasil !== null) {
            this.is_store = false;
        }
        else {
            this.tumbuh.tumbuh_id = this.params.context.id;
            console.log(this.params.context.id);
        }
    }
    TumbuhModal.prototype.submit = function () {
        this.tumbuh.tanggal = moment(this.tumbuh.tanggal).format("Y-MM-DD");
        this.params.closeCallback({ tumbuh: this.tumbuh, is_store: this.is_store });
    };
    TumbuhModal = __decorate([
        core_1.Component({
            selector: "ns-modal-tumbuh",
            moduleId: module.id,
            templateUrl: "./tumbuh.modal.html"
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.ModalDialogParams])
    ], TumbuhModal);
    return TumbuhModal;
}());
exports.TumbuhModal = TumbuhModal;
