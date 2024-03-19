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

  ngOnInit() {
    console.log("app-wizard-form/ngOnInit - initialized formGroup", this.appStore.currentStepIndex(), this.appStore.stepForms().length - 1 )
  }
}
