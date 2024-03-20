import { Validators } from '@angular/forms';
import { FieldConfig } from './multistep-form.model';
import { HttpClient, HttpHandler } from '@angular/common/http';


export function initValidators(field: FieldConfig) {
  const validators = [];

  if (field.validators) {
    for (const validator of field.validators) {
      switch (validator) {
        case 'required':
          validators.push(Validators.required);
          break;
        // Here you can handle other validators like '>= 18 Jahre?'
      }
    }
  }

  return validators;
  
}
