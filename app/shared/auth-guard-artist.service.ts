import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, ActivatedRoute,RouterStateSnapshot } from '@angular/router';
import { CurrentArtist } from './artist.service';
import firebase = require("nativescript-plugin-firebase");

@Injectable()
export class AuthGuardArtist implements CanActivate {
ref = firebase.firestore.collection("artists");
id: any;

  constructor(private currentArtist: CurrentArtist) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const that = this;
    this.id = state.url.split("/")
    return this.ref.doc(this.id[2]).get().then(artist => {
        if(artist){
            that.currentArtist.artist = artist.data();
            //if(artist.data().main_video != ""){
                //youtubeParser.getURL(artist.data().main_video, { quality: 'medium', container: 'mp4' })
                //.then(function (urlList) {
                  //  that.currentArtist.artist.main_video = urlList[0].url;
                //  }
               // );
           // }
            return true;
        }else{
            return false
        }
    })
  }
}