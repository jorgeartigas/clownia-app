import { Component, ChangeDetectorRef, OnInit} from "@angular/core";
import { DrawerPage } from "../../shared/drawer/drawer.page";
import firebase = require("nativescript-plugin-firebase")

@Component({
  selector: "help",
  moduleId: module.id,
  providers: [],
  templateUrl: "./help.component.html",
  styleUrls: ["./help-common.css"]
})
export class HelpComponent extends DrawerPage implements OnInit {
  //addArtist = firebase.firestore.collection("artists");
  public q1: boolean = false;
  public q2: boolean = false;
  constructor(private changeDetectorRef: ChangeDetectorRef){
    super(changeDetectorRef);
  }

  ngOnInit(): void {
  }

}