import { Component, Input } from '@angular/core';
import { FieldConfig } from '../models/form-config.model';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-input.component.html',
  styleUrl: './dynamic-input.component.scss'
})
export class DynamicInputComponent {
  @Input() field?: FieldConfig;
}
