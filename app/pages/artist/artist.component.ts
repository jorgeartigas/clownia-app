import { Component, ChangeDetectorRef, OnInit} from "@angular/core";
import { DrawerPage } from "../../shared/drawer/drawer.page";
import { ActivatedRoute } from "@angular/router";

import firebase = require("nativescript-plugin-firebase")

@Component({
  selector: "artist",
  moduleId: module.id,
  providers: [],
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist-common.css"]
})
export class ArtistComponent extends DrawerPage implements OnInit {
  ref = firebase.firestore.collection("artists");
  currentArtist:string;
  artist:any;
  constructor(private changeDetectorRef: ChangeDetectorRef, private route: ActivatedRoute){
    super(changeDetectorRef);
    this.currentArtist = this.route.snapshot.url[1].path;
  }

  ngOnInit(): void {
    this.ref.doc(this.currentArtist).get().then(artist => {
      this.artist = artist.data();
    })
  }

}