import {Component} from "@angular/core";
import {takeUntil} from "rxjs/operators";
import {AbstractSubscriptionComponent} from "./abstract-subscription.component";

@Component({
  selector: 'app-memory-leak-subscription',
  template: `
    <div class="w-100">
      <h2 class="text-center">NoMemoryLeakSubscriptionComponent</h2>
      <p class="text-center">I am a good component cause I don't leak memories...</p>
    </div>
  `
})
export class NoMemoryLeakSubscriptionComponent extends AbstractSubscriptionComponent {

  ngOnInit() {
    this.appService.currentDateTime()
      .pipe(takeUntil(this._destroy$))
      .subscribe(message => {
        this.sharedService.post(`NoMemoryLeakSubscriptionComponent (Active): ${message}`)
      });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.sharedService.post(`NoMemoryLeakSubscriptionComponent (Inactive): I am destroyed and won't send any messages. ${new Date().toLocaleString()}`)
  }

}
