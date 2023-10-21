import {AfterViewInit, Component} from "@angular/core";
import {AbstractLifecycleComponent} from "../abstract-lifecycle.component";

@Component({
  selector: 'app-after-view-init',
  template: `
    <app-person [name]="name" [age]="age" [message]="message">
      <h1 title class="text-center">AfterViewInit <code>(ngAfterViewInit)</code></h1>
      <ul content>
        <li>Called once after 1st <code>ngAfterContentChecked()</code> when <code>ng</code> initializes the component and the children views.</li>
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
