"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../../shared/drawer/drawer.page");
var HelpComponent = /** @class */ (function (_super) {
    __extends(HelpComponent, _super);
    function HelpComponent(changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        //addArtist = firebase.firestore.collection("artists");
        _this.q1 = false;
        _this.q2 = false;
        return _this;
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        core_1.Component({
            selector: "help",
            moduleId: module.id,
            providers: [],
            templateUrl: "./help.component.html",
            styleUrls: ["./help-common.css"]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], HelpComponent);
    return HelpComponent;
}(drawer_page_1.DrawerPage));
exports.HelpComponent = HelpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZWxwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSwrREFBNkQ7QUFVN0Q7SUFBbUMsaUNBQVU7SUFJM0MsdUJBQW9CLGlCQUFvQztRQUF4RCxZQUNFLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBRm1CLHVCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFIeEQsdURBQXVEO1FBQ2hELFFBQUUsR0FBWSxLQUFLLENBQUM7UUFDcEIsUUFBRSxHQUFZLEtBQUssQ0FBQzs7SUFHM0IsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBVFUsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxFQUFFO1lBQ2IsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDO3lDQUt1Qyx3QkFBaUI7T0FKN0MsYUFBYSxDQVd6QjtJQUFELG9CQUFDO0NBQUEsQUFYRCxDQUFtQyx3QkFBVSxHQVc1QztBQVhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLnBhZ2VcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIilcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImhlbHBcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9oZWxwLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2hlbHAtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVscENvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIC8vYWRkQXJ0aXN0ID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJhcnRpc3RzXCIpO1xyXG4gIHB1YmxpYyBxMTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBxMjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKXtcclxuICAgIHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn0iXX0=