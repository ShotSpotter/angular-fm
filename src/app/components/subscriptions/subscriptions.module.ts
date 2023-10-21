import {NgModule} from "@angular/core";
import {SharedModule} from "../../common/shared.module";
import {RouterModule} from "@angular/router";
import {MemoryLeakSubscriptionComponent} from "./memory-leak-subscription.component";
import {SubscriptionParentComponent} from "./subscription-parent.component";

// Route Module
@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: SubscriptionParentComponent}])
  ],
  exports: [
    RouterModule
  ]
})
export class SubscriptionsRoutesModule {
}

@NgModule({
  declarations: [
    SubscriptionParentComponent,
    MemoryLeakSubscriptionComponent,
  ],
  imports: [
    SubscriptionsRoutesModule,
    SharedModule
  ]
})
export class SubscriptionsModule {
}
