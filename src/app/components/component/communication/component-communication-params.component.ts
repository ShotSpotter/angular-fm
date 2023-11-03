import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AutoUnsubscribeComponent} from '../../../common/auto-unsubscribe.component';
import {takeUntil} from 'rxjs/operators';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-component-communication-params',
  template: `
    <div class="container-fluid background-color">
      <div class="container">
        <div class="row">
          <app-card-component class="col-12 col-md-6 gap-1" [data]="{css: 'shadow-none'}">
            <h3 title><code>Path Parameters</code></h3>
            <div>{{path}}</div>
          </app-card-component>
          <app-card-component class="col-12 col-md-6 gap-1" [data]="{css: 'shadow-none'}">
            <h3 title><code>Query Parameters</code></h3>
            <div>{{query}}</div>
          </app-card-component>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../component.component.scss']
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
