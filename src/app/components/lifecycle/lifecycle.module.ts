import {NgModule} from "@angular/core";
import {LifecycleComponent} from "./lifecycle.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../common/shared.module";
import {PersonComponent} from "./person.component";
import {OnChangeComponent} from "./components/on-change.component";
import {OnInitComponent} from "./components/on-init.component";
import {DoCheckComponent} from "./components/do-check.component";
import {AfterContentInitComponent} from "./components/after-content-init.component";
import {AfterContentCheckedComponent} from "./components/after-content-checked.component";
import {AfterViewInitComponent} from "./components/after-view-init.component";
import {AfterViewCheckedComponent} from "./components/after-view-checked.component";

// Route Module
@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: LifecycleComponent}])
  ],
  exports: [
    RouterModule
  ]
})
export class LifecycleRouteModule {
}

// Module
@NgModule({
  declarations: [
    LifecycleComponent,
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
    LifecycleRouteModule,
    SharedModule
  ]
})
export class LifecycleModule {
}
