"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var drawer_page_1 = require("../../shared/drawer/drawer.page");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
// Important - must register MapView plugin in order to use in Angular templates
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var MapComponent = /** @class */ (function (_super) {
    __extends(MapComponent, _super);
    function MapComponent(changeDetectorRef, router) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.router = router;
        _this.latitude = 42.235256067719085;
        _this.longitude = 2.2855696454644203;
        _this.zoom = 15;
        _this.minZoom = 15.2;
        _this.maxZoom = 22;
        _this.bearing = 319.72222900390625;
        _this.tilt = 0;
        _this.padding = [40, 40, 40, 40];
        return _this;
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    //Map events
    MapComponent.prototype.onMapReady = function (event) {
        this.mapView = event.object;
        this.mapView.settings.mapToolbarEnabled = true;
        this.mapView.settings.myLocationButtonEnabled = true;
        var campinkgMarker = new nativescript_google_maps_sdk_1.Marker();
        campinkgMarker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(42.23609534625625, 2.2808345407247543);
        campinkgMarker.title = "Camping";
        campinkgMarker.snippet = "Clownia Camping";
        campinkgMarker.userData = { redirect: false };
        this.mapView.addMarker(campinkgMarker);
        var creuRojaCamping = new nativescript_google_maps_sdk_1.Marker();
        creuRojaCamping.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(42.23595335729702, 2.2804483026266094);
        creuRojaCamping.title = "Creu Roja";
        creuRojaCamping.snippet = "Si et trobes malament no dubtis en acudir";
        creuRojaCamping.userData = { redirect: false };
        this.mapView.addMarker(creuRojaCamping);
        var clowniaMainFestival = new nativescript_google_maps_sdk_1.Marker();
        clowniaMainFestival.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(42.237302984193626, 2.2861453145742416);
        clowniaMainFestival.title = "Clownia Main Stage";
        clowniaMainFestival.snippet = "Clownia Camping";
        clowniaMainFestival.userData = { redirect: true };
        this.mapView.addMarker(clowniaMainFestival);
        var plaçaMajorStage = new nativescript_google_maps_sdk_1.Marker();
        plaçaMajorStage.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(42.23277267123674, 2.2848762944340706);
        plaçaMajorStage.visible = true;
        plaçaMajorStage.title = "Plaça Major Stage";
        plaçaMajorStage.snippet = "Escenari a la plaça major del poble";
        plaçaMajorStage.userData = { redirect: true };
        this.mapView.addMarker(plaçaMajorStage);
        var arrossada = new nativescript_google_maps_sdk_1.Marker();
        arrossada.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(42.237302984193626, 2.2861453145742416);
        arrossada.visible = true;
        arrossada.title = "Arrossada popular";
        arrossada.snippet = "El diumenge farem una arrossada popular, acompanyans!";
        arrossada.userData = { redirect: false };
        this.mapView.addMarker(arrossada);
        var showers = new nativescript_google_maps_sdk_1.Marker();
        showers.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(42.23517340525405, 2.2881807759404182);
        showers.visible = true;
        showers.title = "Espai de dutxes";
        showers.snippet = "Aqui disposeu d'aigua calenta per a dutxar-hos! 9h a 20h";
        showers.userData = { redirect: false };
        this.mapView.addMarker(showers);
        var chargingPoint = new nativescript_google_maps_sdk_1.Marker();
        chargingPoint.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(42.235403022945135, 2.2886458039283752);
        chargingPoint.visible = true;
        chargingPoint.title = "Espai de càrrega";
        chargingPoint.snippet = "Disposeu de punts de càrrega per al mòvil";
        chargingPoint.userData = { redirect: false };
        this.mapView.addMarker(chargingPoint);
        var parking = new nativescript_google_maps_sdk_1.Marker();
        parking.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(42.23753507640149, 2.2830061241984367);
        parking.visible = true;
        parking.title = "Parking";
        parking.snippet = "Zones d'aparcament gratuit";
        parking.userData = { redirect: false };
        this.mapView.addMarker(parking);
        var parking2 = new nativescript_google_maps_sdk_1.Marker();
        parking2.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(42.236218717522625, 2.2926905751228333);
        parking2.visible = true;
        parking2.title = "Parking";
        parking2.snippet = "Zones d'aparcament gratuit";
        parking2.userData = { redirect: false };
        this.mapView.addMarker(parking2);
    };
    MapComponent.prototype.onCoordinateTapped = function (args) {
        // console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    };
    MapComponent.prototype.onMarkerEvent = function (args) {
        if (args.marker.title === 'Clownia Main Stage') {
            this.router.navigate(['/line-up']);
        }
        else if (args.marker.title === 'Plaça Major Stage') {
            this.router.navigate(['/line-up']);
        }
        else if (args.marker.title === 'Camping') {
            this.router.navigate(['/help']);
        }
    };
    MapComponent.prototype.onCameraChanged = function (args) {
        // console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    };
    MapComponent.prototype.ngOnDestroy = function () {
        this.mapView = null;
        this.lastCamera = null;
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: "map",
            moduleId: module.id,
            providers: [],
            templateUrl: "./map.component.html",
            styleUrls: ["./map-common.css"]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            router_1.Router])
    ], MapComponent);
    return MapComponent;
}(drawer_page_1.DrawerPage));
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBeUM7QUFDekMsc0NBQStFO0FBQy9FLCtEQUE2RDtBQUM3RCwwRUFBd0U7QUFDeEUsNkVBQXlFO0FBQ3pFLGdGQUFnRjtBQUNoRixrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsc0NBQU8sRUFBUCxDQUFPLENBQUMsQ0FBQztBQVExQztJQUFrQyxnQ0FBVTtJQVkxQyxzQkFDVSxpQkFBb0MsRUFDcEMsTUFBYztRQUZ4QixZQUlFLGtCQUFNLGlCQUFpQixDQUFDLFNBQ3pCO1FBSlMsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxZQUFNLEdBQU4sTUFBTSxDQUFRO1FBYnhCLGNBQVEsR0FBSSxrQkFBa0IsQ0FBQztRQUMvQixlQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFDL0IsVUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixhQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsYUFBTyxHQUFHLGtCQUFrQixDQUFDO1FBQzdCLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxhQUFPLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQzs7SUFTM0IsQ0FBQztJQUVELCtCQUFRLEdBQVI7SUFDQSxDQUFDO0lBQ0QsWUFBWTtJQUNaLGlDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFFckQsSUFBSSxjQUFjLEdBQUcsSUFB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a0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUF6SFUsWUFBWTtRQVB4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLEVBQUU7WUFDYixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQ2hDLENBQUM7eUNBYzZCLHdCQUFpQjtZQUM1QixlQUFNO09BZGIsWUFBWSxDQTJIeEI7SUFBRCxtQkFBQztDQUFBLEFBM0hELENBQWtDLHdCQUFVLEdBMkgzQztBQTNIWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJQYWdlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kcmF3ZXIvZHJhd2VyLnBhZ2VcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcclxuLy8gSW1wb3J0YW50IC0gbXVzdCByZWdpc3RlciBNYXBWaWV3IHBsdWdpbiBpbiBvcmRlciB0byB1c2UgaW4gQW5ndWxhciB0ZW1wbGF0ZXNcclxucmVnaXN0ZXJFbGVtZW50KCdNYXBWaWV3JywgKCkgPT4gTWFwVmlldyk7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1hcFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICB0ZW1wbGF0ZVVybDogXCIuL21hcC5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9tYXAtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGV4dGVuZHMgRHJhd2VyUGFnZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBsYXRpdHVkZSA9ICA0Mi4yMzUyNTYwNjc3MTkwODU7XHJcbiAgbG9uZ2l0dWRlID0gMi4yODU1Njk2NDU0NjQ0MjAzO1xyXG4gIHpvb20gPSAxNTtcclxuICBtaW5ab29tID0gMTUuMjtcclxuICBtYXhab29tID0gMjI7XHJcbiAgYmVhcmluZyA9IDMxOS43MjIyMjkwMDM5MDYyNTtcclxuICB0aWx0ID0gMDtcclxuICBwYWRkaW5nID0gWzQwLCA0MCwgNDAsIDQwXTtcclxuICBtYXBWaWV3OiBNYXBWaWV3O1xyXG5cclxuICBsYXN0Q2FtZXJhOiBTdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICApe1xyXG4gICAgc3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG4gIC8vTWFwIGV2ZW50c1xyXG4gIG9uTWFwUmVhZHkoZXZlbnQpIHtcclxuICAgIHRoaXMubWFwVmlldyA9IGV2ZW50Lm9iamVjdDtcclxuICAgIHRoaXMubWFwVmlldy5zZXR0aW5ncy5tYXBUb29sYmFyRW5hYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLm1hcFZpZXcuc2V0dGluZ3MubXlMb2NhdGlvbkJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgIGxldCBjYW1waW5rZ01hcmtlciA9IG5ldyBNYXJrZXIoKTtcclxuICAgIGNhbXBpbmtnTWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKDQyLjIzNjA5NTM0NjI1NjI1LCAyLjI4MDgzNDU0MDcyNDc1NDMpO1xyXG4gICAgY2FtcGlua2dNYXJrZXIudGl0bGUgPSBcIkNhbXBpbmdcIjtcclxuICAgIGNhbXBpbmtnTWFya2VyLnNuaXBwZXQgPSBcIkNsb3duaWEgQ2FtcGluZ1wiO1xyXG4gICAgY2FtcGlua2dNYXJrZXIudXNlckRhdGEgPSB7cmVkaXJlY3Q6IGZhbHNlfTtcclxuICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIoY2FtcGlua2dNYXJrZXIpO1xyXG5cclxuICAgIGxldCBjcmV1Um9qYUNhbXBpbmcgPSBuZXcgTWFya2VyKCk7XHJcbiAgICBjcmV1Um9qYUNhbXBpbmcucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcoNDIuMjM1OTUzMzU3Mjk3MDIsIDIuMjgwNDQ4MzAyNjI2NjA5NCk7XHJcbiAgICBjcmV1Um9qYUNhbXBpbmcudGl0bGUgPSBcIkNyZXUgUm9qYVwiO1xyXG4gICAgY3JldVJvamFDYW1waW5nLnNuaXBwZXQgPSBcIlNpIGV0IHRyb2JlcyBtYWxhbWVudCBubyBkdWJ0aXMgZW4gYWN1ZGlyXCI7XHJcbiAgICBjcmV1Um9qYUNhbXBpbmcudXNlckRhdGEgPSB7cmVkaXJlY3Q6IGZhbHNlfTtcclxuICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIoY3JldVJvamFDYW1waW5nKTtcclxuXHJcbiAgICBsZXQgY2xvd25pYU1haW5GZXN0aXZhbCA9IG5ldyBNYXJrZXIoKTtcclxuICAgIGNsb3duaWFNYWluRmVzdGl2YWwucG9zaXRpb24gPSBQb3NpdGlvbi5wb3NpdGlvbkZyb21MYXRMbmcoNDIuMjM3MzAyOTg0MTkzNjI2LCAyLjI4NjE0NTMxNDU3NDI0MTYpO1xyXG4gICAgY2xvd25pYU1haW5GZXN0aXZhbC50aXRsZSA9IFwiQ2xvd25pYSBNYWluIFN0YWdlXCI7XHJcbiAgICBjbG93bmlhTWFpbkZlc3RpdmFsLnNuaXBwZXQgPSBcIkNsb3duaWEgQ2FtcGluZ1wiO1xyXG4gICAgY2xvd25pYU1haW5GZXN0aXZhbC51c2VyRGF0YSA9IHtyZWRpcmVjdDogdHJ1ZX07XHJcbiAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKGNsb3duaWFNYWluRmVzdGl2YWwpO1xyXG5cclxuICAgIGxldCBwbGHDp2FNYWpvclN0YWdlID0gbmV3IE1hcmtlcigpO1xyXG4gICAgcGxhw6dhTWFqb3JTdGFnZS5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyg0Mi4yMzI3NzI2NzEyMzY3NCwgMi4yODQ4NzYyOTQ0MzQwNzA2KTtcclxuICAgIHBsYcOnYU1ham9yU3RhZ2UudmlzaWJsZSA9IHRydWU7XHJcbiAgICBwbGHDp2FNYWpvclN0YWdlLnRpdGxlID0gXCJQbGHDp2EgTWFqb3IgU3RhZ2VcIjtcclxuICAgIHBsYcOnYU1ham9yU3RhZ2Uuc25pcHBldCA9IFwiRXNjZW5hcmkgYSBsYSBwbGHDp2EgbWFqb3IgZGVsIHBvYmxlXCI7XHJcbiAgICBwbGHDp2FNYWpvclN0YWdlLnVzZXJEYXRhID0ge3JlZGlyZWN0OiB0cnVlfTtcclxuICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIocGxhw6dhTWFqb3JTdGFnZSk7XHJcblxyXG4gICAgbGV0IGFycm9zc2FkYSA9IG5ldyBNYXJrZXIoKTtcclxuICAgIGFycm9zc2FkYS5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyg0Mi4yMzczMDI5ODQxOTM2MjYsIDIuMjg2MTQ1MzE0NTc0MjQxNik7XHJcbiAgICBhcnJvc3NhZGEudmlzaWJsZSA9IHRydWU7XHJcbiAgICBhcnJvc3NhZGEudGl0bGUgPSBcIkFycm9zc2FkYSBwb3B1bGFyXCI7XHJcbiAgICBhcnJvc3NhZGEuc25pcHBldCA9IFwiRWwgZGl1bWVuZ2UgZmFyZW0gdW5hIGFycm9zc2FkYSBwb3B1bGFyLCBhY29tcGFueWFucyFcIjtcclxuICAgIGFycm9zc2FkYS51c2VyRGF0YSA9IHtyZWRpcmVjdDogZmFsc2V9O1xyXG4gICAgdGhpcy5tYXBWaWV3LmFkZE1hcmtlcihhcnJvc3NhZGEpO1xyXG5cclxuICAgIGxldCBzaG93ZXJzID0gbmV3IE1hcmtlcigpO1xyXG4gICAgc2hvd2Vycy5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyg0Mi4yMzUxNzM0MDUyNTQwNSwgMi4yODgxODA3NzU5NDA0MTgyKTtcclxuICAgIHNob3dlcnMudmlzaWJsZSA9IHRydWU7XHJcbiAgICBzaG93ZXJzLnRpdGxlID0gXCJFc3BhaSBkZSBkdXR4ZXNcIjtcclxuICAgIHNob3dlcnMuc25pcHBldCA9IFwiQXF1aSBkaXNwb3NldSBkJ2FpZ3VhIGNhbGVudGEgcGVyIGEgZHV0eGFyLWhvcyEgOWggYSAyMGhcIjtcclxuICAgIHNob3dlcnMudXNlckRhdGEgPSB7cmVkaXJlY3Q6IGZhbHNlfTtcclxuICAgIHRoaXMubWFwVmlldy5hZGRNYXJrZXIoc2hvd2Vycyk7XHJcblxyXG4gICAgbGV0IGNoYXJnaW5nUG9pbnQgPSBuZXcgTWFya2VyKCk7XHJcbiAgICBjaGFyZ2luZ1BvaW50LnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKDQyLjIzNTQwMzAyMjk0NTEzNSwgMi4yODg2NDU4MDM5MjgzNzUyKTtcclxuICAgIGNoYXJnaW5nUG9pbnQudmlzaWJsZSA9IHRydWU7XHJcbiAgICBjaGFyZ2luZ1BvaW50LnRpdGxlID0gXCJFc3BhaSBkZSBjw6BycmVnYVwiO1xyXG4gICAgY2hhcmdpbmdQb2ludC5zbmlwcGV0ID0gXCJEaXNwb3NldSBkZSBwdW50cyBkZSBjw6BycmVnYSBwZXIgYWwgbcOydmlsXCI7XHJcbiAgICBjaGFyZ2luZ1BvaW50LnVzZXJEYXRhID0ge3JlZGlyZWN0OiBmYWxzZX07XHJcbiAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKGNoYXJnaW5nUG9pbnQpO1xyXG5cclxuICAgIGxldCBwYXJraW5nID0gbmV3IE1hcmtlcigpO1xyXG4gICAgcGFya2luZy5wb3NpdGlvbiA9IFBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyg0Mi4yMzc1MzUwNzY0MDE0OSwgMi4yODMwMDYxMjQxOTg0MzY3KTtcclxuICAgIHBhcmtpbmcudmlzaWJsZSA9IHRydWU7XHJcbiAgICBwYXJraW5nLnRpdGxlID0gXCJQYXJraW5nXCI7XHJcbiAgICBwYXJraW5nLnNuaXBwZXQgPSBcIlpvbmVzIGQnYXBhcmNhbWVudCBncmF0dWl0XCI7XHJcbiAgICBwYXJraW5nLnVzZXJEYXRhID0ge3JlZGlyZWN0OiBmYWxzZX07XHJcbiAgICB0aGlzLm1hcFZpZXcuYWRkTWFya2VyKHBhcmtpbmcpO1xyXG5cclxuICAgIGxldCBwYXJraW5nMiA9IG5ldyBNYXJrZXIoKTtcclxuICAgIHBhcmtpbmcyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKDQyLjIzNjIxODcxNzUyMjYyNSwgMi4yOTI2OTA1NzUxMjI4MzMzKTtcclxuICAgIHBhcmtpbmcyLnZpc2libGUgPSB0cnVlO1xyXG4gICAgcGFya2luZzIudGl0bGUgPSBcIlBhcmtpbmdcIjtcclxuICAgIHBhcmtpbmcyLnNuaXBwZXQgPSBcIlpvbmVzIGQnYXBhcmNhbWVudCBncmF0dWl0XCI7XHJcbiAgICBwYXJraW5nMi51c2VyRGF0YSA9IHtyZWRpcmVjdDogZmFsc2V9O1xyXG4gICAgdGhpcy5tYXBWaWV3LmFkZE1hcmtlcihwYXJraW5nMik7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Db29yZGluYXRlVGFwcGVkKGFyZ3MpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJDb29yZGluYXRlIFRhcHBlZCwgTGF0OiBcIiArIGFyZ3MucG9zaXRpb24ubGF0aXR1ZGUgKyBcIiwgTG9uOiBcIiArIGFyZ3MucG9zaXRpb24ubG9uZ2l0dWRlLCBhcmdzKTtcclxuICB9XHJcblxyXG4gIG9uTWFya2VyRXZlbnQoYXJncykge1xyXG4gICAgICBpZiAoYXJncy5tYXJrZXIudGl0bGUgPT09ICdDbG93bmlhIE1haW4gU3RhZ2UnKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbGluZS11cCddKTtcclxuICAgICAgfSBlbHNlIGlmIChhcmdzLm1hcmtlci50aXRsZSA9PT0gJ1BsYcOnYSBNYWpvciBTdGFnZScpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9saW5lLXVwJ10pO1xyXG4gICAgICB9IGVsc2UgaWYgKGFyZ3MubWFya2VyLnRpdGxlID09PSAnQ2FtcGluZycpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9oZWxwJ10pO1xyXG4gICAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgb25DYW1lcmFDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJDYW1lcmEgY2hhbmdlZDogXCIgKyBKU09OLnN0cmluZ2lmeShhcmdzLmNhbWVyYSksIEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKSA9PT0gdGhpcy5sYXN0Q2FtZXJhKTtcclxuICAgICAgdGhpcy5sYXN0Q2FtZXJhID0gSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hcFZpZXcgPSBudWxsO1xyXG4gICAgdGhpcy5sYXN0Q2FtZXJhID0gbnVsbDtcclxuICB9XHJcblxyXG59Il19