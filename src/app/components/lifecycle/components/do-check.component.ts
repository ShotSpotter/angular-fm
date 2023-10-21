import {ChangeDetectorRef, Component, DoCheck, KeyValueDiffers} from "@angular/core";
import {AbstractLifecycleComponent} from "../abstract-lifecycle.component";

@Component({
  selector: 'app-do-check',
  template: `
    <app-person [name]="name" [age]="age" [message]="message">
      <h1 title class="text-center">DoCheck <code>(ngDoCheck)</code></h1>
      <ul content>
        <li>Called immediately after <code>ngOnChanges()</code> on every change detection run, and immediately after <code>ngOnInit()</code> on the first run.</li>
        <li>Used for detect changes that ng can’t/won’t detect. E.g., content in an array.</li>
      </ul>
    </app-person>
  `
})
export class DoCheckComponent extends AbstractLifecycleComponent implements DoCheck {

  private _personDiff: any;

  constructor(
    protected cdr: ChangeDetectorRef,
    private kvDiffers: KeyValueDiffers
  ) {
    super(cdr);
    this._personDiff = this.kvDiffers.find(this.person).create();
  }

  ngDoCheck(): void {
    super.setProps();
    let changes = this._personDiff.diff(this.person);
    if (changes) {
      changes.forEachChangedItem((change: any) => {
        if (change.key == 'age') {
          this.age = change.currentValue
        } else if (change.key == 'message') {
          this.message = change.currentValue
        } else {
          this.name = change.currentValue;
        }
      })
    }
  }

}
