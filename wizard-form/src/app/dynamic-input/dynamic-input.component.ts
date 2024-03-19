import { Component, Input } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { FieldConfig } from '../models/form-config.model';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-input.component.html',
  styleUrl: './dynamic-input.component.scss'
})
export class DynamicInputComponent {
  @Input() field!: FieldConfig;
  @Input() formGroup!: FormGroup;

  control: FormControl = new FormControl();

  ngOnInit(): void {
    console.log("app-dynamic-input/ngOnInit - passed formGroup", this.formGroup)
    this.formGroup.addControl(this.field.name, this.control);
    this.setValidators();
  }

  private setValidators() {
    const validators = [];

    if (this.field.validators) {
      for (const validator of this.field.validators) {
        switch (validator) {
          case 'required':
            validators.push(Validators.required);
            break;
          // Here you can handle other validators like '>= 18 Jahre?'
        }
      }
    }

    this.control.setValidators(validators);
    
    // This example assumes you'll later want to initialize the control with a value.
    // The value could come from the configuration or could be dynamically loaded.
    //this.control.setValue(this.field.value || null);
  }

  isRequired(): boolean {
    if (!this.control) {
      return false;
    }
    const validator = this.control.validator ? this.control.validator({} as AbstractControl) : null;
    return validator && validator["required"];
  }

  // TODO use store here and get the error message from the config/wizard-form.config.ts
  getErrorMessage(key: string){
    return "error"
  }

}
