import { Router } from '@angular/router';
import { Component, ChangeDetectorRef, OnInit, OnDestroy} from "@angular/core";
import { DrawerPage } from "../../shared/drawer/drawer.page";
import { registerElement } from 'nativescript-angular/element-registry';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
// Important - must register MapView plugin in order to use in Angular templates
registerElement('MapView', () => MapView);
@Component({
  selector: "map",
  moduleId: module.id,
  providers: [],
  templateUrl: "./map.component.html",
  styleUrls: ["./map-common.css"]
})
export class MapComponent extends DrawerPage implements OnInit, OnDestroy {
  latitude =  42.235256067719085;
  longitude = 2.2855696454644203;
  zoom = 15;
  minZoom = 15.2;
  maxZoom = 22;
  bearing = 319.72222900390625;
  tilt = 0;
  padding = [40, 40, 40, 40];
  mapView: MapView;

  lastCamera: String;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ){
    super(changeDetectorRef);
  }

  ngOnInit(): void {
  }
  //Map events
  onMapReady(event) {
    this.mapView = event.object;
    this.mapView.settings.mapToolbarEnabled = true;
    this.mapView.settings.myLocationButtonEnabled = true;

    let campinkgMarker = new Marker();
    campinkgMarker.position = Position.positionFromLatLng(42.23609534625625, 2.2808345407247543);
    campinkgMarker.title = "Camping";
    campinkgMarker.snippet = "Clownia Camping";
    campinkgMarker.userData = {redirect: false};
    this.mapView.addMarker(campinkgMarker);

    let creuRojaCamping = new Marker();
    creuRojaCamping.position = Position.positionFromLatLng(42.23595335729702, 2.2804483026266094);
    creuRojaCamping.title = "Creu Roja";
    creuRojaCamping.snippet = "Si et trobes malament no dubtis en acudir";
    creuRojaCamping.userData = {redirect: false};
    this.mapView.addMarker(creuRojaCamping);

    let clowniaMainFestival = new Marker();
    clowniaMainFestival.position = Position.positionFromLatLng(42.237302984193626, 2.2861453145742416);
    clowniaMainFestival.title = "Clownia Main Stage";
    clowniaMainFestival.snippet = "Clownia Camping";
    clowniaMainFestival.userData = {redirect: true};
    this.mapView.addMarker(clowniaMainFestival);

    let plaçaMajorStage = new Marker();
    plaçaMajorStage.position = Position.positionFromLatLng(42.23277267123674, 2.2848762944340706);
    plaçaMajorStage.visible = true;
    plaçaMajorStage.title = "Plaça Major Stage";
    plaçaMajorStage.snippet = "Escenari a la plaça major del poble";
    plaçaMajorStage.userData = {redirect: true};
    this.mapView.addMarker(plaçaMajorStage);

    let arrossada = new Marker();
    arrossada.position = Position.positionFromLatLng(42.237302984193626, 2.2861453145742416);
    arrossada.visible = true;
    arrossada.title = "Arrossada popular";
    arrossada.snippet = "El diumenge farem una arrossada popular, acompanyans!";
    arrossada.userData = {redirect: false};
    this.mapView.addMarker(arrossada);

    let showers = new Marker();
    showers.position = Position.positionFromLatLng(42.23517340525405, 2.2881807759404182);
    showers.visible = true;
    showers.title = "Espai de dutxes";
    showers.snippet = "Aqui disposeu d'aigua calenta per a dutxar-hos! 9h a 20h";
    showers.userData = {redirect: false};
    this.mapView.addMarker(showers);

    let chargingPoint = new Marker();
    chargingPoint.position = Position.positionFromLatLng(42.235403022945135, 2.2886458039283752);
    chargingPoint.visible = true;
    chargingPoint.title = "Espai de càrrega";
    chargingPoint.snippet = "Disposeu de punts de càrrega per al mòvil";
    chargingPoint.userData = {redirect: false};
    this.mapView.addMarker(chargingPoint);

    let parking = new Marker();
    parking.position = Position.positionFromLatLng(42.23753507640149, 2.2830061241984367);
    parking.visible = true;
    parking.title = "Parking";
    parking.snippet = "Zones d'aparcament gratuit";
    parking.userData = {redirect: false};
    this.mapView.addMarker(parking);

    let parking2 = new Marker();
    parking2.position = Position.positionFromLatLng(42.236218717522625, 2.2926905751228333);
    parking2.visible = true;
    parking2.title = "Parking";
    parking2.snippet = "Zones d'aparcament gratuit";
    parking2.userData = {redirect: false};
    this.mapView.addMarker(parking2);

  }

  onCoordinateTapped(args) {
      // console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
  }

  onMarkerEvent(args) {
      if (args.marker.title === 'Clownia Main Stage') {
        this.router.navigate(['/line-up']);
      } else if (args.marker.title === 'Plaça Major Stage') {
        this.router.navigate(['/line-up']);
      } else if (args.marker.title === 'Camping') {
        this.router.navigate(['/help']);
      }

  }

  onCameraChanged(args) {
      // console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
      this.lastCamera = JSON.stringify(args.camera);
  }

  ngOnDestroy(): void {
    this.mapView = null;
    this.lastCamera = null;
  }

}