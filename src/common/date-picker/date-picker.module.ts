import {NgModule} from "@angular/core";
import {DatePickerComponent} from "./date-picker.component";
import {MaterialModule} from "../material.module";
import {DefaultDatePickerAdapter} from "./default-date-adapter.service";
import {DateAdapter} from "@angular/material/core";
import {DatePickerService} from "./date-picker.service";

@NgModule({
  declarations: [
    DatePickerComponent
  ],
  imports: [
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
