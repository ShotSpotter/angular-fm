import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {SharedService} from '../../common/shared.service';
import {SubscriptionData} from './subscription-data';
import {ComponentData} from '../component/components/component-data';

@Component({
  selector: 'app-subscription',
  template: `
      <div class="container-fluid">
          <div class="container">
              <div class="section" [innerHTML]="subscriptionData.content"></div>
              <div class="grid-subscriptions my-5">
                  <mat-card *ngFor="let item of subscriptionData.items" [routerLink]="item.url" [routerLinkActive]="'active'"
                            class="cursor-pointer">
                      <mat-card-title class="text-center">{{item.title}}</mat-card-title>
                      <mat-card-content class="text-center">
                          <div class="text-center">
                              <mat-icon class="card-icon" [color]="item.color">{{item.icon}}</mat-icon>
                          </div>
                          <pre>
                            <div class="code-block" [innerHTML]="item.code"></div>
                          </pre>
                      </mat-card-content>
                  </mat-card>
              </div>
              <router-outlet></router-outlet>
              <div class="my-5 section text-center" *ngIf="message">
                  <code>{{message}}</code>
              </div>
              <div class="text-center">
                  <a [routerLink]="'/subscriptions'">Subscriptions Home</a>
              </div>
          </div>
      </div>
  `,
  styles: [`
    .mat-card.active {
      box-shadow: 0 0 20px -5px rgb(0 10 149), 0 1px 1px 0 rgb(65 64 153 / 0%), 0 1px 3px 0px rgb(54 82 128 / 0%);
    }
  `],
  providers: [SharedService]
})
export class SubscriptionComponent implements OnInit, OnDestroy {

  private _destroy$ = new Subject();
  subscriptionData = SubscriptionData;
  message: any = '';

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

  protected readonly ComponentData = ComponentData;
}
