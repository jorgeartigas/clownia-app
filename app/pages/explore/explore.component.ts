import { Component, ChangeDetectorRef} from "@angular/core";
import { DrawerPage } from "../../shared/drawer/drawer.page";
import { openUrl } from "tns-core-modules/utils/utils";

@Component({
  selector: "explore",
  moduleId: module.id,
  providers: [],
  templateUrl: "./explore.component.html",
  styleUrls: ["./explore-common.css"]
})
export class ExploreComponent extends DrawerPage {

  constructor(private changeDetectorRef: ChangeDetectorRef){
    super(changeDetectorRef);
  }

  open(){
    openUrl('http://www.elripolles.com/');
  }
}