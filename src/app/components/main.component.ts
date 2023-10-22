import {Component} from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container-fluid h-100">
      <router-outlet></router-outlet>
    </div>
  `
})
export class MainComponent  {

}
