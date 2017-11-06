"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var anak_1 = require("../anak");
var anak_service_1 = require("../anak.service");
var Toast = require("nativescript-toast");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs = require("ui/dialogs");
var AnakComponent = (function () {
    function AnakComponent(navigate, router, service) {
        this.navigate = navigate;
        this.router = router;
        this.service = service;
        this.is_store = false;
    }
    AnakComponent_1 = AnakComponent;
    AnakComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (p) {
            console.log(JSON.stringify(p));
            if (!AnakComponent_1.isEmpty(p)) {
                _this._anak = new anak_1.Anak(p.id, p.orangtua_id, p.nama, p.gender, p.birthdate.split(" ")[0]);
            }
            else {
                _this._anak = new anak_1.Anak(0, 0, "", "L", "");
                _this.is_store = true;
            }
        });
    };
    AnakComponent.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };
    Object.defineProperty(AnakComponent.prototype, "anak", {
        get: function () {
            return this._anak;
        },
        enumerable: true,
        configurable: true
    });
    AnakComponent.prototype.submit = function () {
        var _this = this;
        if (!this.is_store) {
            this.service.update(this._anak).subscribe(function (res) {
                Toast.makeText(res.message).show();
                _this.navigate.backToPreviousPage();
            }, function (err) { return alert("Terjadil kesalahan " + err.json().message); });
        }
        else {
            this.service.store(this._anak).subscribe(function (res) {
                Toast.makeText(res.message).show();
                _this.navigate.backToPreviousPage();
            }, function (err) { return alert("Terjadil kesalahan " + err.json().message); });
        }
    };
    AnakComponent.prototype.delete = function () {
        var _this = this;
        dialogs.prompt({
            title: "",
            message: "Masukkan kata sandi untuk konfirmasi",
            okButtonText: "Hapus",
            cancelButtonText: "Batal",
            defaultText: "",
            inputType: dialogs.inputType.password
        }).then(function (r) {
            if (r.result === true) {
                _this.service.delete(r.text, _this._anak.id).subscribe(function (res) {
                    Toast.makeText(res.message).show();
                    _this.navigate.backToPreviousPage();
                }, function (err) {
                    Toast.makeText(err.json().message).show();
                });
            }
        });
    };
    AnakComponent.prototype.goToTumbuh = function () {
        var navexrta = {
            queryParams: this._anak
        };
        this.navigate.navigate(['/tumbuh'], navexrta);
    };
    AnakComponent.prototype.goToKembang = function () {
        var navexrta = {
            queryParams: this._anak
        };
        this.navigate.navigate(['/kembang'], navexrta);
    };
    AnakComponent.prototype.goToVaksin = function () {
        var navexrta = {
            queryParams: this._anak
        };
        this.navigate.navigate(['/vaksin'], navexrta);
    };
    AnakComponent = AnakComponent_1 = __decorate([
        core_1.Component({
            selector: "ns-anak",
            moduleId: module.id,
            providers: [anak_service_1.AnakService],
            templateUrl: "./anak.component.html",
            styleUrls: ["anak-common.css"]
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions, router_1.ActivatedRoute, anak_service_1.AnakService])
    ], AnakComponent);
    return AnakComponent;
    var AnakComponent_1;
}());
exports.AnakComponent = AnakComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmFrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUU7QUFDakUsZ0NBQTZCO0FBQzdCLGdEQUE0QztBQUM1QywwQ0FBNEM7QUFDNUMsNkRBQXNEO0FBQ3RELG9DQUFzQztBQVV0QztJQUtJLHVCQUFvQixRQUF5QixFQUFVLE1BQXFCLEVBQVUsT0FBbUI7UUFBckYsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUZ6RyxhQUFRLEdBQVcsS0FBSyxDQUFDO0lBR3pCLENBQUM7c0JBTlEsYUFBYTtJQVF0QixnQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQzdCLFVBQUEsQ0FBQztZQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxXQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3ZGLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBSSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLENB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O0lBQ1AsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDSSxJQUFJLFFBQVEsR0FBb0I7WUFDNUIsV0FBVyxFQUFDLElBQUksQ0FBQyxLQUFLO1NBQ3pCLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksSUFBSSxRQUFRLEdBQW9CO1lBQzVCLFdBQVcsRUFBQyxJQUFJLENBQUMsS0FBSztTQUN6QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBQyxRQUFRLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUNJLElBQUksUUFBUSxHQUFvQjtZQUM1QixXQUFXLEVBQUMsSUFBSSxDQUFDLEtBQUs7U0FDekIsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQWxHUSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsU0FBUztZQUNsQixRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsU0FBUyxFQUFDLENBQUMsMEJBQVcsQ0FBQztZQUN2QixXQUFXLEVBQUMsdUJBQXVCO1lBQ25DLFNBQVMsRUFBQyxDQUFDLGlCQUFpQixDQUFDO1NBQ2hDLENBQUM7eUNBTStCLHVDQUFnQixFQUFpQix1QkFBYyxFQUFrQiwwQkFBVztPQUxoRyxhQUFhLENBbUd6QjtJQUFELG9CQUFDOztDQUFBLEFBbkdELElBbUdDO0FBbkdZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7QW5ha30gZnJvbSBcIi4uL2FuYWtcIjtcclxuaW1wb3J0IHtBbmFrU2VydmljZX0gZnJvbSBcIi4uL2FuYWsuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xyXG5pbXBvcnQge1JvdXRlckV4dGVuc2lvbnN9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjpcIm5zLWFuYWtcIixcclxuICAgIG1vZHVsZUlkOm1vZHVsZS5pZCxcclxuICAgIHByb3ZpZGVyczpbQW5ha1NlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6XCIuL2FuYWsuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczpbXCJhbmFrLWNvbW1vbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFuYWtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgX2FuYWs6QW5haztcclxuICAgIGlzX3N0b3JlOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmlnYXRlOlJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcm91dGVyOkFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHNlcnZpY2U6QW5ha1NlcnZpY2Upe1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIucXVlcnlQYXJhbXMuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBwPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFBbmFrQ29tcG9uZW50LmlzRW1wdHkocCkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuYWsgPSBuZXcgQW5hayhwLmlkLHAub3Jhbmd0dWFfaWQscC5uYW1hLHAuZ2VuZGVyLHAuYmlydGhkYXRlLnNwbGl0KFwiIFwiKVswXSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5hayA9IG5ldyBBbmFrKDAsMCxcIlwiLFwiTFwiLFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNfc3RvcmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBpc0VtcHR5KG9iaikge1xyXG4gICAgICAgIGZvcihsZXQga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgICBpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFuYWsoKTpBbmFre1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmFrXHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCl7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzX3N0b3JlKXtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZSh0aGlzLl9hbmFrKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXM9PntcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGUuYmFja1RvUHJldmlvdXNQYWdlKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnI9PmFsZXJ0KFwiVGVyamFkaWwga2VzYWxhaGFuIFwiK2Vyci5qc29uKCkubWVzc2FnZSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5zdG9yZSh0aGlzLl9hbmFrKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICByZXM9PntcclxuICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dChyZXMubWVzc2FnZSkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGUuYmFja1RvUHJldmlvdXNQYWdlKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnI9PmFsZXJ0KFwiVGVyamFkaWwga2VzYWxhaGFuIFwiK2Vyci5qc29uKCkubWVzc2FnZSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGUoKXtcclxuICAgICAgICBkaWFsb2dzLnByb21wdChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIk1hc3Vra2FuIGthdGEgc2FuZGkgdW50dWsga29uZmlybWFzaVwiLFxyXG4gICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkhhcHVzXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkJhdGFsXCIsXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcclxuICAgICAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUucGFzc3dvcmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkudGhlbihyID0+IHtcclxuICAgICAgICAgICAgaWYgKHIucmVzdWx0ID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZS5kZWxldGUoci50ZXh0LHRoaXMuX2FuYWsuaWQpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICByZXM9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QubWFrZVRleHQocmVzLm1lc3NhZ2UpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZS5iYWNrVG9QcmV2aW91c1BhZ2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KGVyci5qc29uKCkubWVzc2FnZSkuc2hvdygpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub1R1bWJ1aCgpe1xyXG4gICAgICAgIGxldCBuYXZleHJ0YTpOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczp0aGlzLl9hbmFrXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlLm5hdmlnYXRlKFsnL3R1bWJ1aCddLG5hdmV4cnRhKVxyXG4gICAgfVxyXG5cclxuICAgIGdvVG9LZW1iYW5nKCl7XHJcbiAgICAgICAgbGV0IG5hdmV4cnRhOk5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOnRoaXMuX2FuYWtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubmF2aWdhdGUubmF2aWdhdGUoWycva2VtYmFuZyddLG5hdmV4cnRhKVxyXG4gICAgfVxyXG5cclxuICAgIGdvVG9WYWtzaW4oKXtcclxuICAgICAgICBsZXQgbmF2ZXhydGE6TmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6dGhpcy5fYW5ha1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZS5uYXZpZ2F0ZShbJy92YWtzaW4nXSxuYXZleHJ0YSlcclxuICAgIH1cclxufSJdfQ==