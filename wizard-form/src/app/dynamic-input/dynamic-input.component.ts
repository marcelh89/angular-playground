import { Component, Input, inject } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { FieldConfig } from '../models/form-config.model';
import { AppStore } from '../app.store';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-input.component.html',
  styleUrl: './dynamic-input.component.scss'
})
export class DynamicInputComponent {
  @Input() field!: FieldConfig;

  appStore = inject(AppStore)

  ngOnInit(): void {}

  // TODO use store here and get the error message from the config/wizard-form.config.ts
  getErrorMessage(key: string){
    return "error"
  }

}
