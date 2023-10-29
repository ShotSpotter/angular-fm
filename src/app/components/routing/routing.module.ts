import {NgModule} from '@angular/core';
import {RoutingComponent} from './routing.component';
import {SharedModule} from '../../common/shared.module';
import {RoutingRouteModule} from './routing.route.module';
import {RoutingHomeComponent} from './routing-home.component';

@NgModule({
  declarations: [
    RoutingComponent,
    RoutingHomeComponent,
  ],
  imports: [
    RoutingRouteModule,
    SharedModule
  ]
})
export class RoutingModule {
}
