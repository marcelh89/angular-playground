import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormGroup } from '@angular/forms';

import { StepConfig } from '../models/form-config.model';
import {DynamicInputComponent} from '../dynamic-input/dynamic-input.component'

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [CommonModule, NgIf, DynamicInputComponent],
  templateUrl: './step.component.html',
  styleUrl: './step.component.scss'
})
export class StepComponent {
  @Input() step: StepConfig | undefined = undefined;
  @Input() isActive: boolean = false;
  @Input() formGroup!: FormGroup;

  ngOnInit() {
    console.log("app-step/ngOnInit - passed formGroup for step", this.step?.title,  this.formGroup)
  }
}
