"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Profile = (function () {
    function Profile(email, ibu_nama, ibu_birthdate, ibu_agama, ibu_alamat, provinsi_id, kabupaten_id, kecamatan_id, ayah_nama, ayah_birthdate, ayah_agama, ayah_alamat) {
        this.email = email;
        this.ibu_nama = ibu_nama;
        this.ibu_birthdate = ibu_birthdate;
        this.ibu_agama = ibu_agama;
        this.ibu_alamat = ibu_alamat;
        this.provinsi_id = provinsi_id;
        this.kabupaten_id = kabupaten_id;
        this.kecamatan_id = kecamatan_id;
        this.ayah_nama = ayah_nama;
        this.ayah_birthdate = ayah_birthdate;
        this.ayah_agama = ayah_agama;
        this.ayah_alamat = ayah_alamat;
    }
    return Profile;
}());
exports.Profile = Profile;
