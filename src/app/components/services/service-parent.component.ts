import {Component, OnDestroy, OnInit} from "@angular/core";
import {ComponentService} from "./shared-component.service";
import {Subject, timer} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-parent',
  template: `
    <div class="container-fluid">
      <h2 class="text-center my-3">Services (Dependency Injection - DI) </h2>
      <div class="container">
        <p class="paragraph">
          <b>First</b> & <b>Second</b> components are composed in <b>Parent</b> Component <code>(ServiceParentComponent)</code>. <b>Parent</b> provides <code>ComponentService</code>.
          <b>First</b> Child doesnt provide however gets the service injected because of the Injection hierarchy.
          <b>Second</b> Child, however, provides it's own <code>ComponentService</code>.
          <b>Parent</b> uses <code>RxJS</code> timer to emit values every 5 seconds. Since, the <b>Parent</b> and Fist child share the same service, first child
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
