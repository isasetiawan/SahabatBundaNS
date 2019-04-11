"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Newuser = (function () {
    function Newuser(username, email, password, password_confirmation, ibu_nama, ibu_birthdate, ibu_alamat, ibu_agama, ayah_nama, ayah_alamat, ayah_agama, ayah_birthdate) {
        this.username = username;
        this.password = password;
        this.password_confirmation = password_confirmation;
        this.ibu_nama = ibu_nama;
        this.ibu_birthdate = ibu_birthdate;
        this.ibu_alamat = ibu_alamat;
        this.ibu_agama = ibu_agama;
        this.ayah_nama = ayah_nama;
        this.ayah_alamat = ayah_alamat;
        this.ayah_agama = ayah_agama;
        this.ayah_birthdate = ayah_birthdate;
        this.i_agree = false;
    }
    return Newuser;
}());
exports.Newuser = Newuser;
