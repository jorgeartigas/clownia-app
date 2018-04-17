import { Component, ChangeDetectorRef} from "@angular/core";
import { DrawerPage } from "../../shared/drawer/drawer.page";

@Component({
  selector: "city-of-clownia",
  moduleId: module.id,
  providers: [],
  templateUrl: "./city.component.html",
  styleUrls: ["./city-common.css"]
})
export class CityComponent extends DrawerPage {

  constructor(private changeDetectorRef: ChangeDetectorRef){
    super(changeDetectorRef);
  }
}