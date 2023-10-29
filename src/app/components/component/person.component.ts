import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-person',
  template: `
      <app-card-component class="w-100">
          <ng-content select="[title]"></ng-content>
          <div class="section">
              <ng-content select="[content]"></ng-content>
          </div>
          <ul class="content-list-simple">
              <li><span>Name:</span> <code>{{name}}</code></li>
              <li><span>Age:</span> <code>{{age}}</code></li>
              <li><span >Message:</span> <code>{{message}}</code></li>
          </ul>
      </app-card-component>
  `
})
export class PersonComponent {

  @Input() message!: string;
  @Input() name!: string;
  @Input() age!: number;

}
