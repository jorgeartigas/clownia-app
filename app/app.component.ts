import { UserService } from './shared/user/user.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.isLoggedIn();
  }
}