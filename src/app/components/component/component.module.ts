import {NgModule} from '@angular/core';
import {ComponentComponent} from './component.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../common/shared.module';
import {PersonComponent} from '../../common/person.component';
import {OnChangeComponent} from './components/on-change.component';
import {OnInitComponent} from './components/on-init.component';
import {DoCheckComponent} from './components/do-check.component';
import {AfterContentInitComponent} from './components/after-content-init.component';
import {AfterContentCheckedComponent} from './components/after-content-checked.component';
import {AfterViewInitComponent} from './components/after-view-init.component';
import {AfterViewCheckedComponent} from './components/after-view-checked.component';

// Route Module
@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: ComponentComponent, data: {title: 'Components'}}])
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
    ComponentComponent,
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
    ComponentRouteModule,
    SharedModule
  ]
})
export class ComponentModule {
}
