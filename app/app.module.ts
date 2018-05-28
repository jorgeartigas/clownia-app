import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
// DRAWER IMPORTS
import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";
import { DrawerComponent } from "./shared/drawer/drawer.component";
// APP COMPONENT IMPORTS
import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";
import { BottomBarComponent } from "./shared/bottom-bar/bottom-bar.component";
import { AuthGuardArtist } from './shared/auth-guard-artist.service';
import { CurrentArtist } from './shared/artist.service';
import { UserService } from './shared/user/user.service';
// FIREBASE IMPORT
import firebase = require ('nativescript-plugin-firebase');

firebase.init({
  persist: true,
  storageBucket: 'gs://clownia-d67a2.appspot.com',
  onAuthStateChanged: function (data) { // optional but useful to immediately re-logon the user when he re-visits your app
    console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
    if (data.loggedIn) {
        console.log("Users+ uid: "+data.user.uid)
        console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
    }
    },
  }).then(() => {
        console.log("Firebase initialized")
    })
    .catch(error => console.log(error));

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents,
    SIDEDRAWER_DIRECTIVES,
    DrawerComponent,
    BottomBarComponent
  ],
  providers: [
    AuthGuardArtist,
    CurrentArtist,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}