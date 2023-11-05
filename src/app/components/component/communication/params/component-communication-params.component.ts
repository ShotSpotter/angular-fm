import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AutoUnsubscribeComponent} from '../../../../common/auto-unsubscribe.component';
import {takeUntil} from 'rxjs/operators';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-component-communication-params',
  template: `
      <div class="container-fluid background-color">
          <div class="container">
              <app-card-component class="gap-1" [data]="{css: 'shadow-none'}">
                  <div class="d-flex flex-wrap">
                      <div class="col-md-6"><b title class="fs-5 text-accent">Path Parameters:</b><span class="ms-2 fs-6 text-muted">{{path}}</span></div>
                      <div class="col-md-6"><b title class="fs-5 text-accent">Query Parameters:</b><span class="ms-2 fs-6 text-muted">{{query}}</span></div>
                  </div>
              </app-card-component>
          </div>
      </div>
  `,
  styleUrls: ['../../component.component.scss']
})
export class ComponentCommunicationParamsComponent extends AutoUnsubscribeComponent {

  query: any;
  path: any;


  constructor(
    private route: ActivatedRoute
  ) {
    super();

    combineLatest([
      this.route.params,
      this.route.queryParams
    ])
      .pipe(takeUntil(this._destroy$))
      .subscribe(data => {
        this.path = data[0].name;
        this.query = data[1].name;
      })
  }


}
