import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormConfig } from '../models/form-config.model';
import formJson from '../config/wizard-form.config';
import {StepComponent} from '../step/step.component'


@Component({
  selector: 'app-wizard-form',
  standalone: true,
  imports: [CommonModule,NgIf,StepComponent],
  templateUrl: './wizard-form.component.html',
  styleUrl: './wizard-form.component.scss'
})
export class WizardFormComponent {
  config: FormConfig = formJson;
  currentStep = 0;
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.createForm();
    console.log("app-wizard-form/ngOnInit - initialized formGroup", this.formGroup)
  }

  createForm(): FormGroup {
    const group = this.fb.group({});
    // Dynamically create form fields based on config
    for (const step of this.config.steps) {
      for (const row of step.rows) {
        for (const column of row.columns) {
          for (const field of column.fields) {
            group.addControl(field.name, this.fb.control(''));
          }
        }
      }
    }
    return group;
  }

  // Implementierung der Methoden zur Navigation zwischen den Schritten
}
