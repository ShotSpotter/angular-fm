import {Component} from '@angular/core';
import {ComponentCommunicationData, ComponentCommunicationTechniques} from './component-communication-data';
import {CardData} from '../../../common/card.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-component-communication',
  template: `
      <div class="container-fluid">
          <div class="container">
              <section class="section background-color mb-2">
                  <p [innerHTML]="data.content"></p>
              </section>

              <div class="grid-component-communication">
                  <ng-container *ngFor="let technique of communicationTechniques">
                      <app-card-component [data]="technique">
                          <ng-container>

                          </ng-container>

                          <ng-container *ngIf="technique.url == 'params'">
                              <div class="row mt-5">
                                  <mat-form-field class="col-12 col-md-4">
                                      <mat-label>Path Parameter</mat-label>
                                      <input type="text" matInput placeholder="" [(ngModel)]="path" name="path">
                                  </mat-form-field>
                                  <mat-form-field class="col-12 col-md-4">
                                      <mat-label>Query Parameter</mat-label>
                                      <input type="text" matInput placeholder="" [(ngModel)]="query" name="query">
                                  </mat-form-field>
                              </div>
                              <div class="row justify-content-center">
                                  <button mat-flat-button (click)="goto(technique)" class="p-2 w-auto flex-md-grow-0" color="primary">
                                      Update
                                  </button>
                              </div>
                          </ng-container>
                      </app-card-component>
                  </ng-container>
              </div>

              <div class="w-100 mt-1">
                  <router-outlet></router-outlet>
              </div>
          </div>
      </div>
  `,
  styleUrls: ['../component.component.scss']
})
export class ComponentCommunicationComponent {

  readonly data = ComponentCommunicationData;
  readonly communicationTechniques = ComponentCommunicationTechniques;

  query: string = 'Hello-Query';
  path: string = 'Hello-Path';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  goto(technique: CardData) {
    if (technique.url == 'params') {
      this.navigateToParams(this.path, this.query);
    } else {
      this.router.navigate([technique.url], {relativeTo: this.route});
    }
  }

  navigateToParams(path: string, query: string) {
    this.router.navigate([`params/${[path]}`], {relativeTo: this.route, queryParams: {name: query}});
  }
}
