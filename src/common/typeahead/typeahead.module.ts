import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypeaheadComponent} from "./typeahead.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";


@NgModule({
  declarations: [
    TypeaheadComponent
  ],
  exports: [
    TypeaheadComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ]
})
export class TypeaheadModule {
}
