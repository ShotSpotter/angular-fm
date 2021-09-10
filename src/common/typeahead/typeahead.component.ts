import {Component, forwardRef, OnInit} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors} from "@angular/forms";
import {Subject} from "rxjs";

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TypeaheadComponent),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: TypeaheadComponent,
      multi: true
    }
  ]
})
export class TypeaheadComponent implements OnInit, ControlValueAccessor {

  selected!: string;

  touched = false;
  disabled = false;
  private _$textChangeSubs = new Subject();

  constructor() {
  }

  ngOnInit(): void {
    this._onTextChange();
  }

  onType(text: string) {
    this._$textChangeSubs.next(text);
  }

  onChange = (text: any) => {
  };

  onTouched = () => {
  };

  onMatch(value: string) {
    this.markAsTouched();
    if (!this.disabled) {
      this.selected = value;
      this.onChange(this.selected);
    }
  }

  onNoMatch() {
    this.markAsTouched();
    if (!this.disabled) {
      this.selected = '';
      this.onChange(this.selected);
    }
  }

  writeValue(text: string) {
    this.selected = text;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
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

  validate(control: AbstractControl): ValidationErrors | null {
    const text = control.value;
    if (!this.isValid(text)) {
      return {
        mustBePositive: {
          text: text
        }
      };
    }
    return null;
  }

  private _onTextChange() {
    this._$textChangeSubs
      .pipe()
      .subscribe((value: any) => {
        if (value && this.isValid(value)) {
          this.onMatch(value);
        } else {
          this.onNoMatch();
        }
      })
  }

  private isValid(value: string) {
    return value == '0' || value == '7';
  }
}
