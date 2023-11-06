import {Component, Input} from "@angular/core";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-block-component',
  template: `
    <div class="block">
      <div class="icon-container"><mat-icon [color]="iconColor">{{icon}}</mat-icon></div>
      <div class="text" [innerHTML]="text"></div>
    </div>
  `
})
export class BlockComponent {

  @Input() iconColor?: ThemePalette;
  @Input() icon: any;
  @Input() text: any;

}
