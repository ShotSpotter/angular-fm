import {Component} from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container-fluid">
      <h2 class="text-center my-3">Features</h2>
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
    {url: '/lifecycle', title: 'Lifecycle', icon: 'recycling'},
    {url: '/services', title: 'Services', icon: 'lan'},
    {url: '/directives', title: 'Directives', icon: 'settings_applications'},
    {url: '/subscriptions', title: 'Subscriptions', icon: 'card_membership'}
  ]

}
