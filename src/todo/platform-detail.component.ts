import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardData} from '../app/common/card.component';
import {ROUTING_FEATURE_DATA} from '../app/components/routing/routing-feature-data';
import {ROUTING_PLATFORM_DETAILS} from './platorm-data';

@Component({
  selector: 'app-platform-detail',
  template: `
    <div class="container-fluid">
      <div class="h-100">
        <div class="grid-route-platform-intro">
          <div class="intro">
            <h3 class="header fs-4">{{selectPlatform.title}}</h3>
            <p class="content fs-7">{{selectPlatform.content}}</p>
          </div>
          <img [src]="selectPlatform.img" alt="SS"/>
        </div>
        <div class="routing-product-intro-stats-grid">
          <mat-card class="col-12 m-2" *ngFor="let stat of selectPlatform.extra?.stats">
            <mat-card-title class="mb-3 text-primary">
              <span>{{stat.title}}</span>
            </mat-card-title>
            <mat-card-content>
              <ul class="w-100 px-2" *ngFor="let name of stat?.names">
                <li class="text-muted">{{name}}</li>
              </ul>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      img {
        height: calc(100vh / 4) !important;
      }
    `
  ],
  styleUrls: ['platform.component.scss']
})
export class PlatformDetailComponent implements OnInit {
  protected readonly platformDetails = ROUTING_PLATFORM_DETAILS;

  selectPlatform: CardData;

  constructor(private route: ActivatedRoute) {
    this.selectPlatform = this.platformDetails[0];
  }

  ngOnInit(): void {

  }

  protected readonly ROUTING_FEATURE_DATA = ROUTING_FEATURE_DATA;
}
