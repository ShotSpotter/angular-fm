import {AfterContentChecked, Component} from "@angular/core";
import {AbstractLifecycleComponent} from "../abstract-lifecycle.component";

@Component({
  selector: 'app-after-content-checked',
  template: `
    <app-person [name]="name" [age]="age" [message]="message">
      <h1 title="" class="text-center">AfterContentChecked <code>(ngAfterContentChecked)</code></h1>
      <ul content>
        <li>Called right after <code>ngAfterContentInit()</code> and for every subsequent <code>ngDoCheck()</code>.</li>
      </ul>
    </app-person>
  `
})
export class AfterContentCheckedComponent extends AbstractLifecycleComponent implements AfterContentChecked {

  ngAfterContentChecked(): void {
    super.setProps();
  }

}
