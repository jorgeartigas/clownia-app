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
  myShedule: boolean = false;
  artistsRef = firebase.firestore.collection("artists_preview").orderBy("name","asc");
  artistsBySetTime = firebase.firestore.collection("artists_preview").orderBy("set", "asc");
  bySetTime: any;
  // Artist by time
  firstDay: any = [];
  secondDay: any = [];
  thirdDay: any = [];
  fourthDay: any = [];
  // Artist by stages and times
  mainStageSchedule: any = [];
  plazaSchedule: any = [];
  esplanadaSchedule: any = [];
  carpaSchedule: any = [];
  // Stage toggles
  mainStageToggle: boolean = false;
  plazaToggle: boolean = false;
  esplanadaToggle: boolean = false;
  carpaToggle: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef){
    super(changeDetectorRef);
  }

  ngOnInit(): void {
    this.artistsRef.get().then(snap => {
      snap.forEach(artist => {
        this.artists.push(artist.data());
      });
    });
  
    this.artistsBySetTime
    .get()
    .then(snap => {
      snap.forEach(doc => {
        if(doc.data().day == 'Dijous 28') {
          this.firstDay.push(doc.data());
        } else if (doc.data().day == 'Divendres 29') {
            this.secondDay.push(doc.data());
          } else if (doc.data().day == 'Dissabte 30') {
              this.thirdDay.push(doc.data());
            } else if (doc.data().day == 'Diumenge 1'){
                this.fourthDay.push(doc.data());
              }
        if(doc.data().stage === 'MAIN STAGE') {
          this.mainStageSchedule.push(doc.data());
        } else if (doc.data().stage === 'CARPA') {
            this.carpaSchedule.push(doc.data());
          } else if (doc.data().stage === 'PLAÇA') {
              this.plazaSchedule.push(doc.data());
            } else {
                this.esplanadaSchedule.push(doc.data());
            }
      });
    }).then(()=>{
      let oldDay = "";
      this.mainStageSchedule.forEach((artist,index) => {
        if(oldDay !== artist.day){
          this.mainStageSchedule[index].firstDay = true;
        } else {
          this.mainStageSchedule[index].firstDay = false;
        }
        oldDay = artist.day;
      });
      let oldDay2 = "";
      this.carpaSchedule.forEach((artist,index) => {
        if(oldDay2 !== artist.day){
          this.carpaSchedule[index].firstDay = true;
        } else {
          this.carpaSchedule[index].firstDay = false;
        }
        oldDay2 = artist.day;
      });
      let oldDay3 = "";
      this.plazaSchedule.forEach((artist,index) => {
        if(oldDay3 !== artist.day){
          this.plazaSchedule[index].firstDay = true;
        } else {
          this.plazaSchedule[index].firstDay = false;
        }
        oldDay3 = artist.day;
      });
      let oldDay4 = "";
      this.esplanadaSchedule.forEach((artist,index) => {
        if(oldDay4 !== artist.day){
          this.esplanadaSchedule[index].firstDay = true;
        } else {
          this.esplanadaSchedule[index].firstDay = false;
        }
        oldDay4 = artist.day;
      });
      let oldDay5 = "";
      this.firstDay.forEach((artist,index) => {
        if(oldDay5 !== artist.day){
          this.firstDay[index].firstDay = true;
        } else {
          this.firstDay[index].firstDay = false;
        }
        oldDay5 = artist.day;
      });
      let oldDay6 = "";
      this.secondDay.forEach((artist,index) => {
        if(oldDay6 !== artist.day){
          this.secondDay[index].firstDay = true;
        } else {
          this.secondDay[index].firstDay = false;
        }
        oldDay6 = artist.day;
      });
      let oldDay7 = "";
      this.thirdDay.forEach((artist,index) => {
        if(oldDay7 !== artist.day){
          this.thirdDay[index].firstDay = true;
        } else {
          this.thirdDay[index].firstDay = false;
        }
        oldDay7 = artist.day;
      });
      let oldDay8 = "";
      this.fourthDay.forEach((artist,index) => {
        if(oldDay8 !== artist.day){
          this.fourthDay[index].firstDay = true;
        } else {
          this.fourthDay[index].firstDay = false;
        }
        oldDay8 = artist.day;
      });
      this.bySetTime = [].concat(this.firstDay,this.secondDay,this.thirdDay,this.fourthDay);
    });
  }
}