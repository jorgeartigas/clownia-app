import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "bottom-bar",
  moduleId: module.id,
  providers: [],
  templateUrl: "./bottom-bar.html",
  styleUrls: ["./bottom-bar-common.css", "./bottom-bar.css"]
})
export class BottomBarComponent {
  activeRoute: string;
  
  constructor(private route: ActivatedRoute){
    this.activeRoute = route.snapshot.url[0].path;
    console.log(route.snapshot.url[0].path);
  }
}