import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {SharedService} from "../../common/shared.service";

@Component({
  selector: 'app-service-second-child',
  template: `
    <div class="container-fluid">
      <div class="container">
        <div class="paragraph">
          <h1><code>Second Child</code></h1>
          <p>I am the Second child component of my parent and I do not share the same <b>service</b> that my parent declared. I declared and I will get a different service instance injected.</p>
          <label class="fw-bold">Messaged Received from Parent: <code>{{data}}</code></label>
        </div>
      </div>
    </div>
  `,
  providers: [SharedService]
})
export class ServiceSecondChildComponent implements OnInit, OnDestroy {

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
