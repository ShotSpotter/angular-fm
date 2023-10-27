import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container-fluid">
      <div class="container">
        <div class="grid-home">
          <app-block-component class="item" icon="terminal" iconColor="primary" text="<b><code>Angular</code></b> is an open-source JS framework based on <code>Typescript</code> & <code>RxJs</code> (Reactive JavaScript) used for building <code>SPAs</code> (Single Page Applications)"></app-block-component>
          <app-block-component class="item" icon="swap_horiz" iconColor="primary" text="<b>Data Binding</b>: Uses 2way data binding between the model and UI elements"></app-block-component>
          <app-block-component class="item" icon="input" iconColor="primary" text="<b>Dependency Injection</b>: Angular provides the dependencies that the application components, directives or modules"></app-block-component>
          <app-block-component class="item" icon="list_alt" iconColor="primary" text="<b>Advanced forms</b>: Provides Reactive Forms and Model Driven forms"></app-block-component>
          <app-block-component class="item" icon="alt_route" iconColor="primary" text="<b>Routing</b>: Great routing features to navigate between pages"></app-block-component>
          <app-block-component class="item" icon="view_comfy_alt" iconColor="primary" text="<b>Modular</b>: Provides modularity where components can be modularized and reused in different parts of the application."></app-block-component>
          <app-block-component class="item" icon="data_object" iconColor="primary" text="<b>OOP concepts & Types</b>: Angular is based on Typescript which supports OOP concepts like Inheritance, Interfaces/Polymorphism. Typescript is also strongly typed that helps to find issues/bugs while in development"></app-block-component>
          <app-block-component class="item" icon="forum" iconColor="primary" text="Maintained by Google and has huge community support"></app-block-component>
        </div>

        <div class="row">
          <button mat-raised-button color="primary" [routerLink]="'features'" class="col-12 mt-5">
            <mat-icon>select_all</mat-icon>
            Start
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['home.component.scss']
})
export class HomeComponent {

}
