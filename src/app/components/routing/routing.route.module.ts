import {NgModule} from "@angular/core";
import {RoutingComponent} from "./routing.component";
import {RouterModule} from "@angular/router";
import {SafetySmartComponent} from "./components/safety-smart.component";

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '', component: RoutingComponent,
      children: [
        { path: '', component: SafetySmartComponent}
      ]
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingRouteModule {
}
