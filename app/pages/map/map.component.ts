import { Component, ChangeDetectorRef, OnInit} from "@angular/core";
import { DrawerPage } from "../../shared/drawer/drawer.page";
import firebase = require("nativescript-plugin-firebase")

@Component({
  selector: "map",
  moduleId: module.id,
  providers: [],
  templateUrl: "./map.component.html",
  styleUrls: ["./map-common.css"]
})
export class MapComponent extends DrawerPage implements OnInit {
  //addArtist = firebase.firestore.collection("artists");

  constructor(private changeDetectorRef: ChangeDetectorRef){
    super(changeDetectorRef);
  }

  ngOnInit(): void {
  }

}