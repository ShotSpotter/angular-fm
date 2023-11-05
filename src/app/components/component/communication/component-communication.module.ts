import {NgModule} from '@angular/core';
import {ComponentCommunicationComponent} from './component-communication.component';
import {ComponentCommunicationParamsComponent} from './params/component-communication-params.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../common/shared.module';
import {RouterModule} from '@angular/router';
import {ComponentCommunicationBindingsParentComponent} from './bindings/component-communication-bindings-parent.component';
import {ComponentCommunicationBindingsChildComponent} from './bindings/component-communication-bindings-child.component';

// Route Module
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: ComponentCommunicationComponent, data: {title: 'Components Communication'},
        children: [
          {path: 'params/:name', component: ComponentCommunicationParamsComponent, data: {title: 'Components Communication - (Path/Query) Parameters'}},
          {path: 'bindings', component: ComponentCommunicationBindingsParentComponent, data: {title: 'Components Communication - @Input/@Output Bindings'}}
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentCommunicationRouteModule {
}

@NgModule({
  declarations: [
    ComponentCommunicationComponent,
    ComponentCommunicationParamsComponent,
    ComponentCommunicationBindingsParentComponent,
    ComponentCommunicationBindingsChildComponent
  ],
  imports: [
    CommonModule,
    ComponentCommunicationRouteModule,
    SharedModule
  ]
})
export class ComponentCommunicationModule {
}
