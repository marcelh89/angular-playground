import { Component, inject} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
//import { FormConfig, StepConfig } from '../models/form-config.model';
import {AppStore} from '../app.store'
//import formJson from '../config/wizard-form.config';
import {StepComponent} from '../step/step.component'


@Component({
  selector: 'app-wizard-form',
  standalone: true,
  imports: [CommonModule,NgIf,StepComponent, ReactiveFormsModule],
  templateUrl: './wizard-form.component.html',
  styleUrl: './wizard-form.component.scss'
})
export class WizardFormComponent {

  appStore = inject(AppStore)
  
  /*
  config: FormConfig = formJson;
  currentStepIndex = 0;
  stepForms!: FormGroup[];

  constructor(private fb: FormBuilder) {}

  formGroup(): FormGroup{
    return this.stepForms[this.currentStepIndex]
  }

  */
  ngOnInit() {
    // init a list of step sized form groups including all fields per step for validation
    //this.stepForms = this.config.steps.map(step => this.fb.group({}));
    //console.log("app-wizard-form/ngOnInit - initialized formGroup", this.formGroup, this.config.steps.length, this.stepForms.length - 1)
    console.log("app-wizard-form/ngOnInit - initialized formGroup", this.appStore.currentStepIndex(), this.appStore.stepForms().length - 1 )

  }

  /*

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

  */

}
