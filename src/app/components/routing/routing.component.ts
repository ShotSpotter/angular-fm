import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-route',
  template: `
    <div class="container-fluid">
      <h2 class="text-center my-3">Route</h2>
      <div class="container">

        <div class="paragraph">
          Angular comes with best in market routing features which allows users to navigate between different views/pages without having to load a page from the server.
          Angular routing dynamically updates the content in the browser by loading the necessary components based on the given route.
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
  `
})
export class RoutingComponent implements OnInit {

  ngOnInit(): void {

  }

  routerModule = `
    import { RouterModule } from '@angular/router';

    @NgModule({
      imports: [
      ...
        RouterModule.forRoot([
          { path: 'foo', component: FooComponent },
          { path: 'bar', component: BarComponent },
        ])
      ],
    })
  `

}
