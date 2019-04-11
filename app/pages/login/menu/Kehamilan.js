"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Kehamilan = (function () {
    function Kehamilan(id, orangtua_id, hamil_ke, HPHT, is_dropout, resiko, anemia, recent_pemeriksaan) {
        this.id = id;
        this.orangtua_id = orangtua_id;
        this.hamil_ke = hamil_ke;
        this.HPHT = HPHT;
        this.is_dropout = is_dropout;
        this.resiko = resiko;
        this.anemia = anemia;
        this.recent_pemeriksaan = recent_pemeriksaan;
    }
    return Kehamilan;
}());
exports.Kehamilan = Kehamilan;
