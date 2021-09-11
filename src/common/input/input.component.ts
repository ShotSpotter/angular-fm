import {Component, OnInit, Optional, Self} from '@angular/core';
import {ControlValueAccessor, NgControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, ControlValueAccessor {

  constructor(@Optional() @Self() public ngControl: NgControl) {
  }

  ngOnInit(): void {
    if(this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  onChanged: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }



}
