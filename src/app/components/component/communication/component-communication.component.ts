import {Component} from '@angular/core';
import {ComponentCommunicationData, ComponentCommunicationTechniques} from './component-communication-data';
import {CardData} from '../../../common/components/card.component';
import {ActivatedRoute, Router} from '@angular/router';
import {AutoUnsubscribeComponent} from '../../../common/components/auto-unsubscribe.component';
import {SharedService} from "../../../common/services/shared.service";

@Component({
  selector: 'app-component-communication',
  template: `
    <div class="container-fluid">
      <div class="container">
        <section class="section background-color mb-2">
          <p [innerHTML]="data.content" class="m-0"></p>
        </section>

        <div class="grid-component-communication">
          <ng-container *ngFor="let technique of communicationTechniques">
            <app-card-component (click)="goto(technique)" class="cursor-pointer">
              <ng-container>
                <div class="row flex-wrap align-items-center h-100">
                  <div class="icon-img-div w-100 text-center align-self-end">
                    <mat-icon class="card-icon" color="accent">{{technique?.icon}}</mat-icon>
                  </div>
                  <div class="w-100 px-2 text-center align-self-start">
                    <h5 class="text-primary">{{technique?.content}}</h5>
                  </div>
                </div>
              </ng-container>
            </app-card-component>
          </ng-container>
        </div>

        <div class="w-100 mt-3">
          <div *ngIf="technique?.url == 'params'" class="w-100 mb-3 section background-color">
            <div class="d-flex mt-5 gap-md-5 flex-wrap flex-md-nowrap">
              <mat-form-field class="col-12 col-md-4">
                <mat-label>Path Parameter</mat-label>
                <input type="text" matInput placeholder="" [(ngModel)]="path" name="path">
              </mat-form-field>
              <mat-form-field class="col-12 col-md-4">
                <mat-label>Query Parameter</mat-label>
                <input type="text" matInput placeholder="" [(ngModel)]="query" name="query">
              </mat-form-field>
              <button mat-flat-button (click)="navigateToParams(path, query)" class="flex-md-grow-0 action-button" color="primary">
                Update Params
              </button>
            </div>
          </div>
          <div *ngIf="technique?.url == 'services'" class="w-100 mb-3 section background-color">
            <div class="d-flex mt-5 gap-md-5 flex-wrap flex-md-nowrap">
              <mat-form-field class="col-12 col-md-4">
                <mat-label>Message</mat-label>
                <input type="text" matInput placeholder="" [(ngModel)]="serviceMsg" name="path">
              </mat-form-field>
              <button mat-flat-button (click)="postServiceMessage()" class="flex-md-grow-0 action-button" color="primary">
                Send Message
              </button>
            </div>
          </div>
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../component.component.scss'],
  providers: [SharedService]
})
export class ComponentCommunicationComponent extends AutoUnsubscribeComponent {

  readonly data = ComponentCommunicationData;
  readonly communicationTechniques = ComponentCommunicationTechniques;

  technique?: CardData;
  query: string = 'Hello-Query';
  path: string = 'Hello-Path';
  serviceMsg: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {
    super();
    const matches = this.communicationTechniques
      .filter(t => this.router.url.includes(t.url || ''));
    if (matches && matches.length > 0) {
      this.technique = matches[0];
    }
  }

  goto(technique: CardData) {
    this.technique = technique;
    if (technique.url == 'params') {
      this.navigateToParams(this.path, this.query);
    } else {
      this.router.navigate([technique.url], {relativeTo: this.route});
    }
  }

  navigateToParams(path: string, query: string) {
    this.router.navigate([`params/${[path]}`], {relativeTo: this.route, queryParams: {name: query}});
  }

  postServiceMessage() {
    this.sharedService.post(this.serviceMsg);
  }
}
