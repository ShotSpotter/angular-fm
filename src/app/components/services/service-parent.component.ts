import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject, timer} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {SharedService} from "../../common/shared.service";

@Component({
  selector: 'app-parent',
  template: `
    <div class="container-fluid">
      <h2 class="text-center my-3">Services (Dependency Injection - DI) </h2>
      <div class="container">
        <p>
          <img [src]="'https://miro.medium.com/v2/resize:fit:1155/1*egFAOdlpUBQPzyl1jb7p7A.png'" alt=""/>
        </p>
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
  providers: [SharedService]
})
export class ServiceParentComponent implements OnInit, OnDestroy {

  private _destroy$ = new Subject();

  constructor(
    private SharedService: SharedService
  ) {
  }

  ngOnInit(): void {
    timer(0, 1000)
      .pipe(takeUntil(this._destroy$))
      .subscribe(count => {
        this.SharedService.post(`${count}`);
      })
  }

  ngOnDestroy() {
    this._destroy$?.unsubscribe();
  }

}
