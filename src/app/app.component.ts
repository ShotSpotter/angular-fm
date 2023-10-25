import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="brand">
        <span class="brand-img">
          <img src="../assets/img/brand.png" alt="brand" [routerLink]="'/main'">
        </span>
      <span [routerLink]="'/main/features'" class="brand-name">{{title}}</span>
    </div>
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {

  title = 'Brown Bag Series: Angular (ng)';

}
