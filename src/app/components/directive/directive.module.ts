import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {DirectiveComponent} from "./directive.component";
import {SharedModule} from "../../common/shared.module";
import {ComponentDirectiveComponent} from "./component-directive.component";
import {StructuralDirectiveComponent} from "./structural-directive.component";
import {AttributeDirectiveComponent} from "./attribute-directive.component";

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '', component: DirectiveComponent,
      children: [
        {path: 'structural', component: StructuralDirectiveComponent},
        {path: 'attribute', component: AttributeDirectiveComponent},
        {path: 'component', component: ComponentDirectiveComponent},
      ],
      data: {
        title: 'Directives'
      }
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class DirectiveRouteModule {
}

@NgModule({
  declarations: [
    DirectiveComponent,
    ComponentDirectiveComponent,
    StructuralDirectiveComponent,
    AttributeDirectiveComponent
  ],
  imports: [
    DirectiveRouteModule,
    SharedModule
  ]
})
export class DirectiveModule {
}
