import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {AutoUnsubscribeComponent} from './auto-unsubscribe.component';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-loan',
  template: `
      <div class="container-fluid background-color">
          <div class="container">
              <div class="form-group row" [formGroup]="formGroup">
                  <h5 class="text-accent">Loan Processing Component</h5>
                  <mat-form-field class="col-12 col-md-4 gap-md-1">
                      <mat-label>Loan Amount</mat-label>
                      <input type="number" matInput formControlName="amount">
                  </mat-form-field>
                  <mat-form-field class="col-12 col-md-4 gap-md-1">
                      <mat-label>Annual Percentage Rate</mat-label>
                      <input type="number" matInput formControlName="percentage">
                  </mat-form-field>
                  <mat-form-field class="col-12 col-md-4 gap-md-1">
                      <mat-label>Length of Loan in Years</mat-label>
                      <input type="number" matInput formControlName="length">
                  </mat-form-field>
              </div>
          </div>
      </div>
  `,
  styleUrls: ['../../components/component/component.component.scss']
})
export class LoanComponent extends AutoUnsubscribeComponent {

  pct = 10;
  formGroup: FormGroup;

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {
    super();
    this.formGroup = this.fb.group({
      amount: new FormControl(),
      percentage: new FormControl(),
      length: new FormControl()
    })
  }

  ngOnInit() {
    super.ngOnInit();
    this.formGroup.valueChanges
      .pipe(distinctUntilChanged(), takeUntil(this._destroy$))
      .subscribe(val => {
        console.log(val)
      })
  }
}
