import {Component} from '@angular/core';
import {FeatureData} from './feature-data';

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

  items = FeatureData;

}
