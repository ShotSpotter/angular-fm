import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypeaheadComponent} from "./typeahead.component";
import {MaterialModule} from "../material.module";
import {ReactiveFormsModule} from "@angular/forms";


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
    MaterialModule
  ]
})
export class TypeaheadModule { }
