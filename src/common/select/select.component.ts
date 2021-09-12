import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {

  @Input() label!: string;
  formGroup!: FormGroup;
  selectedOption!: string | null;
  touched = false;
  disabled = false;
  options = [
    {
      id: 1,
      description: 'Yes'
    },
    {
      id: 2,
      description: 'No'
    }
  ]

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      'select': [null, [this.selectValidator.bind(this)]]
    })
  }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(selectedOption: any): void {
    this.selectedOption = selectedOption;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
    this.formGroup.get('select')?.updateValueAndValidity();
  }

  optionValue(option: any) {
    return option?.description;
  }

  optionText(option: any) {
    return option?.id;
  }

  private onChange = (text: any) => {
  };

  private onTouched = () => {
  };

  onSelect(option: any = null) {
    this.markAsTouched();
    if (!this.disabled) {
      this.writeValue(option);
      this.onChange(this.selectedOption);
    }
    this.formGroup.get('select')?.updateValueAndValidity();
  }

  private selectValidator(control: AbstractControl) {
    if (this.touched && (this.selectedOption == null || this.selectedOption.length == 0)) {
      return {
        select: 'required'
      }
    }
    return null;
  }

}
