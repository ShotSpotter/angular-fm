import {Component, OnDestroy, OnInit} from "@angular/core";

@Component({
  selector: 'app-parent',
  template: `
    <div class="container-fluid">
      <h2 class="text-center my-3">Subscriptions</h2>
      <div class="container">
        <div class="card-grid p-0">
          <app-card-component *ngFor="let item of items" [data]="item"></app-card-component>
        </div>
      </div>
    </div>
  `
})
export class SubscriptionParentComponent implements OnInit, OnDestroy {

  items = [
    {url: '/bad', urlTitle: 'Bad Subscription', icon: 'close'},
    {url: '/good', urlTitle: 'Good Subscription', icon: 'check'},
  ]

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
