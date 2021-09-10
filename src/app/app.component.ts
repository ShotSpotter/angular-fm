import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components';

  typeaheadForm: FormGroup;
  datePickerForm: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.typeaheadForm = fb.group({
      name: ['', [Validators.required]],
    });

    this.datePickerForm = fb.group({
      date: [null, [Validators.required]]
    })
  }
}
