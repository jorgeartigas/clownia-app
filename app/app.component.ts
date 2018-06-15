import { UserService } from './shared/user/user.service';
import { Component, OnInit } from "@angular/core";
import * as LocalNotifications from "nativescript-local-notifications";

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
  constructor(private userService: UserService) {}
  ngOnInit() {
    LocalNotifications.hasPermission()
    this.userService.isLoggedIn();
    LocalNotifications.addOnMessageReceivedCallback(
      function (notification) {
        LocalNotifications.cancel(notification.id).then(result => console.log(result))
      }
  ).then(
      function() {
        console.log("Listener added");
      }
  )
  }
}