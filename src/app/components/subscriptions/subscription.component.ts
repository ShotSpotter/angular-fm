import {Component, OnDestroy, OnInit} from "@angular/core";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {SharedService} from "../../common/shared.service";
import {SubscriptionData} from "./subscriptionData";

@Component({
  selector: 'app-subscription',
  template: `
    <div class="container-fluid">
      <div class="container">
        <div class="grid-subscriptions mb-5">
          <mat-card *ngFor="let item of items" [routerLink]="item.url" [routerLinkActive]="'active-link'" class="cursor-pointer">
            <mat-card-title class="text-center">{{item.title}}</mat-card-title>
            <mat-card-content class="text-center">
              <mat-icon class="card-icon" [color]="item.color">{{item.icon}}</mat-icon>
            </mat-card-content>
          </mat-card>
        </div>
        <router-outlet></router-outlet>
        <div class="my-5 paragraph text-center" *ngIf="message">
          <code>{{message}}</code>
        </div>
        <div class="text-center">
          <a [routerLink]="'/subscriptions'">Subscriptions Home</a>
        </div>
      </div>
    </div>
  `,
  providers: [SharedService]
})
export class SubscriptionComponent implements OnInit, OnDestroy {

  private _destroy$ = new Subject();
  message: any = '';

  items: SubscriptionData[] = [
    {url: 'bad', title: 'Bad Subscription', icon: 'close', color: 'warn'},
    {url: 'good', title: 'Good Subscription', icon: 'check', color: 'primary'},
  ]

  constructor(
    private sharedService: SharedService,
  ) {
  }

  ngOnInit(): void {
    this.sharedService.receive()
      .pipe(takeUntil(this._destroy$))
      .subscribe(msg => this.message = msg);
  }

  ngOnDestroy(): void {
    this._destroy$?.unsubscribe();
  }
}
