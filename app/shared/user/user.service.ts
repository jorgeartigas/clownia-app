import { Injectable } from "@angular/core";
import { User } from "./user";
import firebase = require("nativescript-plugin-firebase");
import { Router } from "@angular/router";

@Injectable()
export class UserService {
  userId: string;
  currentUser: any;
  constructor(private router: Router) {
  }
  
  isLoggedIn(){
    firebase.getCurrentUser().then(data => {
      if(data.uid){
        this.userId = data.uid;
        this.router.navigate(["home"]);
        console.log(this.userId)
      }
    })
  }

  register(user: User) {
      firebase.createUser({
        email: user.email,
        password: user.password
    }).then(result => {
        this.currentUser = result;
        alert("User created succesfully");
    }).catch(err => {
        alert("createUser error: " + err);
    })
  }

  login(user: User) {
      firebase.login({
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: user.email,
          password: user.password
        }
      }).then(user => {
        this.userId = user.uid;
        this.currentUser = user;
        //console.dir(user);
        this.router.navigate(["home"]);
      }), error => {
        alert("Incorrect user or password");
      }
  }

  facebookLogin() {
    firebase.login({
        type: firebase.LoginType.FACEBOOK,
        facebookOptions: {
          scope: ['public_profile', 'email','user_hometown']
         }
    }).then(result => {
        this.userId = result.uid;
        this.currentUser = result;
        this.router.navigate(["home"]);
      }), error => {
        console.log(error);
      }
  }

  googleLogin(){
    firebase.login({
      type: firebase.LoginType.GOOGLE
    }).then(result => {
          this.userId = result.uid;
          this.currentUser = result
          this.router.navigate(["home"]);
      }), error => {
          console.log(error);
      }
  }

  guestLogin() {
    this.router.navigate(["home"]);
    firebase.login({
        type: firebase.LoginType.ANONYMOUS
      })
      .then(user => {
        this.currentUser = user;
        this.userId = user.uid;

      })
      .catch(error => console.log("Could not create an anonymous user: " + error));
  }
  signOut(): Promise<any> {
    this.router.navigate(["/"]);
    return new Promise((resolve, reject) => {
      firebase.logout()
          .then(() => {
            this.userId = null;
            this.currentUser = null;
            resolve();
          })
          .catch(err => {
            reject({
              message: err
            });
          });
    });
  }

  resetPassword(user: User){
    firebase.resetPassword({
      email: user.email
    }).then(user => {
      alert("email sent to "+user.email)
    }),error =>{
      alert("Try again")
    }
  }

  changePassword(user:User){
    firebase.changePassword({
      email: user.email,
      oldPassword: user.password,
      newPassword: user.password
    }).then(user => {
      alert("Password changed");
    }),error => {
      alert("Try again");
    }
  }

  logout(){
    firebase.logout();
    this.userId = null;
    this.currentUser = null
    this.router.navigate(['']);
  }
}