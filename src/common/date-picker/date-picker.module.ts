import {NgModule} from "@angular/core";
import {DatePickerComponent} from "./date-picker.component";
import {MaterialModule} from "../material.module";
import {DefaultDatePickerAdapter} from "./default-date-adapter.service";
import {DateAdapter} from "@angular/material/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    DatePickerComponent
  ],
  providers: [
    {provide: DateAdapter, useClass: DefaultDatePickerAdapter}
  ]
})
export class DatePickerModule {

}
