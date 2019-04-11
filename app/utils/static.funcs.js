"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment/moment");
var StaticFuncs = (function () {
    function StaticFuncs() {
    }
    StaticFuncs.showDate = function (date) {
        moment.locale("id");
        return moment(date).local().format("D MMMM Y");
    };
    StaticFuncs.getMonthAge = function (date) {
        var mo = moment().diff(date, "month");
        var yo = Math.floor(mo / 12);
        return yo + " Tahun " + (mo % 12) + " Bulan";
    };
    return StaticFuncs;
}());
exports.StaticFuncs = StaticFuncs;
