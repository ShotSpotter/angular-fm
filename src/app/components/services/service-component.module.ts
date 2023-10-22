import {NgModule} from "@angular/core";
import {ServiceComponent} from "./service.component";
import {SharedModule} from "../../common/shared.module";
import {ServiceFirstChildComponent} from "./service-first-child.component";
import {ServiceSecondChildComponent} from "./service-second-child.component";
import {RouterModule} from "@angular/router";

// Route Module
@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: ServiceComponent}])
  ],
  exports: [
    RouterModule
  ]
})
export class ServiceComponentRouteModule {
}

@NgModule({
  declarations: [
    ServiceComponent,
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
