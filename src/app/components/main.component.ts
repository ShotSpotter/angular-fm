import {Component} from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  `
})
export class MainComponent  {

}
