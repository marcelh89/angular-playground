import { Component, Input, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {AppStore} from '../multistep-form.store'
import {DynamicInputComponent} from '../dynamic-input/dynamic-input.component'

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [CommonModule, NgIf, DynamicInputComponent],
  templateUrl: './step.component.html',
})
export class StepComponent {
  @Input() isActive: boolean = false;
  appStore = inject(AppStore);  
}
