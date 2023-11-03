import {Component, OnInit} from '@angular/core';
import {PersonData} from '../../../common/person.component';
import {timer} from 'rxjs';
import {ComponentLifeCycleData} from './component-lifecycle-data';

@Component({
  selector: 'app-component-lifecycle',
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
export class ComponentLifecycleComponent implements OnInit {

  person: PersonData = ComponentLifeCycleData;

  ngOnInit() {
    timer(1000, 1500)
      .subscribe(n => {
        this.person.age = this.person.age + 1;
        this.person.message = `Hello world ${n}`
      })
  }
}
