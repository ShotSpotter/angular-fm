import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid">
      <h1 class="text-center my-5">
        <a [routerLink]="'/main'" class="text-dark">{{title}}</a>
      </h1>
      <router-outlet></router-outlet>
    </div>`
})

export class AppComponent {

  title = 'Angular Demo';

}
