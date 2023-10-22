import {Component} from "@angular/core";
import {AbstractSubscriptionComponent} from "./abstract-subscription.component";

@Component({
  selector: 'app-memory-leak-subscription',
  template: `
    <div class="w-100">
      <h2 class="text-center">MemoryLeakSubscriptionComponent</h2>
      <p class="text-center">I am a bad component cause I leak memories...</p>
    </div>
  `
})
export class MemoryLeakSubscriptionComponent extends AbstractSubscriptionComponent {

  text: string = 'MemoryLeakSubscriptionComponent (Active): '

  ngOnInit() {
    this.appService.currentDateTime()
      .subscribe(message => this.sharedService.post(`${this.text} ${message}`));
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.text = 'MemoryLeakSubscriptionComponent (Inactive): I am destroyed but sending you message. Do you know what is going on???'
  }

}
