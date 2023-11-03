import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../common/shared.module';
import {RouterModule} from '@angular/router';
import {ComponentLifecycleComponent} from './component-lifecycle.component';
import {OnChangeComponent} from './on-change.component';
import {OnInitComponent} from './on-init.component';
import {DoCheckComponent} from './do-check.component';
import {AfterContentInitComponent} from './after-content-init.component';
import {AfterContentCheckedComponent} from './after-content-checked.component';
import {AfterViewInitComponent} from './after-view-init.component';
import {AfterViewCheckedComponent} from './after-view-checked.component';
import {PersonComponent} from '../../../common/person.component';

// Route Module
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: ComponentLifecycleComponent, data: {title: 'Components Lifecycle'}
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentLifecycleRouteModule {
}

@NgModule({
  declarations: [
    ComponentLifecycleComponent,
    OnChangeComponent,
    OnInitComponent,
    DoCheckComponent,
    AfterContentInitComponent,
    AfterContentCheckedComponent,
    AfterViewInitComponent,
    AfterViewCheckedComponent,
    PersonComponent,
    AfterViewCheckedComponent
  ],
  imports: [
    CommonModule,
    ComponentLifecycleRouteModule,
    SharedModule
  ]
})
export class ComponentLifecycleModule {
}
