import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
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
}
