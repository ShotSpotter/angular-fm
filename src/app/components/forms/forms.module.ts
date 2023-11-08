import {NgModule} from "@angular/core";
import {SharedModule} from "../../common/shared.module";
import {FormsComponent} from "./forms.component";
import {RouterModule} from "@angular/router";
import {FormsTemplateComponent} from "./forms-template.component";
import {FormsReactiveComponent} from "./forms-reactive.component";


@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '', component: FormsComponent,
      data: {
        title: 'Angular Forms'
      },
      children: [
        {
          path: 'template', component: FormsTemplateComponent,
          data: {
            title: 'Angular Forms - Template Driven'
          }
        }, {
          path: 'reactive', component: FormsReactiveComponent,
          data: {
            title: 'Angular Forms - Reactive'
          }
        }
      ]
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class FormsRouteModule {
}

@NgModule({
  declarations: [
    FormsComponent,
    FormsReactiveComponent,
    FormsTemplateComponent
  ],
  imports: [
    FormsRouteModule,
    SharedModule
  ]
})
export class FormsModule {
}
