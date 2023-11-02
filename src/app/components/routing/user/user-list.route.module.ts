import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserListComponent} from "./user-list.component";
import {UserDetailComponent} from "./detail/user-detail.component";
import {UserGuard} from "./user-guard";

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '', component: UserListComponent, data: {title: 'Routes'},
      children: [
        {path: ':id', component: UserDetailComponent, canActivate: [UserGuard], data: {title: 'Routes'}}
      ]
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class UserListRouteModule {
}
