import {Component} from "@angular/core";
import {takeUntil, tap} from "rxjs/operators";
import {MemoryLeakSubscriptionComponent} from "./memory-leak-subscription.component";
import {Subject} from "rxjs";

@Component({
  selector: 'app-memory-leak-subscription',
  template: `
    <div class="container-fluid">
      <div class="container">
        <p>Message from subscription: {{message}}</p>
      </div>
    </div>
  `
})
export class NoMemoryLeakSubscriptionComponent extends MemoryLeakSubscriptionComponent {

  private _destroy$ = new Subject();

  ngOnInit() {
    this.sharedService.receive()
      .pipe(
        tap(message => this.appService.post(`Message from ${this.constructor?.name}: ${message}`)),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    alert(`I (${this.constructor?.name}) am being destroyed and my subscriptions will be destroyed as well...`)
  }

}
