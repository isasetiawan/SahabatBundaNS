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
        return moment().diff(date, "month");
    };
    return StaticFuncs;
}());
exports.StaticFuncs = StaticFuncs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljLmZ1bmNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdGljLmZ1bmNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVDO0FBRXZDO0lBQUE7SUFTQSxDQUFDO0lBUlUsb0JBQVEsR0FBZixVQUFnQixJQUFXO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVNLHVCQUFXLEdBQWxCLFVBQW1CLElBQVc7UUFDMUIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQVRELElBU0M7QUFUWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG1vbWVudCBmcm9tIFwibW9tZW50L21vbWVudFwiXHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGljRnVuY3Mge1xyXG4gICAgc3RhdGljIHNob3dEYXRlKGRhdGU6c3RyaW5nKXtcclxuICAgICAgICBtb21lbnQubG9jYWxlKFwiaWRcIik7XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlKS5sb2NhbCgpLmZvcm1hdChcIkQgTU1NTSBZXCIpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldE1vbnRoQWdlKGRhdGU6c3RyaW5nKXtcclxuICAgICAgICByZXR1cm4gbW9tZW50KCkuZGlmZihkYXRlLFwibW9udGhcIilcclxuICAgIH1cclxufSJdfQ==