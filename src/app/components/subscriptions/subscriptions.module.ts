import {NgModule} from "@angular/core";
import {SharedModule} from "../../common/shared.module";
import {RouterModule} from "@angular/router";
import {MemoryLeakSubscriptionComponent} from "./memory-leak-subscription.component";
import {SubscriptionComponent} from "./subscription.component";
import {NoMemoryLeakSubscriptionComponent} from "./no-memory-leak-subscription.component";

// Route Module
@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '', component: SubscriptionComponent,
      children: [
        {path: 'good', component: NoMemoryLeakSubscriptionComponent},
        {path: 'bad', component: MemoryLeakSubscriptionComponent}
      ]
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class SubscriptionsRoutesModule {
}

@NgModule({
  declarations: [
    SubscriptionComponent,
    MemoryLeakSubscriptionComponent,
    NoMemoryLeakSubscriptionComponent
  ],
  imports: [
    SubscriptionsRoutesModule,
    SharedModule
  ]
})
export class SubscriptionsModule {
}
