export class Newuser {
    username:string;
    password:string;
    password_confirmation:string;
    ibu_nama:string;
    ibu_birthdate:string;
    ibu_alamat:string;
    ibu_agama:string;
    ayah_nama:string;
    ayah_alamat:string;
    ayah_agama:string;
    ayah_birthdate:string;
    i_agree:boolean;
    provinsi_id: number;
    kabupaten_id: number;
    kecamatan_id: number;
    kelurahan_id: number;


    constructor(username: string, email: string, password: string, password_confirmation: string, ibu_nama: string, ibu_birthdate: string, ibu_alamat: string, ibu_agama: string, ayah_nama: string, ayah_alamat: string, ayah_agama: string, ayah_birthdate: string) {
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
}