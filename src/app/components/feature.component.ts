import {Component} from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container-fluid">
      <h2 class="text-center my-3">Features</h2>
      <div class="container">
        <div class="grid-features p-0">
          <mat-card *ngFor="let item of items">
            <mat-card-content>
              <div class="row align-items-center justify-content-center align-self-stretch">
                <mat-icon class="card-icon">{{item.icon}}</mat-icon>
              </div>
              <div class="row">
                <button mat-raised-button color="primary" [routerLink]="item.url">{{item.title}}</button>
              </div>
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
    {url: '/subscriptions', title: 'Subscriptions', icon: 'card_membership'},
    {url: '/services', title: 'Services', icon: 'lan'},
  ]

}
