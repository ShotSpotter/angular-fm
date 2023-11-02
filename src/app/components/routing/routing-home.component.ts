import {Component} from '@angular/core';
import {CardData} from '../../common/card.component';
import {ROUTING_FEATURE_DATA} from './routing-feature-data';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-routing-home',
  template: `
    <div class="container-fluid">
      <div class="container">
        <div class="section">
          Angular comes with best in market routing features which allows users to navigate between different
          views/pages without having to load a page from the server.
          Angular routing dynamically updates the content in the browser by loading the necessary components
          based on the given route.

          <div class="grid-route-features">
            <app-card-component *ngFor="let feature of features" [data]="feature"></app-card-component>
          </div>
        </div>
        <div class="mb-3">
                  <pre>
                      <div class="code-block" [innerHTML]="routerModule"></div>
                  </pre>
        </div>
        <div class="text-center">
          <button mat-flat-button class="p-2" routerLink="platforms" color="primary" (click)="next()">
            <mat-icon>start</mat-icon>
            <span>Continue</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['routing-home.component.scss']
})
export class RoutingHomeComponent {

  features: CardData[] = ROUTING_FEATURE_DATA;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  next() {
    this.router.navigate(['users'], {relativeTo: this.route});
  }

  routerModule = `
    import { RouterModule } from '@angular/router';

    @NgModule({
      imports: [
      ...
        RouterModule.forRoot([
          { <b>path</b>: 'foo', <b>component</b>: FooComponent, <b>canActivate</b>: [CanActivateFoo], <b>data: {context: 'foo'</b>} }, // Eagerly loaded
          { <b>path</b>: 'bar', <b>loadChildren</b>: () => import('./bar/bar.module').then(m => m.BarModule, <b>canLoad</b>: [CanLoadBar]) } // Lazily loaded
        ])
      ],
    })
    export class RouteModule {}
  `
}
