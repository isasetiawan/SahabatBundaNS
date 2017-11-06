import * as moment from "moment/moment"

export class StaticFuncs {
    static showDate(date:string){
        moment.locale("id");
        return moment(date).local().format("D MMMM Y")
    }

    static getMonthAge(date:string){
        return moment().diff(date,"month")
    }
}