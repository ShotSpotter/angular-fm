import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {SharedService} from "../../common/shared.service";

@Component({
  selector: 'app-service-first-child',
  template: `
      <div class="container-fluid">
          <div class="container p-0 h-100">
              <app-card-component>
                  <h1><code>First Child</code></h1>
                  <p>I am first child component of my parent and I share the same <b>service</b> that my parent
                      provided. I didn't provide but I will get the service injected.</p>
                  <label class="fw-bold">Messaged Received from Parent: <code>{{data}}</code></label>
              </app-card-component>
          </div>
      </div>
  `,
})
export class ServiceFirstChildComponent implements OnInit, OnDestroy {

  private _destroy$ = new Subject();
  data: any;

  constructor(
    private sharedService: SharedService
  ) {
  }

  ngOnInit(): void {
    this.sharedService.receive()
      .pipe(takeUntil(this._destroy$))
      .subscribe(data => this.data = data);
  }

  ngOnDestroy() {
    this._destroy$?.unsubscribe();
  }

}
