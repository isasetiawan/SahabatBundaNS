import * as moment from "moment/moment"

export class StaticFuncs {
    static showDate(date:string){
        moment.locale("id");
        return moment(date).local().format("D MMMM Y")
    }

    static getMonthAge(date:string){
        let mo = moment().diff(date,"month");
        let yo = Math.floor(mo / 12);

        return yo + " Tahun " + (mo % 12) + " Bulan"
    }
}