import {Component, OnChanges, SimpleChanges} from "@angular/core";
import {AbstractLifecycleComponent} from "./abstract-lifecycle.component";

@Component({
  selector: 'app-on-change',
  template: `
    <app-person [name]="name" [age]="age" [message]="message">
      <h1 title class="text-center">OnChanges <code>(ngOnChange)</code></h1>
      <ul content>
        <li>Called when <code>ng</code> sets or resets data-bound input <code>(@Input)</code> properties.</li>
        <li>Based on reference check. If the reference hasn’t changed, it won’t get triggered.</li>
      </ul>
    </app-person>
  `,
})
export class OnChangeComponent extends AbstractLifecycleComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges) {
    if (changes.person?.currentValue) {
      this.name = changes.person.currentValue.name;
      this.age = changes.person.currentValue.age;
      this.message = changes.person.currentValue.message;
    }
  }

}
