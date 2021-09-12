import {NgModule} from "@angular/core";
import {SelectComponent} from "./select.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    SelectComponent
  ],
  exports: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule
  ]
})
export class SelectModule {

}
