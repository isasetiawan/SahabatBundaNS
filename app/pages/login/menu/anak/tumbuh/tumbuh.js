"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tumbuh = (function () {
    function Tumbuh(p) {
        this.id = "";
        this.tumbuh_id = "";
        this.bidan_id = "";
        this.tanggal = new Date().toISOString().substring(0, 10);
        this.berat = "";
        this.tinggi = "";
        this.hasil = "";
        this.gizi = "";
        if (p !== null) {
            this.id = p.id;
            this.tumbuh_id = p.tumbuh_id;
            this.bidan_id = p.bidan_id;
            this.tanggal = p.tanggal;
            this.berat = p.berat;
            this.tinggi = p.tinggi;
            this.hasil = p.hasil;
            this.gizi = p.gizi;
        }
    }
    return Tumbuh;
}());
exports.Tumbuh = Tumbuh;
