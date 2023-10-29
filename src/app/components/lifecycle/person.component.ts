import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-person',
  template: `
      <app-card-component class="col-12">
          <ng-content select="[title]"></ng-content>
          <div class="section">
              <ng-content select="[content]"></ng-content>
          </div>
          <div class="my-2 p-2">
              <p class="code"><span class="mx-1 my-1 mat-tab-label">Name:</span> <code>{{name}}</code></p>
              <p class="code"><span class="mx-1 my-1 mat-tab-label">Age:</span> <code>{{age}}</code></p>
              <p class="code"><span class="mx-1 mat-tab-label">Message:</span> <code>{{message}}</code></p>
          </div>
      </app-card-component>
  `
})
export class PersonComponent {

  @Input() message!: string;
  @Input() name!: string;
  @Input() age!: number;

}
