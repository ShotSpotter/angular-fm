import {Component} from "@angular/core";
import {AutoUnsubscribeComponent} from "../../common/components/auto-unsubscribe.component";
import {toggleValidation} from "./forms-data";
import {FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatButtonToggleChange} from "@angular/material/button-toggle";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-forms-reactive',
  template: `
    <div class="container-fluid">
      <div class="container">
        <div class="form-group row">
          <form class="col-12 py-3 background-color-primary-lite-x" [formGroup]="formGroup">
            <h5 class="text-center text-muted mb-5">Simple Reactive Form</h5>
            <div class="row w-md-50 m-auto">
              <div class="col-12">
                <mat-form-field class="w-100 mb-2">
                  <mat-label>First Name</mat-label>
                  <input type="text" matInput placeholder="" formControlName="firstName">
                  <mat-error *ngIf="errors['firstName']">{{errors['firstName'] | json}}</mat-error>
                </mat-form-field>
                <ng-container [ngTemplateOutlet]="validationTpl" [ngTemplateOutletContext]="{control: 'firstName'}"></ng-container>
              </div>
              <div class="col-12">
                <mat-form-field class="w-100">
                  <mat-label>Last Name</mat-label>
                  <input type="text" matInput placeholder="" formControlName="lastName">
                  <mat-error *ngIf="errors['lastName']">{{errors['lastName'] | json}}</mat-error>
                </mat-form-field>
              </div>
              <div class="col-12">
                <mat-form-field class="w-100">
                  <mat-label>Email</mat-label>
                  <input type="text" matInput placeholder="" formControlName="email">
                  <mat-error *ngIf="errors['email']">{{errors['email'] | json}}</mat-error>
                </mat-form-field>
              </div>
              <div class="col-12">
                <mat-form-field class="w-100">
                  <mat-label>Password</mat-label>
                  <input type="text" matInput placeholder="" formControlName="password">
                  <mat-error *ngIf="errors['password']">{{errors['password'] | json}}</mat-error>
                </mat-form-field>
              </div>
              <div class="col-12">
                <mat-form-field class="w-100">
                  <mat-label>Confirm Password</mat-label>
                  <input type="text" matInput placeholder="" formControlName="confirmPassword">
                  <mat-error *ngIf="errors['confirmPassword']">{{errors['confirmPassword'] | json}}</mat-error>
                </mat-form-field>
              </div>
              <div class="col-12">
                <div class="d-flex flex-md-nowrap flex-wrap gap-1">
                  <button mat-raised-button color="primary" class="flex-grow-1 p-2" type="submit" (click)="onSubmit(formGroup)">Submit</button>
                  <button mat-raised-button color="accent" class="flex-grow-1 p-2" type="button" (click)="formGroup.reset()">Clear</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <ng-template #validationTpl let-control="control">
      <div class="d-flex flex-md-nowrap flex-wrap gap-1">
        <mat-button-toggle-group name="ingredients" aria-label="Ingredients" multiple (change)="toggleValidations($event, control)">
          <mat-button-toggle value="REQUIRED">Required</mat-button-toggle>
          <mat-button-toggle value="MAX_LENGTH">Max Length (12)</mat-button-toggle>
          <mat-button-toggle value="MIN_LENGTH">Min Length (6)</mat-button-toggle>
        </mat-button-toggle-group>
      </div>
    </ng-template>
  `,
  styleUrls: ['form.component.scss']
})
export class FormsReactiveComponent extends AutoUnsubscribeComponent {

  formGroup: FormGroup;
  errors: { [key: string]: ValidationErrors | null } = {};
  validators: Map<string, ValidatorFn> = new Map();

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    super();
    this.formGroup = this.fb.group({
      firstName: [null],
      lastName: [null],
      email: [null],
      password: [null],
      confirmPassword: [null]
    })

    this.validators.set('REQUIRED', Validators.required);
    this.validators.set('MIN_LENGTH', Validators.minLength(6));
    this.validators.set('MAX_LENGTH', Validators.maxLength(12));
  }

  ngOnInit() {
    super.ngOnInit();

    this.formGroup.statusChanges
      .pipe(
        takeUntil(this._destroy$)
      )
      .subscribe(_ => {
        Object.keys(this.formGroup.controls)
          .forEach(k => {
            this.errors[k] = this.formGroup.controls[k].errors
          })
      })
  }

  onSubmit(form: FormGroup) {
    this.formGroup.markAllAsTouched();
    this.formGroup.updateValueAndValidity();
    if (form.valid) {
      this.snackbar.open(JSON.stringify(form.value), '', {duration: 2000})
    } else {
      this.snackbar.open('Form is invalid', '', {duration: 2000})
    }
  }

  toggleValidations($event: MatButtonToggleChange, controlName: string) {
    this.validators
      .forEach((v: ValidatorFn, k: string) => {
        toggleValidation(this.formGroup.get(controlName), $event.value.includes(k), v);
      })
  }

  addValidation() {

  }

  removeValidation() {

  }
}
