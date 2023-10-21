import {NgModule} from '@angular/core';
import {MaterialModule} from "../../common/material.module";
import {CommonModule} from "@angular/common";
import {MainComponent} from "./main.component";
import {MainRouteModule} from "./main.route.module";
import {FeatureComponent} from "./feature.component";

@NgModule({
  declarations: [
    MainComponent,
    FeatureComponent
  ],
  imports: [
    CommonModule,
    MainRouteModule,
    MaterialModule
  ]
})
export class MainModule {
}
