import {Component, ViewChild} from "@angular/core";
import {AutoUnsubscribeComponent} from "../../common/components/auto-unsubscribe.component";
import {NgForm} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-forms-template',
  template: `
    <div class="container-fluid">
      <div class="container">
        <div class="form-group row">
          <form class="col-12 py-3 background-color-primary-lite-x" (ngSubmit)="form.form.valid && onSubmit(form)" #form="ngForm">
            <h5 class="text-center text-muted mb-5">Simple Template Driven Form</h5>
            <div class="row w-md-50 m-auto">
              <mat-form-field class="col-12 col-md-3">
                <mat-label>First Name</mat-label>
                <input type="text" matInput placeholder="" #firstName="ngModel" required ngModel name="firstName">
                <mat-error *ngIf="firstName.errors && (firstName.dirty || firstName.touched)">
                  <ng-container *ngIf="firstName.errors.required">First Name is required</ng-container>
                </mat-error>
              </mat-form-field>
              <mat-form-field class="col-12 col-md-3">
                <mat-label>Last Name</mat-label>
                <input type="text" matInput placeholder="" #lastName="ngModel" ngModel name="lastName" required>
                <mat-error *ngIf="lastName.errors && (lastName.dirty || lastName.touched)">
                  <ng-container *ngIf="lastName.errors.required">Last Name is required</ng-container>
                </mat-error>
              </mat-form-field>
              <mat-form-field class="col-12 col-md-3">
                <mat-label>Email</mat-label>
                <input type="text" matInput placeholder="" #email="ngModel" ngModel name="email">
                <mat-error *ngIf="email.errors && (email.dirty || email.touched)">
                  <ng-container *ngIf="email.errors.required">Email Name is required</ng-container>
                </mat-error>
              </mat-form-field>
              <mat-form-field class="col-12 col-md-3">
                <mat-label>Password</mat-label>
                <input type="password" matInput placeholder="" #password="ngModel" ngModel name="password">
                <mat-error *ngIf="password.errors && (password.dirty || password.touched)">
                  <ng-container *ngIf="password.errors.required">Password Name is required</ng-container>
                </mat-error>
              </mat-form-field>
              <mat-form-field class="col-12 col-md-3">
                <mat-label>Confirm Password</mat-label>
                <input type="password" matInput placeholder="" #confirmPassword="ngModel" ngModel name="confirmPassword">
                <mat-error *ngIf="confirmPassword.errors && (confirmPassword.dirty || confirmPassword.touched)">
                  <ng-container *ngIf="confirmPassword.errors.required">Confirm Password Name is required</ng-container>
                </mat-error>
              </mat-form-field>
              <div class="col-12 col-md-6">
                <div class="d-flex flex-md-nowrap flex-wrap gap-1">
                  <button mat-raised-button color="primary" class="flex-grow-1 p-2" type="submit">Submit</button>
                  <button mat-raised-button color="accent" class="flex-grow-1 p-2" type="button" (click)="onClear()">Clear</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['form.component.scss']
})
export class FormsTemplateComponent extends AutoUnsubscribeComponent {

  @ViewChild('form') form!: NgForm;
  codeVisible = false;

  constructor(private snackbar: MatSnackBar) {
    super();
  }

  onSubmit(form: NgForm) {
    this.snackbar.open(JSON.stringify(form.value), '', {duration: 2000})
  }

  onClear() {
    this.form.reset();
  }

  onDelete() {
  }

  toggleCode() {
    this.codeVisible = !this.codeVisible;
  }
}
