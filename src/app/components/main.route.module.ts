import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MainComponent} from "./main.component";
import {FeatureComponent} from "./feature.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'main', component: MainComponent, children: [
          {path: '', component: FeatureComponent},
          {path: 'lifecycle', loadChildren: () => import('./lifecycle/lifecycle.module').then(m => m.LifecycleModule)},
          {path: 'services', loadChildren: () => import('./services/service-component.module').then(m => m.ServiceComponentModule)},
          {path: 'subscriptions', loadChildren: () => import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsModule)},
          {path: 'directives', loadChildren: () => import('./directive/directive.module').then(m => m.DirectiveModule)},
        ]
      },
      {path: '', redirectTo: 'main'}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class MainRouteModule {
}
