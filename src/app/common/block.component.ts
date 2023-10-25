import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-block-component',
  template: `
    <div class="block">
      <span><mat-icon>{{icon}}</mat-icon></span>
      <span [innerHTML]="text"></span>
    </div>
  `
})
export class BlockComponent {

  @Input() icon: any;
  @Input() text: any;

}
