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
  // 0 -> LineUp
  // 1 -> Social
  // 2 -> Map
  // 3 -> Help
  arraySelected: Array<boolean> = [false,false,false,false];
  constructor(private route: ActivatedRoute){
    console.log(route.snapshot.url[0].path);
  }

  selected(index:number){
    for(let i=0;i<this.arraySelected.length;i++){
      if(i===index){
        this.arraySelected[i]=true;
      }else{
        this.arraySelected[i]=false;
      }
    }
  }
}