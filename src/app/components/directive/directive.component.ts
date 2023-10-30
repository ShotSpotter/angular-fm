import {Component} from '@angular/core';
import {DirectiveData} from './directive-data';

@Component({
  selector: 'app-directive',
  template: `
      <div class="container-fluid">
          <div class="container">

              <div class="section mb-3" [innerHTML]="directiveData.content"></div>

              <div class="grid-directives mb-5">
                  <mat-card *ngFor="let item of directiveData.items" [routerLink]="item.url" [routerLinkActive]="'active-link'"
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

  directiveData = DirectiveData;

}
