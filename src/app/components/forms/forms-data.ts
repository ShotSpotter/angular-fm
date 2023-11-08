import {AbstractControl, ValidatorFn} from "@angular/forms";

export const FORMS_DATA: { [key: string]: any } = {
  content: `
    <h2 class="p-0 mb-3">Basics of Angular Forms</h2>
    <div class="row m-0 mb-5">
        <dl class="d-md-inline-flex align-items-center p-2 m-0">
          <dt class="text-accent">FormControl:</dt>
          <dd class="m-0 ms-md-1">Tracks the value and status of individual form control</dd>
        </dl>
        <dl class="d-md-inline-flex align-items-center p-2 m-0">
          <dt class="text-accent">FormGroup:</dt>
          <dd class="m-0 ms-md-1">Collection FormControls and tracks their values and statuses</dd>
        </dl>
        <dl class="d-md-inline-flex align-items-center p-2 m-0">
          <dt class="text-accent">FormArray:</dt>
          <dd class="m-0 ms-md-1">Array of FormControls and tracks their values and statuses</dd>
        </dl>
        <dl class="d-md-inline-flex align-items-center p-2 m-0">
          <dt class="text-accent">Control Value Accessor:</dt>
          <dd class="m-0 ms-md-1">Bridge between FormControl and DOM elements</dd>
        </dl>
    </div>
    <h2 class="mt-5 text-center">Angular support two different approaches for forms handling</h2>
  `,
  items: [
    {
      url: 'reactive', title: 'Reactive Forms', icon: 'list_alt', color: 'primary',
      content: ['Uses ReactiveFormsModule', 'Logics are driven by component', 'Immutable form data', 'Best for complex forms with validation rules']
    },
    {
      url: 'template', title: 'Template Driven Forms', icon: 'view_list', color: 'primary',
      content: ['Uses FormsModule', 'Logics are driven from the template', 'Mutable form data', 'Good for small and simple forms but as the form grow bigger so does the complexity']
    }
  ]
}

export enum FormValidationType {
  REQUIRED,
  MAX_LENGTH,
  MIN_LENGTH
}

export function toggleValidation(control?: AbstractControl | null, add?: boolean, validator?: ValidatorFn) {
  if (validator && control?.hasValidator(validator) && !add) {
    control?.removeValidators(validator);
  } else if (validator && add && !control?.hasValidator(validator)) {
    control?.addValidators(validator);
  }
  control?.updateValueAndValidity();
}


