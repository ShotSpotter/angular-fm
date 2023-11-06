import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardData} from '../app/common/components/card.component';
import {ActivatedRoute, Router} from '@angular/router';
import {map, takeUntil} from 'rxjs/operators';
import {AutoUnsubscribe} from '../app/common/components/auto-unsubscribe';
import {Subject} from 'rxjs';
import {currentRoute} from '../app/common/utils';
import {ROUTING_PLATFORM_LIST} from './platorm-data';

@AutoUnsubscribe
@Component({
  selector: 'app-platform',
  template: `
    <div class="container-fluid">
      <div class="grid-route-platform p-md-4 background-color">
        <div class="d-flex align-items-center">
          <img src="../assets/img/safety-smart.svg" alt="SS" class="img"/>
        </div>
        <div class="">
          <div class="intro mt-3">
            <h3 class="header">Introducing the SafetySmart™ Platform</h3>
            <p class="content">The SafetySmart Platform brings together four specialized software solutions
              and objective data to help law enforcement and civic
              leadership better protect their communities by ensuring the right resources are provided when
              and where they’re needed most.</p>
          </div>
        </div>
      </div>
      <div class="mt-4 platforms-container" [class.expanded]="childViewOpen">
        <div class="platforms">
          <app-card-component *ngFor="let product of products"
                              [data]="product"
                              class="cursor-pointer h-auto"
                              [routerLinkActive]="'/' +product.id"
                              (click)="onProductSelect(product)">
          </app-card-component>
        </div>
        <div class="platforms-detail">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['platform.component.scss']
})
export class PlatformComponent implements OnInit, OnDestroy {

  childViewOpen: boolean = false;
  private destroy$ = new Subject();
  products: CardData[] = ROUTING_PLATFORM_LIST;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    currentRoute(this.router, this.route)
      .pipe(
        map(v => this.router.url.includes('platforms/')),
        takeUntil(this.destroy$)
      )
      .subscribe(v => this.childViewOpen = v);
  }

  ngOnInit(): void {

  }

  onProductSelect(product: CardData) {
    this.router.navigate([product.id], {relativeTo: this.route})
  }

  ngOnDestroy(): void {
  }
}
