import {ChangeDetectorRef, Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-component-communication-bindings-parent',
  template: `
      <div class="container-fluid p-0">
          <div class="container background-color">
              <div class="grid-component-communication-bindings justify-content-between">
                  <div class="w-100 p-2">
                      <div class="w-100 p-2 mb-2">
                        <h5 class="text-accent">Parent Component</h5>
                        <div class="d-flex flex-wrap flex-md-nowrap">
                          <mat-form-field class="col-12 col-md-8 pe-md-3">
                            <mat-label>Enter Number</mat-label>
                            <input type="number" matInput placeholder="Enter number for " [formControl]="formControl">
                          </mat-form-field>
                          <div class="col-12 col-md-4 ps-md-3">
                            <button mat-flat-button color="primary" class="action-button w-100" (click)="update()">Find Sq. Root</button>
                          </div>
                        </div>
                        <div class="d-block mt-3">
                          <h6>Message from Child (@Output): <span class="text-accent">{{updatedValue}}</span></h6>
                        </div>
                      </div>
                      <div class="w-100 background-color-primary-lite-x p-2 mt-5">
                          <app-component-communication-bindings-child class="w-100" [number]="value" (updatedNumber)="onUpdatedNumber($event)"></app-component-communication-bindings-child>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  `,
  styleUrls: ['../../component.component.scss']
})
export class ComponentCommunicationBindingsParentComponent {

  formControl = new FormControl();
  value?: number;
  updatedValue?: any;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  update() {
    this.value = this.formControl.value;
  }

  onUpdatedNumber($event: number) {
    this.updatedValue = $event;
    this.cdr.detectChanges();
  }
}
