"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../../shared/drawer/drawer.page");
var MapComponent = /** @class */ (function (_super) {
    __extends(MapComponent, _super);
    //addArtist = firebase.firestore.collection("artists");
    function MapComponent(changeDetectorRef) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        return _this;
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: "map",
            moduleId: module.id,
            providers: [],
            templateUrl: "./map.component.html",
            styleUrls: ["./map-common.css"]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], MapComponent);
    return MapComponent;
}(drawer_page_1.DrawerPage));
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFDcEUsK0RBQTZEO0FBVTdEO0lBQWtDLGdDQUFVO0lBQzFDLHVEQUF1RDtJQUV2RCxzQkFBb0IsaUJBQW9DO1FBQXhELFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FDekI7UUFGbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjs7SUFFeEQsQ0FBQztJQUVELCtCQUFRLEdBQVI7SUFDQSxDQUFDO0lBUlUsWUFBWTtRQVB4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLEVBQUU7WUFDYixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQ2hDLENBQUM7eUNBSXVDLHdCQUFpQjtPQUg3QyxZQUFZLENBVXhCO0lBQUQsbUJBQUM7Q0FBQSxBQVZELENBQWtDLHdCQUFVLEdBVTNDO0FBVlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RyYXdlci9kcmF3ZXIucGFnZVwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWFwXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbWFwLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL21hcC1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgZXh0ZW5kcyBEcmF3ZXJQYWdlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAvL2FkZEFydGlzdCA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKFwiYXJ0aXN0c1wiKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpe1xyXG4gICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxufSJdfQ==