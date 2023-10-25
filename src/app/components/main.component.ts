import {Component} from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container-fluid main-container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class MainComponent  {

}
