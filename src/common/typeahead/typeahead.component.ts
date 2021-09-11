import {Component, ElementRef, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from "rxjs/operators";
import {GenericService} from "./generic.service";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TypeaheadComponent),
      multi: true
    }
  ]
})
export class TypeaheadComponent implements OnInit, ControlValueAccessor {

  @Input() label!: string;
  formGroup!: FormGroup;
  selected!: string;
  touched = false;
  disabled = false;
  filteredOptions: any[] = [];
  @ViewChild('typeaheadInput', {static: true}) typeaheadInput!: ElementRef;
  private _$textChangeSubs = new Subject();

  constructor(private gnService: GenericService, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      'typeahead': [null, [this.typeaheadValidator.bind(this)]]
    })
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

  writeValue(text: string) {
    this.selected = text;
    this.typeaheadInput.nativeElement.value = text;
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

  isValid(value: string) {
    return !!value;
  }

  /**
   * Typeahead related.
   */

  displayText(option: any) {
    return option?.name;
  }

  onOptionSelect(event: MatAutocompleteSelectedEvent) {
    this._updateControl(event.option.value);
    this.filteredOptions = [];
  }

  private typeaheadValidator(control: AbstractControl) {
    if (this.touched && (this.selected == null || this.selected.length == 0)) {
      return {
        typeahead: 'required'
      }
    }
    return null;
  }

  private _updateControl(option: any) {
    this.markAsTouched();
    if (!this.disabled) {
      this.selected = option.id;
      this.onChange(this.selected);
      this.writeValue(option.name);
    }
    this.formGroup.get('typeahead')?.updateValueAndValidity();
  }

  private _invalidatedControl() {
    this.markAsTouched();
    if (!this.disabled) {
      this.selected = '';
      this.onChange(this.selected);
    }
    this.formGroup.get('typeahead')?.updateValueAndValidity();
  }

  private _onTextChange() {
    this._$textChangeSubs
      .pipe(
        // startWith(''),
        filter((text: any) => {
          this._invalidatedControl(); // invalidate the control.
          return text.length >= 3;
        }),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(val => {
          return this._filter(val || '');
        })
      )
      .subscribe((value: any) => {
        this.filteredOptions = !!this.typeaheadInput.nativeElement.value ? value : [];
      })
  }

  private _filter(value: string) {
    return this.gnService.getUsers()
      .pipe(
        map(response => response.filter((option: any) => {
          return option.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
        }))
      )
  }
}
