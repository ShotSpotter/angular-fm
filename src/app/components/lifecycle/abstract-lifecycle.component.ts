import {ChangeDetectorRef, Component, Input} from "@angular/core";

@Component({
  template: ''
})
export abstract class AbstractLifecycleComponent {

  @Input() person: any = {};
  name!: string;
  age!: number
  message!: string;

  constructor(protected cdr: ChangeDetectorRef) {
  }

  setProps() {
    this.name = this.person.name;
    this.age = this.person.age;
    this.message = this.person.message;
  }

}
