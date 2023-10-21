import {Component, OnDestroy, OnInit} from "@angular/core";
import {SharedService} from "../../common/shared.service";
import {AppService} from "../app.service";
import {tap} from "rxjs/operators";

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
export class MemoryLeakSubscriptionComponent implements OnInit, OnDestroy {

  message: any;

  constructor(
    protected sharedService: SharedService,
    protected appService: AppService
  ) {
  }

  /**
   * Subscribes to SharedService and with pipe operator repost that message to AppService.
   * The subscriptions are live and will continue to live on even the component is destroyed causing ML.
   */
  ngOnInit() {
    this.sharedService.receive()
      .pipe(
        tap(message => this.appService.post(`Message from ${this.constructor?.name}: ${message}`))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    alert(`I (${this.constructor?.name}) am being destroyed but my subscription will live forever...`)
  }

}
