import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl:"pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;
  @ViewChild("container") container : ElementRef;

  constructor(private userService: UserService, private page: Page){
    //this.userService.isLoggedIn();
    this.user = new User();
    this.user.email = "hola@hola.com"
    this.user.password = "hola123";
  }
  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  submit(){
    if(this.isLoggingIn){
      this.login();
    }else{
      this.signUp();
    }
  }

  login() {
    this.userService.login(this.user);
  }

  signUp() {
    this.userService.register(this.user);
    this.loggingIn();
  }

  facebookLogin() {
    this.userService.facebookLogin();
  }

  googleLogin() {
    this.userService.googleLogin();
  }

  guestLogin() {
    this.userService.guestLogin();
  }

  loggingIn() {
    this.isLoggingIn = !this.isLoggingIn;
    let container = <View>this.container.nativeElement;
    container.animate({
      backgroundColor: this.isLoggingIn ? new Color('#0000ffff') : new Color('blue'),
      duration: 200
    })
  }

  resetPassword() {
    this.userService.resetPassword(this.user);
  }

  changePassword() {
    this.userService.changePassword(this.user);
  }
}