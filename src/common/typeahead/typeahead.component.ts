import {Component, ElementRef, forwardRef, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors} from "@angular/forms";
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
  filteredOptions: any[] = [];
  @ViewChild('typeaheadInput', {static: true}) typeaheadInput!: ElementRef;
  private _$textChangeSubs = new Subject();

  constructor(private gnService: GenericService) {
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

  validate(control: AbstractControl): ValidationErrors | null {
    const text = control.value;
    if (!this.isValid(text)) {
      return {
        required: {
          text: 'Option must be selected'
        }
      };
    }
    return null;
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

  private _updateControl(option: any) {
    this.markAsTouched();
    if (!this.disabled) {
      this.selected = option.id;
      this.onChange(this.selected);
      this.writeValue(option.name);
    }
  }

  private _invalidatedControl() {
    this.markAsTouched();
    if (!this.disabled) {
      this.selected = '';
      this.onChange(this.selected);
    }
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
        this.filteredOptions = value;
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
