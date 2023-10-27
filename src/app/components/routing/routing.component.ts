import {Component, OnInit} from "@angular/core";
import {CardData} from "../../common/card.component";

@Component({
  selector: 'app-route',
  template: `
      <div class="container-fluid">
          <div class="container">
              <div class="paragraph">
                  Angular comes with best in market routing features which allows users to navigate between different
                  views/pages without having to load a page from the server.
                  Angular routing dynamically updates the content in the browser by loading the necessary components
                  based on the given route.

                  <div class="grid-route-features">
                      <app-card-component *ngFor="let feature of features" [data]="feature"></app-card-component>
                  </div>
              </div>
              <div class="code text-center mb-3">
                  <pre>
                      <code class="d-inline-flex text-start">
                       {{routerModule}}
                      </code>
                  </pre>
              </div>
              <router-outlet></router-outlet>
          </div>
      </div>
  `,
  styleUrls: ['routing.component.scss']
})
export class RoutingComponent implements OnInit {

  features: CardData[] = [
    {icon: 'compare_arrows', content: 'Provides seamless routing between components/views', iconColor: 'primary'},
    {icon: 'switch_access_shortcut', content: 'Supports URL path/query parameters that can be added and retrieved between components', iconColor: 'primary'},
    {icon: 'verified_user', content: 'Provides route guards to keep views/components from being unauthorized accessed', iconColor: 'primary'}
  ]

  ngOnInit(): void {

  }

  routerModule = `
    import { RouterModule } from '@angular/router';

    @NgModule({
      imports: [
      ...
        RouterModule.forRoot([
          { path: 'foo', component: FooComponent }, // Eagerly loaded
          { path: 'bar', loadChildren: () => import('./bar/bar.module').then(m => m.BarModule) } // Lazily loaded
        ])
      ],
    })
    export class RouteModule {}
  `

}
