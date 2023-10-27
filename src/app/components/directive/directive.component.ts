import {Component} from "@angular/core";
import {SubscriptionData} from "../subscriptions/subscriptionData";

@Component({
  selector: 'app-directive',
  template: `
    <div class="container-fluid">
      <div class="container">

        <div class="paragraph mb-3">
          Directives are classes that add additional behavior to elements in your Angular applications.
        </div>

        <div class="grid-directives mb-5">
          <mat-card *ngFor="let item of items" [routerLink]="item.url" [routerLinkActive]="'active-link'"
                    class="cursor-pointer shadow-lite">
            <mat-card-title class="text-center">{{item.title}}</mat-card-title>
            <mat-card-content class="text-center">
              <mat-icon class="card-icon" [color]="item.color">{{item.icon}}</mat-icon>
            </mat-card-content>
          </mat-card>
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class DirectiveComponent {

  items: SubscriptionData[] = [
    {url: 'structural', title: 'Structural Directive', icon: 'account_tree', color: 'primary'},
    {url: 'attribute', title: 'Attribute Directive', icon: 'edit_attributes', color: 'primary'},
    {url: 'component', title: 'Component Directive', icon: 'grid_view', color: 'primary'},
  ]

}
