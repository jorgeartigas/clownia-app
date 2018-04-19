"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../../shared/drawer/drawer.page");
var HomeComponent = /** @class */ (function (_super) {
    __extends(HomeComponent, _super);
    //addArtist = firebase.firestore.collection("artists");
    function HomeComponent(changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        return _this;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home",
            moduleId: module.id,
            providers: [],
            templateUrl: "./home.component.html",
            styleUrls: ["./home-common.css"]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], HomeComponent);
    return HomeComponent;
}(drawer_page_1.DrawerPage));
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSwrREFBNkQ7QUFVN0Q7SUFBbUMsaUNBQVU7SUFDM0MsdURBQXVEO0lBRXZELHVCQUFvQixpQkFBb0M7UUFBeEQsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUZtQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1COztJQUV4RCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUNBLENBQUM7SUFSVSxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLEVBQUU7WUFDYixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7eUNBSXVDLHdCQUFpQjtPQUg3QyxhQUFhLENBVXpCO0lBQUQsb0JBQUM7Q0FBQSxBQVZELENBQW1DLHdCQUFVLEdBVTVDO0FBVlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RyYXdlci9kcmF3ZXIucGFnZVwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiaG9tZVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vaG9tZS1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLy9hZGRBcnRpc3QgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbihcImFydGlzdHNcIik7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKXtcclxuICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn0iXX0=