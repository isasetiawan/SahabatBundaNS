export class Kehamilan {
    id:number;
    orangtua_id:number;
    hamil_ke:number;
    HPHT:Date;
    is_dropout:number;
    resiko:any;
    anemia:any;
    recent_pemeriksaan:Date;


    constructor(id: number, orangtua_id: number, hamil_ke: number, HPHT: Date, is_dropout: number, resiko: any, anemia: any, recent_pemeriksaan: Date) {
        this.id = id;
        this.orangtua_id = orangtua_id;
        this.hamil_ke = hamil_ke;
        this.HPHT = HPHT;
        this.is_dropout = is_dropout;
        this.resiko = resiko;
        this.anemia = anemia;
        this.recent_pemeriksaan = recent_pemeriksaan;
    }
}