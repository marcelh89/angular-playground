import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormConfig } from '../models/form-config.model';
import formJson from '../config/wizard-form.config';
import {StepComponent} from '../step/step.component'


@Component({
  selector: 'app-wizard-form',
  standalone: true,
  imports: [CommonModule, StepComponent],
  templateUrl: './wizard-form.component.html',
  styleUrl: './wizard-form.component.scss'
})
export class WizardFormComponent {
  config: FormConfig = formJson;
  currentStep = 0;

  constructor() {}

  ngOnInit() {}

  // Implementierung der Methoden zur Navigation zwischen den Schritten
}
