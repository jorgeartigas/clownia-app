"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../../shared/drawer/drawer.page");
var router_1 = require("@angular/router");
var firebase = require("nativescript-plugin-firebase");
var ArtistComponent = /** @class */ (function (_super) {
    __extends(ArtistComponent, _super);
    function ArtistComponent(changeDetectorRef, route) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.route = route;
        _this.ref = firebase.firestore.collection("artists");
        _this.currentArtist = _this.route.snapshot.url[1].path;
        return _this;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ref.doc(this.currentArtist).get().then(function (artist) {
            _this.artist = artist.data();
        });
    };
    ArtistComponent = __decorate([
        core_1.Component({
            selector: "artist",
            moduleId: module.id,
            providers: [],
            templateUrl: "./artist.component.html",
            styleUrls: ["./artist-common.css"]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, router_1.ActivatedRoute])
    ], ArtistComponent);
    return ArtistComponent;
}(drawer_page_1.DrawerPage));
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFydGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFDcEUsK0RBQTZEO0FBQzdELDBDQUFpRDtBQUVqRCx1REFBeUQ7QUFTekQ7SUFBcUMsbUNBQVU7SUFJN0MseUJBQW9CLGlCQUFvQyxFQUFVLEtBQXFCO1FBQXZGLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FFekI7UUFIbUIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLFdBQUssR0FBTCxLQUFLLENBQWdCO1FBSHZGLFNBQUcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUs3QyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7O0lBQ3ZELENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNoRCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFiVSxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLEVBQUU7WUFDYixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUM7eUNBS3VDLHdCQUFpQixFQUFpQix1QkFBYztPQUo1RSxlQUFlLENBZTNCO0lBQUQsc0JBQUM7Q0FBQSxBQWZELENBQXFDLHdCQUFVLEdBZTlDO0FBZlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdG9yUmVmLCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IERyYXdlclBhZ2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RyYXdlci9kcmF3ZXIucGFnZVwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhcnRpc3RcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHByb3ZpZGVyczogW10sXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9hcnRpc3QuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vYXJ0aXN0LWNvbW1vbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFydGlzdENvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHJlZiA9IGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKFwiYXJ0aXN0c1wiKTtcclxuICBjdXJyZW50QXJ0aXN0OnN0cmluZztcclxuICBhcnRpc3Q6YW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSl7XHJcbiAgICBzdXBlcihjaGFuZ2VEZXRlY3RvclJlZik7XHJcbiAgICB0aGlzLmN1cnJlbnRBcnRpc3QgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnVybFsxXS5wYXRoO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlZi5kb2ModGhpcy5jdXJyZW50QXJ0aXN0KS5nZXQoKS50aGVuKGFydGlzdCA9PiB7XHJcbiAgICAgIHRoaXMuYXJ0aXN0ID0gYXJ0aXN0LmRhdGEoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxufSJdfQ==