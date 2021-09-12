import {NgModule} from "@angular/core";
import {DatePickerComponent} from "./date-picker.component";
import {DefaultDatePickerAdapter} from "./default-date-adapter.service";
import {DateAdapter} from "@angular/material/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
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
