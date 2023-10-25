import {NgModule} from "@angular/core";
import {RoutingComponent} from "./routing.component";
import {SharedModule} from "../../common/shared.module";
import {RoutingRouteModule} from "./routing.route.module";
import {SafetySmartComponent} from "./components/safety-smart.component";

@NgModule({
  declarations: [
    RoutingComponent,
    SafetySmartComponent
  ],
  imports: [
    RoutingRouteModule,
    SharedModule
  ]
})
export class RoutingModule {
}
