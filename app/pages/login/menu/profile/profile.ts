export class Profile{
    email: string;
    ibu_nama: string;
    ibu_birthdate: string;
    ibu_agama: string;
    ibu_alamat: string;
    provinsi_id: number;
    kabupaten_id: number;
    kecamatan_id: number;
    ayah_nama: string;
    ayah_birthdate: string;
    ayah_agama: string;
    ayah_alamat: string;

    constructor(email: string, ibu_nama: string, ibu_birthdate: string, ibu_agama: string, ibu_alamat: string, provinsi_id: number, kabupaten_id: number, kecamatan_id: number, ayah_nama: string, ayah_birthdate: string, ayah_agama: string, ayah_alamat: string) {
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
}