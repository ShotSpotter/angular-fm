import {Component} from '@angular/core';
import {HomeData} from './home-data';

@Component({
  selector: 'app-home',
  template: `
    <div class="container-fluid">
      <div class="container">
        <div class="grid-home">
          <app-block-component *ngFor="let data of homeData"
                               class="item"
                               [icon]="data.icon"
                               [iconColor]="data.iconColor"
                               [text]="data.content">
          </app-block-component>
        </div>

        <div class="row">
          <button mat-raised-button color="primary" [routerLink]="'features'" class="col-12 mt-5">
            <mat-icon>select_all</mat-icon>
            Start
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['home.component.scss']
})
export class HomeComponent {

  homeData = HomeData;
}
