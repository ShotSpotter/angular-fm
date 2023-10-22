import {Component, OnInit} from "@angular/core";
import {AbstractLifecycleComponent} from "../abstract-lifecycle.component";

@Component({
  selector: 'app-on-init',
  template: `
    <app-person [name]="name" [age]="age" [message]="message">
      <h1 title class="text-center">OnInit <code>(ngOnInit)</code></h1>
      <ul content>
        <li>Called only once when <code>ng</code> initializes the directive or component after first <code>ngOnChanges()</code>.</li>
        <li>Used for initializing the component such as API calls etc.</li>
      </ul>
    </app-person>
  `
})
export class OnInitComponent extends AbstractLifecycleComponent implements OnInit {

  ngOnInit() {
    super.setProps();
  }

}
