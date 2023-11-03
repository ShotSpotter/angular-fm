import {NgModule} from '@angular/core';
import {ComponentCommunicationComponent} from './component-communication.component';
import {ComponentCommunicationParamsComponent} from './component-communication-params.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../common/shared.module';
import {RouterModule} from '@angular/router';

// Route Module
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: ComponentCommunicationComponent, data: {title: 'Components Communication'},
        children: [
          {path: 'params/:name', component: ComponentCommunicationParamsComponent, data: {title: 'Components Communication - (Path/Query) Parameters'}}
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
    ComponentCommunicationParamsComponent
  ],
  imports: [
    CommonModule,
    ComponentCommunicationRouteModule,
    SharedModule
  ]
})
export class ComponentCommunicationModule {
}
