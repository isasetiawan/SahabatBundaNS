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
        this.tumbuh = new tumbuh_1.Tumbuh(this.params.context.hasil);
        if (this.params.context.hasil !== null) {
            this.is_store = false;
        }
        else {
            this.tumbuh.tumbuh_id = this.params.context.id;
            console.log(this.params.context.id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHVtYnVoLm1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHVtYnVoLm1vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLDZEQUF1RDtBQUN2RCxzQ0FBdUM7QUFDdkMsb0NBQWlDO0FBT2pDO0lBS0kscUJBQTJCLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBRm5ELGFBQVEsR0FBVyxJQUFJLENBQUM7UUFHcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUN2QyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUE7SUFDM0UsQ0FBQztJQW5CUSxXQUFXO1FBTHZCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQixXQUFXLEVBQUUscUJBQXFCO1NBQ3JDLENBQUM7eUNBTW9DLHdDQUFpQjtPQUwxQyxXQUFXLENBb0J2QjtJQUFELGtCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtNb2RhbERpYWxvZ1BhcmFtc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tIFwibW9tZW50L21vbWVudFwiXHJcbmltcG9ydCB7VHVtYnVofSBmcm9tIFwiLi4vdHVtYnVoXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm5zLW1vZGFsLXR1bWJ1aFwiLFxyXG4gICAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi90dW1idWgubW9kYWwuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUdW1idWhNb2RhbCB7XHJcblxyXG4gICAgdHVtYnVoOlR1bWJ1aDtcclxuICAgIGlzX3N0b3JlOmJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczpNb2RhbERpYWxvZ1BhcmFtcyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJURWxvIFwiLEpTT04uc3RyaW5naWZ5KHRoaXMucGFyYW1zLmNvbnRleHQpKTtcclxuICAgICAgICB0aGlzLnR1bWJ1aCA9IG5ldyBUdW1idWgodGhpcy5wYXJhbXMuY29udGV4dC5oYXNpbCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyYW1zLmNvbnRleHQuaGFzaWwgIT09IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLmlzX3N0b3JlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50dW1idWgudHVtYnVoX2lkID0gdGhpcy5wYXJhbXMuY29udGV4dC5pZDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wYXJhbXMuY29udGV4dC5pZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCl7XHJcbiAgICAgICAgdGhpcy50dW1idWgudGFuZ2dhbCA9IG1vbWVudCh0aGlzLnR1bWJ1aC50YW5nZ2FsKS5mb3JtYXQoXCJZLU1NLUREXCIpO1xyXG4gICAgICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soe3R1bWJ1aDp0aGlzLnR1bWJ1aCwgaXNfc3RvcmU6dGhpcy5pc19zdG9yZX0pXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==