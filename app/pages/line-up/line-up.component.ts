import { Component, ChangeDetectorRef, OnInit} from "@angular/core";
import { DrawerPage } from "../../shared/drawer/drawer.page";
import firebase = require("nativescript-plugin-firebase")

@Component({
  selector: "line-up",
  moduleId: module.id,
  providers: [],
  templateUrl: "./line-up.component.html",
  styleUrls: ["./line-up-common.css"]
})
export class LineUpComponent extends DrawerPage implements OnInit {
  artists: any = [];
  artistsRef = firebase.firestore.collection("artists");

  constructor(private changeDetectorRef: ChangeDetectorRef){
    super(changeDetectorRef);
    this.artistsRef.get().then(snap => {
      snap.forEach(artist => {
        this.artists.push(artist);
      });
    });
  }

  ngOnInit(): void {
  }

}