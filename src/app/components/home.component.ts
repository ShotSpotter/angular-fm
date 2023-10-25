import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container-fluid">
      <h2 class="text-center my-3">Angular</h2>
      <div class="container">
        <div class="row">
          <app-block-component
            text="<b><code>Angular</code></b> is an open-source JS framework based on <code>Typescript</code> & <code>RxJs</code> (Reactive JavaScript) used for building <code>SPAs</code> (Single Page Applications)"></app-block-component>
          <app-block-component text="<b>Data Binding</b>: Uses 2way data binding between the model and UI elements"></app-block-component>
          <app-block-component text="<b>Dependency Injection</b>: Angular provides the dependencies that the application components, directives or modules"></app-block-component>
          <app-block-component text="<b>Advanced forms</b>: Provides Reactive Forms and Model Driven forms"></app-block-component>
          <app-block-component text="<b>Routing</b>: Great routing features to navigate between pages"></app-block-component>
          <app-block-component text="<b>Modular</b>: Provides modularity and resuability"></app-block-component>
          <app-block-component text="<b>Types & OOP concepts</b>: Strongly typed language that are maintainable. Also, has concepts of OOP like interfaces, inheritance"></app-block-component>
          <app-block-component text="Maintained by Google and has huge community support"></app-block-component>
        </div>

        <div class="row">
          <button mat-raised-button color="primary" [routerLink]="'features'" class="col-12 mt-5">
            <mat-icon>select_all</mat-icon>
            Start
          </button>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {

}
