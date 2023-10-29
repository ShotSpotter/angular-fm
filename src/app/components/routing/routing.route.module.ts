import {NgModule} from '@angular/core';
import {RoutingComponent} from './routing.component';
import {RouterModule} from '@angular/router';
import {RoutingHomeComponent} from './routing-home.component';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '', component: RoutingComponent,
      children: [
        {path: '', component: RoutingHomeComponent}
      ],
      data: {
        title: 'Routes'
      }
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingRouteModule {
}
