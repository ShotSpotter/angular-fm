import {Component} from '@angular/core';

@Component({
  selector: 'app-feature',
  template: `
    <div class="container-fluid">
      <div class="container">
        <div class="grid-features p-0">

          <mat-card *ngFor="let item of items" [routerLink]="item.url" [routerLinkActive]="item.url" class="cursor-pointer">
            <mat-card-title class="text-center">{{item.title}}</mat-card-title>
            <mat-card-content class="text-center">
              <mat-icon class="card-icon" color="primary">{{item.icon}}</mat-icon>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `
})
export class FeatureComponent {

  items = [
    {url: '/lifecycle', title: 'Component Lifecycle', icon: 'recycling'},
    {url: '/services', title: 'DI & Services', icon: 'lan'},
    {url: '/directives', title: 'Directives', icon: 'settings_applications'},
    {url: '/routing', title: 'Routing', icon: 'route'},
    {url: '/subscriptions', title: 'RxJS Subscriptions', icon: 'card_membership'}
  ]

}
