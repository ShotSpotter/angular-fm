import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {MainComponent} from "./main.component";
import {FeatureComponent} from "./feature.component";
import {HomeComponent} from "./home/home.component";


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'main', component: MainComponent, children: [
          {path: '', component: HomeComponent, data: {title: 'Angular'}},
          {path: 'features', component: FeatureComponent, data: {title: 'Features'}},
          {path: 'components', loadChildren: () => import('./component/component.module').then(m => m.ComponentModule)},
          {path: 'services', loadChildren: () => import('./services/service-component.module').then(m => m.ServiceComponentModule)},
          {path: 'subscriptions', loadChildren: () => import('./subscriptions/subscriptions.module').then(m => m.SubscriptionsModule)},
          {path: 'directives', loadChildren: () => import('./directive/directive.module').then(m => m.DirectiveModule)},
          {path: 'routing', loadChildren: () => import('./routing/routing.module').then(m => m.RoutingModule)},
          {path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)},
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
