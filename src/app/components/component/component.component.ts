import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";

@Component({
  selector: 'app-lifecycle',
  template: `
      <div class="container-fluid">
          <div class="container">

              <section class="section background-color mb-2">
                  <p><b class="fs-4 ls-2">Components</b> are the main building blocks for Angular applications.
                      It contains the data and provides user interaction logics. It bridges the view and the model.
                      Usually, components are small and has single responsibility. E.g. display user list, display user details.
                      Basically, a component is a Typescript class that is decorated with
                      <code>@Component</code>
                      and metadata about the component about the component such as
                      <code>selector</code>,
                      <code>template/templateUrls</code>,
                      <code>styles/styleUrls</code>,
                      <code>providers(Dependencies)</code> etc.
                  </p>
                  <div class="text-center pt-3">
                    <pre>
                      <div class="code-block" [innerHTML]="componentCodeBlock"></div>
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

  person: { name: string, age: number, message?: string } = {name: 'John Smith', age: 10, message: 'Hello World'}

  ngOnInit() {
    timer(1000, 1500)
      .subscribe(n => {
        this.person.age = this.person.age + 1;
        this.person.message = `Hello world ${n}`
      })
  }

  componentCodeBlock = `
    @Component({
        selector: 'app-user', <span class="code-highlight">A unique selector</span>
        templateUrl: './user.component.html', <span class="code-highlight">(or can use inline template with template: '...')</span>
        styleUrls: ['./user.component.scss'], <span class="code-highlight">(or can use inline styling with styles: ['...'])</span>
        providers: [UserService] <span class="code-highlight">Declaration of dependencies the component has that <b>Angular</b> needs to inject</span>
    })
    export class UserComponent {

      constructor(
        private userService: UserService // <span class="code-highlight">As you declared the dependency in the component metadata, Angular takes the responsibility of injecting the service to the component's constructor</span>
      ) {

      }
    }
  `
}
