import { Component } from "@angular/core";
import { View } from "ui/core/view";
import * as utils from "utils/utils";

@Component({
  selector: "bottom-bar",
  moduleId: module.id,
  providers: [],
  templateUrl: "./bottom-bar.html",
  styleUrls: ["./bottom-bar-common.css", "./bottom-bar.css"]
})
export class BottomBar {
  public tabSelectedIndex: number;

  constructor() {
      this.tabSelectedIndex = 1;
  }
}
