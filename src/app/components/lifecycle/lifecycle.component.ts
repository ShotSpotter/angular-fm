import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";

@Component({
  selector: 'app-lifecycle',
  template: `
    <div class="container-fluid">
      <div class="container">
        <div class="grid-lifecycle">
          <app-on-change [person]="person"></app-on-change>
          <app-on-init [person]="person"></app-on-init>
          <app-do-check [person]="person"></app-do-check>
          <app-after-content-init [person]="person"></app-after-content-init>
          <app-after-content-checked [person]="person"></app-after-content-checked>
          <app-after-view-init [person]="person"></app-after-view-init>
          <app-after-view-checked [person]="person"></app-after-view-checked>
        </div>
      </div>
    </div>
  `
})
export class LifecycleComponent implements OnInit {

  person: { name: string, age: number, message?: string } = {name: 'John Smith', age: 10, message: 'Hello World'}

  ngOnInit() {
    timer(1000, 1500)
      .subscribe(n => {
        this.person.age = this.person.age + 1;
        this.person.message = `Hello world ${n}`
      })
  }
}
