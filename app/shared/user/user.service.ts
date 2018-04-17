import { Injectable } from "@angular/core";
import { User } from "./user";
import firebase = require("nativescript-plugin-firebase");
import { Router } from "@angular/router";

@Injectable()
export class UserService {
  currentUser: any;
  constructor(private router: Router) {
  }
  
  isLoggedIn(){
    firebase.getCurrentUser().then(data => {
      if(data.uid){
        this.router.navigate(["home"]);
      }
    })
  }
  register(user: User) {
      firebase.createUser({
        email: user.email,
        password: user.password
    }).then(result => {
        user.uid = result.key;
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
    }).then( result => {
        console.log(JSON.stringify(result));
        this.router.navigate(["home"]);
      }), error => {
        console.log(error);
      }
  }

  googleLogin(){
    firebase.login({
      type: firebase.LoginType.GOOGLE
    }).then( result => {
          console.log(JSON.stringify(result));
          this.router.navigate(["home"]);
      }), error => {
          console.log(error);
      }
  }

  signOut(): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase.logout()
          .then(() => {
            this.currentUser = undefined;
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
    this.router.navigate(['']);
  }
}