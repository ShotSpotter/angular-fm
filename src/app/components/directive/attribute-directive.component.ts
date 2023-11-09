import {Component} from "@angular/core";
import {MatRadioChange} from "@angular/material/radio";

@Component({
  selector: 'app-attribute-directive',
  template: `
    <app-card-component [data]="{title: 'Attribute Directive', css: 'shadow-lite'}">
      <div class="section mb-3">
        Attribute directives are used to change the appearance or behavior of an element.
        <ul>
          <li><code>ngClass</code> — used to apply CSS classes to change the appearance.</li>
          <li><code>ngStyle</code> — used to apply styles that will change the appearance.</li>
        </ul>
      </div>

      <div class="grid-directives-components-2">
        <div class="w-100">
          <h2 class="p-2"><code>Directive: ngClass</code></h2>
          <div class="d-flex align-items-center justify-content-around">
            <label>Zoom</label>
            <mat-radio-group aria-label="Zoom" (change)="changeNgClass($event)">
              <mat-radio-button value="Y" class="mx-1">In</mat-radio-button>
              <mat-radio-button value="N" class="mx-1">Out</mat-radio-button>
            </mat-radio-group>
            <span class="mx-1 text-center scale" [ngClass]="ngClass">Just a text</span>
          </div>
        </div>
        <div class="w-100">
          <h2 class="p-2"><code>Directive: ngStyle</code></h2>
          <div class="d-flex align-items-center justify-content-around">
            <label>Choose Text Style</label>
            <div>
              <mat-checkbox class="mx-1" [(ngModel)]="styleItalic" (change)="changeStyle()">Italic</mat-checkbox>
              <mat-checkbox class="mx-1" [(ngModel)]="styleBold" (change)="changeStyle()">Bold</mat-checkbox>
            </div>
            <span class="mx-1 text-center scale" [ngStyle]="ngStyles">Just a text</span>
          </div>
        </div>
      </div>
    </app-card-component>
  `
})
export class AttributeDirectiveComponent {

  ngClass: string = '';
  styleItalic = false;
  styleBold = false;
  ngStyles: Record<string, string> = {};

  changeNgClass(event: MatRadioChange) {
    this.ngClass = event.value == 'Y' ? 'up' : ''
  }

  changeStyle() {
    this.ngStyles = {
      'font-style': this.styleItalic ? 'italic' : 'normal',
      'font-weight': this.styleBold ? 'bolder' : 'normal',
    };
  }
}
