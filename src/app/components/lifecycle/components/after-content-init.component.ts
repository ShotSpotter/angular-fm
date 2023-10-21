import {AfterContentInit, Component} from "@angular/core";
import {AbstractLifecycleComponent} from "../abstract-lifecycle.component";

@Component({
  selector: 'app-after-content-init',
  template: `
    <app-person [name]="name" [age]="age" [message]="message">
      <h1 title="" class="text-center">AfterContentInit <code>(ngAfterContentInit)</code></h1>
      <ul content>
        <li>Called once after 1st <code>ngDoCheck()</code> when ng projects external content into components view.</li>
      </ul>
    </app-person>
  `
})
export class AfterContentInitComponent extends AbstractLifecycleComponent implements AfterContentInit {

  ngAfterContentInit(): void {
    super.setProps();
  }

}
