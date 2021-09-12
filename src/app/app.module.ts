import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TypeaheadModule} from "../common/typeahead/typeahead.module";
import {MaterialModule} from "../common/material.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DatePickerModule} from "../common/date-picker/date-picker.module";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {SelectModule} from "../common/select/select.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatMomentDateModule,
    TypeaheadModule,
    DatePickerModule,
    SelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
