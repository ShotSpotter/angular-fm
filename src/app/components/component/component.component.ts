import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";
import {PersonData} from '../../common/person.component';
import {ComponentData} from './components/component-data';

@Component({
  selector: 'app-lifecycle',
  template: `
      <div class="container-fluid">
          <div class="container">

              <section class="section background-color mb-2">
                  <p [innerHTML]="componentData.content"></p>
                  <div class="text-center pt-3">
                    <pre>
                      <div class="code-block" [innerHTML]="componentData.code"></div>
                    </pre>
                  </div>
              </section>

              <h2 class="text-center fw-bolder text-accent">Component Lifecycle</h2>

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
export class ComponentComponent implements OnInit {

  componentData =  ComponentData;
  person: PersonData = this.componentData.person;

  ngOnInit() {
    timer(1000, 1500)
      .subscribe(n => {
        this.person.age = this.person.age + 1;
        this.person.message = `Hello world ${n}`
      })
  }

}
