import {Component} from "@angular/core";
import {FORMS_DATA} from "./forms-data";

@Component({
  selector: 'app-forms',
  template: `
    <div class="container-fluid">
      <div class="container">

        <div class="section mb-3" [innerHTML]="formsData.content"></div>

        <div class="grid-forms mb-5">
          <mat-card *ngFor="let item of formsData.items" [routerLink]="item.url" [routerLinkActive]="'active-link'"
                    class="cursor-pointer shadow-lite">
            <mat-card-title class="text-center">{{item.title}}</mat-card-title>
            <mat-card-content class="text-center">
              <mat-icon class="card-icon" [color]="item.color">{{item.icon}}</mat-icon>
            </mat-card-content>
            <div>
              <div class="w-auto m-auto">
                <div class="text-center background-color-primary-lite-x p-2 mb-1 text-muted" *ngFor="let itemContent of item.content">{{itemContent}}</div>
              </div>
            </div>
          </mat-card>
        </div>

        <div class="mt-3 background-color">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})
export class FormsComponent {

  formsData = FORMS_DATA;

}
