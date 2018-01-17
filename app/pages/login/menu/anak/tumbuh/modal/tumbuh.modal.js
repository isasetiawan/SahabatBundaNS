"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var moment = require("moment/moment");
var tumbuh_1 = require("../tumbuh");
var TumbuhModal = (function () {
    function TumbuhModal(params) {
        this.params = params;
        this.is_store = true;
        console.log("TElo ", JSON.stringify(this.params.context));
        this.tumbuh = new tumbuh_1.Tumbuh();
        if (this.params.context.result !== null) {
            this.tumbuh = this.params.context.result;
        }
    }
    TumbuhModal.prototype.submit = function () {
        this.tumbuh.tanggal = moment(this.tumbuh.tanggal).format("Y-MM-DD");
        this.params.closeCallback({ tumbuh: this.tumbuh, is_store: this.is_store });
    };
    TumbuhModal = __decorate([
        core_1.Component({
            selector: "ns-modal-tumbuh",
            moduleId: module.id,
            templateUrl: "./tumbuh.modal.html"
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.ModalDialogParams])
    ], TumbuhModal);
    return TumbuhModal;
}());
exports.TumbuhModal = TumbuhModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVtYnVoLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHVtYnVoLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLDZEQUF1RDtBQUN2RCxzQ0FBdUM7QUFDdkMsb0NBQWlDO0FBT2pDO0lBS0kscUJBQTJCLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBRm5ELGFBQVEsR0FBVyxJQUFJLENBQUM7UUFHcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBZ0IsQ0FBQztRQUN2RCxDQUFDO0lBQ0wsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUE7SUFDM0UsQ0FBQztJQWhCUSxXQUFXO1FBTHZCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixXQUFXLEVBQUUscUJBQXFCO1NBQ3JDLENBQUM7eUNBTW9DLHdDQUFpQjtPQUwxQyxXQUFXLENBaUJ2QjtJQUFELGtCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtNb2RhbERpYWxvZ1BhcmFtc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tIFwibW9tZW50L21vbWVudFwiXHJcbmltcG9ydCB7VHVtYnVofSBmcm9tIFwiLi4vdHVtYnVoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLW1vZGFsLXR1bWJ1aFwiLFxyXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90dW1idWgubW9kYWwuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUdW1idWhNb2RhbCB7XHJcblxyXG4gICAgdHVtYnVoOlR1bWJ1aDtcclxuICAgIGlzX3N0b3JlOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczpNb2RhbERpYWxvZ1BhcmFtcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJURWxvIFwiLEpTT04uc3RyaW5naWZ5KHRoaXMucGFyYW1zLmNvbnRleHQpKTtcclxuICAgICAgICB0aGlzLnR1bWJ1aCA9IG5ldyBUdW1idWgoKTtcclxuICAgICAgICBpZiAodGhpcy5wYXJhbXMuY29udGV4dC5yZXN1bHQgIT09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLnR1bWJ1aCA9IHRoaXMucGFyYW1zLmNvbnRleHQucmVzdWx0IGFzIFR1bWJ1aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCl7XHJcbiAgICAgICAgdGhpcy50dW1idWgudGFuZ2dhbCA9IG1vbWVudCh0aGlzLnR1bWJ1aC50YW5nZ2FsKS5mb3JtYXQoXCJZLU1NLUREXCIpO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soe3R1bWJ1aDp0aGlzLnR1bWJ1aCwgaXNfc3RvcmU6dGhpcy5pc19zdG9yZX0pXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==