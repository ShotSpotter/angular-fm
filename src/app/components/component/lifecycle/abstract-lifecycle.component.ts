import {ChangeDetectorRef, Component, Input} from "@angular/core";
import {PersonData} from '../../../common/person.component';

@Component({
  template: ''
})
export abstract class AbstractLifecycleComponent {

  @Input() person: PersonData = {} as any;
  name!: string;
  age!: number
  message!: string;

  constructor(protected cdr: ChangeDetectorRef) {
  }

  setProps() {
    this.name = this.person.name;
    this.age = this.person.age;
    this.message = this.person.message || '';
  }

}
