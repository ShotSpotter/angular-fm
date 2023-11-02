import {NgModule} from '@angular/core';
import {UserListComponent} from "./user-list.component";
import {SharedModule} from "../../../common/shared.module";
import {UserListRouteModule} from "./user-list.route.module";
import {UserDetailComponent} from "./detail/user-detail.component";
import {UserGuard} from "./user-guard";

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    SharedModule,
    UserListRouteModule
  ],
  providers: [UserGuard]
})
export class UserListModule {}
