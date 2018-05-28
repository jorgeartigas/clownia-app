import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { CityComponent } from "./pages/city-of-clownia/city.component";
import { ConSpaceComponent } from "./pages/con-space/con-space.component";
import { ExploreComponent } from "./pages/explore/explore.component";
import { LineUpComponent } from "./pages/line-up/line-up.component";
import { MapComponent } from "./pages/map/map.component";
import { HelpComponent } from "./pages/help/help.component";
import { ArtistComponent } from "./pages/artist/artist.component";
import { AuthGuardArtist } from "./shared/auth-guard-artist.service";

export const routes = [
  { path: "", component: LoginComponent},
  { path: "home", component: HomeComponent },
  { path: "city-of-clownia", component: CityComponent },
  { path: "con-space", component: ConSpaceComponent },
  { path: "explore", component: ExploreComponent },
  { path: "line-up", component: LineUpComponent },
  { path: "map", component: MapComponent },
  { path: "help", component: HelpComponent },
  { path: 'artist/:id', component: ArtistComponent, canActivate: [AuthGuardArtist] }
];

export const navigatableComponents = [
  LoginComponent,
  HomeComponent,
  CityComponent,
  ConSpaceComponent,
  ExploreComponent,
  LineUpComponent,
  MapComponent,
  HelpComponent,
  ArtistComponent,
];