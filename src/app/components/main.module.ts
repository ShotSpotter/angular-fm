import {NgModule} from '@angular/core';
import {MaterialModule} from "../../common/material.module";
import {MainComponent} from "./main.component";
import {MainRouteModule} from "./main.route.module";
import {FeatureComponent} from "./feature.component";
import {SharedModule} from "../common/shared.module";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    FeatureComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    MainRouteModule
  ]
})
export class MainModule {
}
