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

  form: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = fb.group({
      name: ['', [Validators.required]],
    });
  }

  getControlValue() {
    return this.form.get('name')?.value;
  }

  submit() {
    if (this.form.valid) {
      this._snackBar.open('Right Answer', '')
    } else {
      this._snackBar.open('Wrong Answer', '')
    }
  }
}
