import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {SharedService} from '../../common/shared.service';
import {ServiceData, ServiceDataItem} from './service-data';

@Component({
  selector: 'app-service',
  template: `
      <div class="container-fluid">
          <div class="container">
              <div class="section background-color p-md-5">
                  <div class="" [innerHTML]="serviceData.di"></div>
                  <div class="mt-1" *ngFor="let service of serviceDataItem">
                      <h2 class="m-0">{{service.title}}</h2>
                      <label *ngIf="service.content" [innerHTML]="service.content"></label>
                      <pre *ngIf="service.code">
                        <div class="code-block">
                           {{service.code}}
                        </div>
                      </pre>
                  </div>
              </div>

              <app-card-component [data]="{css: 'shadow-lite section'}">
                  <h2 class="text-muted my-2 text-center" title>
                      <span class="">Message Published by Parent: <code>{{count}}</code></span>
                  </h2>
                  <div class="grid-lifecycle">
                      <app-service-first-child></app-service-first-child>
                      <app-service-second-child></app-service-second-child>
                  </div>
              </app-card-component>
          </div>
      </div>
  `,
  providers: [SharedService]
})
export class ServiceComponent implements OnInit, OnDestroy {

  count!: number;
  private _destroy$ = new Subject();
  serviceData = ServiceData;
  serviceDataItem = ServiceDataItem;

  constructor(
    private sharedService: SharedService
  ) {
  }

  ngOnInit(): void {
    timer(0, 1000)
      .pipe(takeUntil(this._destroy$))
      .subscribe(count => {
        this.count = count;
        this.sharedService.post(`${count}`);
      })
  }

  ngOnDestroy() {
    this._destroy$?.unsubscribe();
  }
}
