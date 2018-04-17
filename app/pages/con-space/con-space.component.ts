import { Component, ChangeDetectorRef} from "@angular/core";
import { DrawerPage } from "../../shared/drawer/drawer.page";

@Component({
  selector: "con-space",
  moduleId: module.id,
  providers: [],
  templateUrl: "./con-space.component.html",
  styleUrls: ["./con-space-common.css"]
})
export class ConSpaceComponent extends DrawerPage {

  constructor(private changeDetectorRef: ChangeDetectorRef){
    super(changeDetectorRef);
  }
}