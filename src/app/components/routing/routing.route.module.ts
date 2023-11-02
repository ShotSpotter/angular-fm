import {NgModule} from '@angular/core';
import {RoutingComponent} from './routing.component';
import {RouterModule} from '@angular/router';
import {RoutingHomeComponent} from './routing-home.component';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '', component: RoutingComponent,
      data: {title: 'Routes'},
      children: [
        {path: '', component: RoutingHomeComponent},
        {path: 'users', loadChildren: () => import('./user/user-list.module').then(m => m.UserListModule)}
      ]
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingRouteModule {
}
