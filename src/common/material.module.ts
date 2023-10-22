import {NgModule} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";

@NgModule({
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatDatepickerModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule
  ],
  imports: []
})
export class MaterialModule {
}
