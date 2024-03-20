import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldConfig } from '../multistep-form.model';
import { AppStore } from '../multistep-form.store';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-input.component.html',
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
