import {NgModule} from '@angular/core';
import {ComponentComponent} from './component.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../common/shared.module';

// Route Module
@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: ComponentComponent, data: {title: 'Components'}},
      {path: 'lifecycle', loadChildren: () => import('./lifecycle/component-lifecycle.module').then(m => m.ComponentLifecycleModule)},
      {path: 'communication', loadChildren: () => import('./communication/component-communication.module').then(m => m.ComponentCommunicationModule)}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentRouteModule {
}

// Module
@NgModule({
  declarations: [
    ComponentComponent
  ],
  imports: [
    CommonModule,
    ComponentRouteModule,
    SharedModule
  ]
})
export class ComponentModule {
}
