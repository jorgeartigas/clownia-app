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
        _this.artistsRef = firebase.firestore.collection("artists");
        _this.artistsRef.get().then(function (snap) {
            snap.forEach(function (artist) {
                _this.artists.push(artist);
            });
        });
        return _this;
    }
    LineUpComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS11cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaW5lLXVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSwrREFBNkQ7QUFDN0QsdURBQXlEO0FBU3pEO0lBQXFDLG1DQUFVO0lBSTdDLHlCQUFvQixpQkFBb0M7UUFBeEQsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQU16QjtRQVBtQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBSHhELGFBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsZ0JBQVUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUlwRCxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07Z0JBQ2pCLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7O0lBQ0wsQ0FBQztJQUVELGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBZFUsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxFQUFFO1lBQ2IsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO3lDQUt1Qyx3QkFBaUI7T0FKN0MsZUFBZSxDQWdCM0I7SUFBRCxzQkFBQztDQUFBLEFBaEJELENBQXFDLHdCQUFVLEdBZ0I5QztBQWhCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgRHJhd2VyUGFnZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZHJhd2VyL2RyYXdlci5wYWdlXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsaW5lLXVwXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbGluZS11cC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9saW5lLXVwLWNvbW1vbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIExpbmVVcENvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGFydGlzdHM6IGFueSA9IFtdO1xyXG4gIGFydGlzdHNSZWYgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbihcImFydGlzdHNcIik7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKXtcclxuICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICAgIHRoaXMuYXJ0aXN0c1JlZi5nZXQoKS50aGVuKHNuYXAgPT4ge1xyXG4gICAgICBzbmFwLmZvckVhY2goYXJ0aXN0ID0+IHtcclxuICAgICAgICB0aGlzLmFydGlzdHMucHVzaChhcnRpc3QpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxufSJdfQ==