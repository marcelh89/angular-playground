import { Validators } from '@angular/forms';
import { FieldConfig } from './multistep-form.model';


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

export function removeNull(obj: any) {
  Object.keys(obj).forEach(key => {
    if (obj[key] && typeof obj[key] === 'object') removeNull(obj[key]);
    else if (obj[key] === null) delete obj[key];
  });
  return obj;
}
