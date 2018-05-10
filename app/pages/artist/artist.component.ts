import { Component, ChangeDetectorRef, OnInit} from "@angular/core";
import { DrawerPage } from "../../shared/drawer/drawer.page";
import { CurrentArtist } from '../../shared/artist.service';
import { registerElement } from "nativescript-angular/element-registry";
import { Video } from 'nativescript-videoplayer';
import { openUrl } from "tns-core-modules/utils/utils";
registerElement("VideoPlayer", () => Video);

@Component({
  selector: "artist",
  moduleId: module.id,
  providers: [],
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist-common.css"]
})

export class ArtistComponent extends DrawerPage implements OnInit {
  artist: any;
  constructor(private changeDetectorRef: ChangeDetectorRef, private currentArtist: CurrentArtist){
    super(changeDetectorRef);
    this.artist = this.currentArtist.artist;
  }

  ngOnInit(): void {
  }

  navigateTo(social: string): void {
    console.log(social)
    switch (social) {
      case 'facebook':
        openUrl(this.artist.facebook_url);
        break;
      case 'youtube':
        openUrl(this.artist.youtube_url);
        break;
      case 'twitter':
        openUrl(this.artist.twitter_url);
        break;
      case 'www':
        openUrl(this.artist.www_url);
        break;
    }

  }
}