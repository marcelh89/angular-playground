import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormConfig, StepConfig } from '../models/form-config.model';
import formJson from '../config/wizard-form.config';
import {StepComponent} from '../step/step.component'


@Component({
  selector: 'app-wizard-form',
  standalone: true,
  imports: [CommonModule,NgIf,StepComponent, ReactiveFormsModule],
  templateUrl: './wizard-form.component.html',
  styleUrl: './wizard-form.component.scss'
})
export class WizardFormComponent {
  config: FormConfig = formJson;
  currentStepIndex = 0;
  stepForms!: FormGroup[];

  constructor(private fb: FormBuilder) {}

  formGroup(): FormGroup{
    return this.stepForms[this.currentStepIndex]
  }

  ngOnInit() {

    // init a list of step sized form groups including all fields per step for validation
    this.stepForms = this.config.steps.map(step => {
      return this.createForm(step)
      //this.fb.group({
        // Define step 1 form controls with validators
        // field1: ['', Validators.required],
        // ...
      //}),
    });

    console.log("app-wizard-form/ngOnInit - initialized formGroup", this.formGroup, this.config.steps.length, this.stepForms.length - 1)
  }

  // create a FormGroup per Step
  createForm(step: StepConfig ): FormGroup {
    const group = this.fb.group({});
    // Dynamically create form fields based on config
      
    /*
    for (const row of step.rows) {
        for (const column of row.columns) {
          for (const field of column.fields) {
            const ctl = this.fb.control('')
            //ctl.setValidators([Validators.required])
            group.addControl(field.name, this.fb.control(''));
          }
        }
      }
      */
    return group;
  }




  // Implementierung der Methoden zur Navigation zwischen den Schritten
  goToNextStep() {
    // Check if current form is valid before proceeding
    if (this.stepForms[this.currentStepIndex].valid) {
      this.currentStepIndex++; // increment current step to navigate to the next one
    }
  }

  // Function to navigate to previous step
  goToPreviousStep() {
    this.currentStepIndex = Math.max(0, this.currentStepIndex - 1); // decrement current step index or set to 0 if on the first step
  }

  // Check if the next step should be accessible
  isNextStepAccessible(): boolean {
    console.log("isNextStepAccessible", this.stepForms[this.currentStepIndex].valid)
    return this.stepForms[this.currentStepIndex].valid;
  }

}
