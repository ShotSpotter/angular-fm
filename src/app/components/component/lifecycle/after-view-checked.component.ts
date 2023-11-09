import {AfterViewChecked, Component} from "@angular/core";
import {AbstractLifecycleComponent} from "./abstract-lifecycle.component";

@Component({
  selector: 'app-after-view-checked',
  template: `
    <app-person [name]="name" [age]="age" [message]="message">
      <h1 title class="text-center">AfterViewChecked <code>(ngAfterViewChecked)</code></h1>
      <ul content>
        <li>Called immediately after <code>ngAfterViewInit()</code> and every subsequent <code>ngAfterContentChecked()</code> when <code>ng</code> checks the component and child views.</li>
      </ul>
    </app-person>
  `
})
export class AfterViewCheckedComponent extends AbstractLifecycleComponent implements AfterViewChecked {

  ngAfterViewChecked(): void {
    super.setProps();
    // Can detect changes but Change detection throws ExpressionChangedAfterItHasBeenCheckedError.
    this.cdr.detectChanges();
  }

}
