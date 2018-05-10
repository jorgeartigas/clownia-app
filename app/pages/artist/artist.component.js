"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var drawer_page_1 = require("../../shared/drawer/drawer.page");
var artist_service_1 = require("../../shared/artist.service");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_videoplayer_1 = require("nativescript-videoplayer");
var utils_1 = require("tns-core-modules/utils/utils");
element_registry_1.registerElement("VideoPlayer", function () { return nativescript_videoplayer_1.Video; });
var ArtistComponent = /** @class */ (function (_super) {
    __extends(ArtistComponent, _super);
    function ArtistComponent(changeDetectorRef, currentArtist) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.currentArtist = currentArtist;
        _this.artist = _this.currentArtist.artist;
        return _this;
    }
    ArtistComponent.prototype.ngOnInit = function () {
    };
    ArtistComponent.prototype.navigateTo = function (social) {
        console.log(social);
        switch (social) {
            case 'facebook':
                utils_1.openUrl(this.artist.facebook_url);
                break;
            case 'youtube':
                utils_1.openUrl(this.artist.youtube_url);
                break;
            case 'twitter':
                utils_1.openUrl(this.artist.twitter_url);
                break;
            case 'www':
                utils_1.openUrl(this.artist.www_url);
                break;
        }
    };
    ArtistComponent = __decorate([
        core_1.Component({
            selector: "artist",
            moduleId: module.id,
            providers: [],
            templateUrl: "./artist.component.html",
            styleUrls: ["./artist-common.css"]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, artist_service_1.CurrentArtist])
    ], ArtistComponent);
    return ArtistComponent;
}(drawer_page_1.DrawerPage));
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFydGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFDcEUsK0RBQTZEO0FBQzdELDhEQUE0RDtBQUM1RCwwRUFBd0U7QUFDeEUscUVBQWlEO0FBQ2pELHNEQUF1RDtBQUN2RCxrQ0FBZSxDQUFDLGFBQWEsRUFBRSxjQUFNLE9BQUEsZ0NBQUssRUFBTCxDQUFLLENBQUMsQ0FBQztBQVU1QztJQUFxQyxtQ0FBVTtJQUU3Qyx5QkFBb0IsaUJBQW9DLEVBQVUsYUFBNEI7UUFBOUYsWUFDRSxrQkFBTSxpQkFBaUIsQ0FBQyxTQUV6QjtRQUhtQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQVUsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFFNUYsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7SUFDMUMsQ0FBQztJQUVELGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLE1BQWM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuQixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2YsS0FBSyxVQUFVO2dCQUNiLGVBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNsQyxLQUFLLENBQUM7WUFDUixLQUFLLFNBQVM7Z0JBQ1osZUFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztZQUNSLEtBQUssU0FBUztnQkFDWixlQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDakMsS0FBSyxDQUFDO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLGVBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixLQUFLLENBQUM7UUFDVixDQUFDO0lBRUgsQ0FBQztJQTNCVSxlQUFlO1FBUjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLEVBQUU7WUFDYixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUM7eUNBSXVDLHdCQUFpQixFQUF5Qiw4QkFBYTtPQUZuRixlQUFlLENBNEIzQjtJQUFELHNCQUFDO0NBQUEsQUE1QkQsQ0FBcUMsd0JBQVUsR0E0QjlDO0FBNUJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLnBhZ2VcIjtcclxuaW1wb3J0IHsgQ3VycmVudEFydGlzdCB9IGZyb20gJy4uLy4uL3NoYXJlZC9hcnRpc3Quc2VydmljZSc7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB7IFZpZGVvIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXZpZGVvcGxheWVyJztcclxuaW1wb3J0IHsgb3BlblVybCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XHJcbnJlZ2lzdGVyRWxlbWVudChcIlZpZGVvUGxheWVyXCIsICgpID0+IFZpZGVvKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImFydGlzdFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2FydGlzdC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9hcnRpc3QtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFydGlzdENvbXBvbmVudCBleHRlbmRzIERyYXdlclBhZ2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGFydGlzdDogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGN1cnJlbnRBcnRpc3Q6IEN1cnJlbnRBcnRpc3Qpe1xyXG4gICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gICAgdGhpcy5hcnRpc3QgPSB0aGlzLmN1cnJlbnRBcnRpc3QuYXJ0aXN0O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZVRvKHNvY2lhbDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhzb2NpYWwpXHJcbiAgICBzd2l0Y2ggKHNvY2lhbCkge1xyXG4gICAgICBjYXNlICdmYWNlYm9vayc6XHJcbiAgICAgICAgb3BlblVybCh0aGlzLmFydGlzdC5mYWNlYm9va191cmwpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd5b3V0dWJlJzpcclxuICAgICAgICBvcGVuVXJsKHRoaXMuYXJ0aXN0LnlvdXR1YmVfdXJsKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAndHdpdHRlcic6XHJcbiAgICAgICAgb3BlblVybCh0aGlzLmFydGlzdC50d2l0dGVyX3VybCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3d3dyc6XHJcbiAgICAgICAgb3BlblVybCh0aGlzLmFydGlzdC53d3dfdXJsKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgfVxyXG59Il19