"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../../shared/drawer/drawer.page");
var firebase = require("nativescript-plugin-firebase");
var LineUpComponent = /** @class */ (function (_super) {
    __extends(LineUpComponent, _super);
    function LineUpComponent(changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.artists = [];
        _this.myShedule = false;
        _this.artistsRef = firebase.firestore.collection("artists_preview").orderBy("name", "asc");
        _this.artistsBySetTime = firebase.firestore.collection("artists_preview").orderBy("set", "asc");
        _this.mainStageSchedule = [];
        _this.plazaSchedule = [];
        _this.esplanadaSchedule = [];
        _this.carpaSchedule = [];
        _this.mainStageToggle = false;
        _this.plazaToggle = false;
        _this.esplanadaToggle = false;
        _this.carpaToggle = false;
        return _this;
    }
    LineUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.artistsRef.get().then(function (snap) {
            snap.forEach(function (artist) {
                _this.artists.push(artist.data());
            });
        });
        this.artistsBySetTime
            .get()
            .then(function (snap) {
            snap.forEach(function (doc) {
                if (doc.data().stage === 'MAIN STAGE') {
                    _this.mainStageSchedule.push(doc.data());
                }
                else if (doc.data().stage === 'CARPA') {
                    _this.carpaSchedule.push(doc.data());
                }
                else if (doc.data().stage === 'PLAÇA') {
                    _this.plazaSchedule.push(doc.data());
                }
                else {
                    _this.esplanadaSchedule.push(doc.data());
                }
            });
        }).then(function () {
            var oldDay = "";
            _this.mainStageSchedule.forEach(function (artist, index) {
                if (oldDay !== artist.day) {
                    _this.mainStageSchedule[index].firstDay = true;
                }
                else {
                    _this.mainStageSchedule[index].firstDay = false;
                }
                oldDay = artist.day;
            });
            var oldDay2 = "";
            _this.carpaSchedule.forEach(function (artist, index) {
                if (oldDay2 !== artist.day) {
                    _this.carpaSchedule[index].firstDay = true;
                }
                else {
                    _this.carpaSchedule[index].firstDay = false;
                }
                oldDay2 = artist.day;
            });
            var oldDay3 = "";
            _this.plazaSchedule.forEach(function (artist, index) {
                if (oldDay3 !== artist.day) {
                    _this.plazaSchedule[index].firstDay = true;
                }
                else {
                    _this.plazaSchedule[index].firstDay = false;
                }
                oldDay3 = artist.day;
            });
            var oldDay4 = "";
            _this.esplanadaSchedule.forEach(function (artist, index) {
                if (oldDay4 !== artist.day) {
                    _this.esplanadaSchedule[index].firstDay = true;
                }
                else {
                    _this.esplanadaSchedule[index].firstDay = false;
                }
                oldDay4 = artist.day;
            });
        });
    };
    LineUpComponent = __decorate([
        core_1.Component({
            selector: "line-up",
            moduleId: module.id,
            providers: [],
            templateUrl: "./line-up.component.html",
            styleUrls: ["./line-up-common.css"]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], LineUpComponent);
    return LineUpComponent;
}(drawer_page_1.DrawerPage));
exports.LineUpComponent = LineUpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS11cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaW5lLXVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSwrREFBNkQ7QUFDN0QsdURBQXlEO0FBU3pEO0lBQXFDLG1DQUFVO0lBYzdDLHlCQUFvQixpQkFBb0M7UUFBeEQsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUZtQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBYnhELGFBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixnQkFBVSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBQyxLQUFLLENBQUMsQ0FBQztRQUNwRixzQkFBZ0IsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUYsdUJBQWlCLEdBQVEsRUFBRSxDQUFDO1FBQzVCLG1CQUFhLEdBQVEsRUFBRSxDQUFDO1FBQ3hCLHVCQUFpQixHQUFRLEVBQUUsQ0FBQztRQUM1QixtQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixxQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxpQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixxQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxpQkFBVyxHQUFZLEtBQUssQ0FBQzs7SUFJN0IsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkEyREM7UUExREMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO2dCQUNqQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUks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QyxDQUFDO29CQUNOLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDN0MsQ0FBQztnQkFDRCxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNqQixLQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFDLEtBQUs7Z0JBQzFDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQztvQkFDekIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ2hELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pELENBQUM7Z0JBQ0QsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUE3RVUsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxFQUFFO1lBQ2IsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO3lDQWV1Qyx3QkFBaUI7T0FkN0MsZUFBZSxDQThFM0I7SUFBRCxzQkFBQztDQUFBLEFBOUVELENBQXFDLHdCQUFVLEdBOEU5QztBQTlFWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5wYWdlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsaW5lLXVwXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbGluZS11cC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9saW5lLXVwLWNvbW1vbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmVVcENvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGFydGlzdHM6IGFueSA9IFtdO1xyXG4gIG15U2hlZHVsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGFydGlzdHNSZWYgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbihcImFydGlzdHNfcHJldmlld1wiKS5vcmRlckJ5KFwibmFtZVwiLFwiYXNjXCIpO1xyXG4gIGFydGlzdHNCeVNldFRpbWUgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbihcImFydGlzdHNfcHJldmlld1wiKS5vcmRlckJ5KFwic2V0XCIsIFwiYXNjXCIpO1xyXG4gIG1haW5TdGFnZVNjaGVkdWxlOiBhbnkgPSBbXTtcclxuICBwbGF6YVNjaGVkdWxlOiBhbnkgPSBbXTtcclxuICBlc3BsYW5hZGFTY2hlZHVsZTogYW55ID0gW107XHJcbiAgY2FycGFTY2hlZHVsZTogYW55ID0gW107XHJcbiAgbWFpblN0YWdlVG9nZ2xlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcGxhemFUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBlc3BsYW5hZGFUb2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBjYXJwYVRvZ2dsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZil7XHJcbiAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYXJ0aXN0c1JlZi5nZXQoKS50aGVuKHNuYXAgPT4ge1xyXG4gICAgICBzbmFwLmZvckVhY2goYXJ0aXN0ID0+IHtcclxuICAgICAgICB0aGlzLmFydGlzdHMucHVzaChhcnRpc3QuZGF0YSgpKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIHRoaXMuYXJ0aXN0c0J5U2V0VGltZVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbihzbmFwID0+IHtcclxuICAgICAgc25hcC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgaWYoZG9jLmRhdGEoKS5zdGFnZSA9PT0gJ01BSU4gU1RBR0UnKSB7XHJcbiAgICAgICAgICB0aGlzLm1haW5TdGFnZVNjaGVkdWxlLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRvYy5kYXRhKCkuc3RhZ2UgPT09ICdDQVJQQScpIHtcclxuICAgICAgICAgICAgICB0aGlzLmNhcnBhU2NoZWR1bGUucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2MuZGF0YSgpLnN0YWdlID09PSAnUExBw4dBJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF6YVNjaGVkdWxlLnB1c2goZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5lc3BsYW5hZGFTY2hlZHVsZS5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KS50aGVuKCgpPT57XHJcbiAgICAgIGxldCBvbGREYXkgPSBcIlwiO1xyXG4gICAgICB0aGlzLm1haW5TdGFnZVNjaGVkdWxlLmZvckVhY2goKGFydGlzdCxpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmKG9sZERheSAhPT0gYXJ0aXN0LmRheSl7XHJcbiAgICAgICAgICB0aGlzLm1haW5TdGFnZVNjaGVkdWxlW2luZGV4XS5maXJzdERheSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubWFpblN0YWdlU2NoZWR1bGVbaW5kZXhdLmZpcnN0RGF5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9sZERheSA9IGFydGlzdC5kYXk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgb2xkRGF5MiA9IFwiXCI7XHJcbiAgICAgIHRoaXMuY2FycGFTY2hlZHVsZS5mb3JFYWNoKChhcnRpc3QsaW5kZXgpID0+IHtcclxuICAgICAgICBpZihvbGREYXkyICE9PSBhcnRpc3QuZGF5KXtcclxuICAgICAgICAgIHRoaXMuY2FycGFTY2hlZHVsZVtpbmRleF0uZmlyc3REYXkgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNhcnBhU2NoZWR1bGVbaW5kZXhdLmZpcnN0RGF5ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9sZERheTIgPSBhcnRpc3QuZGF5O1xyXG4gICAgICB9KTtcclxuICAgICAgbGV0IG9sZERheTMgPSBcIlwiO1xyXG4gICAgICB0aGlzLnBsYXphU2NoZWR1bGUuZm9yRWFjaCgoYXJ0aXN0LGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYob2xkRGF5MyAhPT0gYXJ0aXN0LmRheSl7XHJcbiAgICAgICAgICB0aGlzLnBsYXphU2NoZWR1bGVbaW5kZXhdLmZpcnN0RGF5ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5wbGF6YVNjaGVkdWxlW2luZGV4XS5maXJzdERheSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvbGREYXkzID0gYXJ0aXN0LmRheTtcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBvbGREYXk0ID0gXCJcIjtcclxuICAgICAgdGhpcy5lc3BsYW5hZGFTY2hlZHVsZS5mb3JFYWNoKChhcnRpc3QsaW5kZXgpID0+IHtcclxuICAgICAgICBpZihvbGREYXk0ICE9PSBhcnRpc3QuZGF5KXtcclxuICAgICAgICAgIHRoaXMuZXNwbGFuYWRhU2NoZWR1bGVbaW5kZXhdLmZpcnN0RGF5ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5lc3BsYW5hZGFTY2hlZHVsZVtpbmRleF0uZmlyc3REYXkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2xkRGF5NCA9IGFydGlzdC5kYXk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59Il19