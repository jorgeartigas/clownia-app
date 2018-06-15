"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../../shared/drawer/drawer.page");
var utils_1 = require("tns-core-modules/utils/utils");
var ExploreComponent = /** @class */ (function (_super) {
    __extends(ExploreComponent, _super);
    function ExploreComponent(changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        return _this;
    }
    ExploreComponent.prototype.open = function () {
        utils_1.openUrl('http://www.elripolles.com/');
    };
    ExploreComponent = __decorate([
        core_1.Component({
            selector: "explore",
            moduleId: module.id,
            providers: [],
            templateUrl: "./explore.component.html",
            styleUrls: ["./explore-common.css"]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], ExploreComponent);
    return ExploreComponent;
}(drawer_page_1.DrawerPage));
exports.ExploreComponent = ExploreComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwbG9yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleHBsb3JlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RDtBQUM1RCwrREFBNkQ7QUFDN0Qsc0RBQXVEO0FBU3ZEO0lBQXNDLG9DQUFVO0lBRTlDLDBCQUFvQixpQkFBb0M7UUFBeEQsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN6QjtRQUZtQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1COztJQUV4RCxDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNFLGVBQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFSVSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsRUFBRTtZQUNiLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzt5Q0FHdUMsd0JBQWlCO09BRjdDLGdCQUFnQixDQVM1QjtJQUFELHVCQUFDO0NBQUEsQUFURCxDQUFzQyx3QkFBVSxHQVMvQztBQVRZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RyYXdlci9kcmF3ZXIucGFnZVwiO1xyXG5pbXBvcnQgeyBvcGVuVXJsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImV4cGxvcmVcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9leHBsb3JlLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2V4cGxvcmUtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwbG9yZUNvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZil7XHJcbiAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgfVxyXG5cclxuICBvcGVuKCl7XHJcbiAgICBvcGVuVXJsKCdodHRwOi8vd3d3LmVscmlwb2xsZXMuY29tLycpO1xyXG4gIH1cclxufSJdfQ==