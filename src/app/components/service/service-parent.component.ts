import {Component, OnDestroy, OnInit} from "@angular/core";
import {ComponentService} from "./shared-component.service";
import {Subject, timer} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-parent',
  template: `
    <div class="container-fluid">
      <h2 class="text-center my-3">Services</h2>
      <div class="container">
        <p class="paragraph">
          First & Second Child components composed in Parent Component <code>(ServiceParentComponent)</code>. Parent provides <code>ComponentService</code>.
          First Child doesnt provide however gets the service injected because of the Injection hierarchy.
          Second Child, however, provides it's own <code>ComponentService</code>.
          ParentComponent uses <code>RxJS</code> timer to emit values every 5 seconds. Since, the Parent and Fist child share the same service, first child
          gets emitted value. However, as a separate instance is created in case of 2nd child, the value emitted from parent is not passed to 2nd child.
        </p>
        <app-service-first-child></app-service-first-child>
        <app-service-second-child></app-service-second-child>
      </div>
    </div>

  `,
  providers: [ComponentService]
})
export class ServiceParentComponent implements OnInit, OnDestroy {

  private _destroy$ = new Subject();

  constructor(
    private sharedComponentService: ComponentService
  ) {
  }

  ngOnInit(): void {
    timer(0, 1000)
      .pipe(takeUntil(this._destroy$))
      .subscribe(count => {
        this.sharedComponentService.push(`${count}`);
      })
  }

  ngOnDestroy() {
    this._destroy$?.unsubscribe();
  }

}
