import {AfterViewInit, Component} from "@angular/core";
import {AbstractLifecycleComponent} from "./abstract-lifecycle.component";

@Component({
  selector: 'app-after-view-init',
  template: `
    <app-person [name]="name" [age]="age" [message]="message">
      <h1 title class="text-center">AfterViewInit <code>(ngAfterViewInit)</code></h1>
      <ul content>
        <li>Called once after 1st <code>ngAfterContentChecked()</code> when <code>ng</code> initializes the component and the children views.</li>
        <li>By the time this lifecycle event is triggered all views, including child views, are initialized. You can reference any child components using <code>@ViewChild</code> or <code>@ViewChildren</code> to pass any data on child component or do any logic.</li>
      </ul>
    </app-person>
  `,
})
export class AfterViewInitComponent extends AbstractLifecycleComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    super.setProps();
    // Can detect changes but Change detection throws ExpressionChangedAfterItHasBeenCheckedError.
    this.cdr.detectChanges();
  }

}
