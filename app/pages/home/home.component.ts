import { Component, ChangeDetectorRef, OnInit} from "@angular/core";
import { DrawerPage } from "../../shared/drawer/drawer.page";
import firebase = require("nativescript-plugin-firebase")

@Component({
  selector: "home",
  moduleId: module.id,
  providers: [],
  templateUrl: "./home.component.html",
  styleUrls: ["./home-common.css"]
})
export class HomeComponent extends DrawerPage implements OnInit {
  //addArtist = firebase.firestore.collection("artists");

  constructor(private changeDetectorRef: ChangeDetectorRef){
    super(changeDetectorRef);
  }

  ngOnInit(): void {
  }
}