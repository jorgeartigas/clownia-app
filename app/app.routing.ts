import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { CityComponent } from "./pages/city-of-clownia/city.component";
import { ConSpaceComponent } from "./pages/con-space/con-space.component";
import { ExploreComponent } from "./pages/explore/explore.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "city-of-clownia", component: CityComponent },
  { path: "con-space", component: ConSpaceComponent },
  { path: "explore", component: ExploreComponent }
];

export const navigatableComponents = [
  LoginComponent,
  HomeComponent,
  CityComponent,
  ConSpaceComponent,
  ExploreComponent
];