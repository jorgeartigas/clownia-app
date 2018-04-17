import { Component } from "@angular/core";
import { UserService } from '../user/user.service';

@Component({
  selector: "drawer-content",
  moduleId: module.id,
  providers: [UserService],
  templateUrl: "./drawer.component.html",
  styleUrls: []
})
export class DrawerComponent {
  constructor(private userService: UserService) {
  }

  logout(){
    this.userService.logout();
  }
}
