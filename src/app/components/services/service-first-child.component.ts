import {Component, OnDestroy, OnInit} from "@angular/core";
import {ComponentService} from "./shared-component.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-service-first-child',
  template: `
    <div class="container-fluid">
      <div class="container">
        <app-block-component class="col-12 col-md-6" title="First Child" [text]="data"></app-block-component>
      </div>
    </div>
  `,
})
export class ServiceFirstChildComponent implements OnInit, OnDestroy {

  private _destroy$ = new Subject();
  data: any;

  constructor(
    private sharedComponentService: ComponentService
  ) {
  }

  ngOnInit(): void {
    this.sharedComponentService.pull()
      .pipe(takeUntil(this._destroy$))
      .subscribe(data => this.data = data);
  }

  ngOnDestroy() {
    this._destroy$?.unsubscribe();
  }

}
