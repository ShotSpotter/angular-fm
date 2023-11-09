import {Component} from "@angular/core";
import {MatButtonToggleChange} from "@angular/material/button-toggle";

@Component({
  selector: 'app-structural-directive',
  template: `
    <app-card-component [data]="{title: 'Structural Directive', css: 'shadow-lite'}">
      <div class="section mb-3">
        Structural directives are used to change the DOM layout by adding and removing DOM elements.
        <ul>
          <li><code>*ngFor</code> - can be used to add DOM element by iterating over the given array.</li>
          <li><code>*ngIf</code> - can be used to show/hide a DOM element based on given condition.</li>
          <li><code>*ngSwitch</code> - can be used to swap DOM element based on a scope expression.</li>
        </ul>
        A custom structural directive can be created as well. Check <a
        href="https://angular.io/guide/structural-directives">Angular Doc</a>
      </div>

      <div class="grid-directives-components">
        <div class="w-100">
          <h2 class="p-2"><code>Directive: *ngFor</code></h2>
          <mat-card *ngFor="let item of items; let index = index" class="mb-1 p-2 h-auto">
            <mat-card-content class="text-center">
              <div class="d-flex justify-content-between">
                <label>Item #: {{item}}</label>
                <mat-icon (click)="remove(index)" class="cursor-pointer">delete</mat-icon>
              </div>
            </mat-card-content>
          </mat-card>

          <div class="d-flex align-items-center justify-content-end">
            <button mat-stroked-button color="primary" class="flex-md-grow-1" (click)="addItem()">
              <mat-icon>add</mat-icon>
              <span>Add</span>
            </button>
          </div>
        </div>

        <div class="w-100">
          <h2 class="p-2"><code>Directive: *ngIf</code></h2>
          <div class="d-flex align-items-center justify-content-between">
            <mat-slide-toggle [checked]="showText" (toggleChange)="toggle()" color="primary" class="mx-1">Toggle
            </mat-slide-toggle>
            <span class="mx-1 text-center" *ngIf="showText">Hi <mat-icon>front_hand</mat-icon></span>
            <span class="mx-1 text-center" *ngIf="!showText">Bye <mat-icon>waving_hand</mat-icon></span>
          </div>
        </div>

        <div class="w-100">
          <h2 class="p-2"><code>Directive: *ngSwitch</code></h2>
          <div class="d-flex align-items-center justify-content-between">
            <mat-button-toggle-group name="favoriteColor" (change)="switchOption($event)">
              <mat-button-toggle value="Red">Red</mat-button-toggle>
              <mat-button-toggle value="Blue">Blue</mat-button-toggle>
              <mat-button-toggle value="">Default</mat-button-toggle>
            </mat-button-toggle-group>
            <ng-container [ngSwitch]="switchSelect">
              <div *ngSwitchCase="'Red'">
                <mat-icon color="warn">emoji_emotions</mat-icon>
              </div>
              <div *ngSwitchCase="'Blue'">
                <mat-icon color="primary">emoji_emotions</mat-icon>
              </div>
              <div *ngSwitchDefault>
                <mat-icon>emoji_emotions</mat-icon>
              </div>
            </ng-container>
          </div>
        </div>
      </div>
    </app-card-component>
  `
})
export class StructuralDirectiveComponent {

  showText = true;
  items: number[] = [];
  switchOptions: string[] = ['Red', 'Blue'];
  switchSelect = 'red';

  addItem() {
    this.items.push(new Date().getTime());
  }

  remove(index: number) {
    this.items.splice(index, 1);
  }

  toggle() {
    this.showText = !this.showText;
  }

  switchOption(option: MatButtonToggleChange) {
    this.switchSelect = option.value;
  }
}
