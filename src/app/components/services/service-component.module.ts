import {NgModule} from "@angular/core";
import {ServiceParentComponent} from "./service-parent.component";
import {SharedModule} from "../../common/shared.module";
import {ServiceFirstChildComponent} from "./service-first-child.component";
import {ServiceSecondChildComponent} from "./service-second-child.component";
import {RouterModule} from "@angular/router";

// Route Module
@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: ServiceParentComponent}])
  ],
  exports: [
    RouterModule
  ]
})
export class ServiceComponentRouteModule {
}

@NgModule({
  declarations: [
    ServiceParentComponent,
    ServiceFirstChildComponent,
    ServiceSecondChildComponent
  ],
  imports: [
    ServiceComponentRouteModule,
    SharedModule
  ]
})
export class ServiceComponentModule {
}
