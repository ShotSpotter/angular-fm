import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container-fluid app-container">
      <div class="brand">
        <span class="brand-img">
          <img src="../assets/img/brand.png" alt="brand" [routerLink]="'/main'">
        </span>
        <span [routerLink]="'/main/features'" class="brand-name">{{title}}</span>
      </div>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>`
})

export class AppComponent {

  title = 'Brown Bag Series: Angular (ng)';

}
