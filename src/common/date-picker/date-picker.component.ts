import {Component, ElementRef, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import * as moment from "moment";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {

  @Input() label!: string;
  formGroup!: FormGroup;
  date!: any;
  touched = false;
  disabled = false;

  @ViewChild('datepicker', {static: true}) datepicker!: ElementRef;
  private _$textChangeSubs = new Subject();

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      'date': [null]
    })
  }

  onChange = (date: any) => {
  };

  onTouched = () => {
  };

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  writeValue(date: Date): void {
    this.date = date;
    const dateStr = this._formatDate(this.date);
    this.datepicker.nativeElement.value = dateStr == 'Invalid date' ? '' : dateStr;
  }

  /**
   * Datepicker stuff.
   */
  onDatepickerDate(event: MatDatepickerInputEvent<any>) {
    if (event.value?.isValid()) {
      this._updateControl(event.value.toDate());
    } else {
      this._invalidateControl();
    }
  }

  parse(text: any) {
    const momentDate = moment(text.replaceAll(/\s/g), 'MM/DD/YYYY', true);
    if (momentDate.isValid()) {
      return momentDate.toDate();
    }
    return null;
  }

  inputFormat(event: any, text: string) {
    if (/\D\/$/.test(text)) {
      text = text.substr(0, text.length - 3);
    }
    const dateStr = text.split('/').map((v: any) => v.replace(/\D/g, ''));
    if (dateStr[0]) {
      dateStr[0] = this._checkValue(dateStr[0], 12);
    }
    if (dateStr[1]) {
      dateStr[1] = this._checkValue(dateStr[1], 31);
    }

    let index = -1;
    const dateStrMap = dateStr.map((v: string, i: number) => {
      if (this._isBackspace(event)) {
        index = dateStr.length - 1;
      }
      return v.length == 2 && i < 2 ? (index == i ? v : v + '/') : v;
    });
    const dateOutputStr = dateStrMap.join('').substr(0, 10);
    console.log(dateOutputStr);
    this.datepicker.nativeElement.value = dateOutputStr;
    const date = this.parse(dateOutputStr);
    if (date) {
      this._updateControl(date)
    } else {
      this._invalidateControl();
    }
  }

  private _formatDate(date: any) {
    return moment(date).format('MM/DD/YYYY');
  }

  private _updateControl(date: any) {
    this.markAsTouched();
    if (!this.disabled) {
      this.writeValue(date);
      this.onChange(date);
    }
  }

  private _invalidateControl() {
    this.markAsTouched();
    if (!this.disabled) {
      this.date = null;
      this.onChange(this.date);
    }
  }

  private _isBackspace(event: any) {
    return event.key == 'Backspace';
  }

  private _checkValue(str: string, max: number) {
    if (str.charAt(0) !== '0' || str == '00') {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) {
        num = 1;
      }
      str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString();
    }
    return str;
  };

}
