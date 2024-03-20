import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
  control!: FormControl

  appStore = inject(AppStore)

  ngOnInit(): void {
    this.control = (this.appStore.getFieldControl(this.field) as FormControl)
    console.log("DynamicInputComponent-ngOnInit", this.control)
  } 

  blur(event: Event) {
    console.log("DynamicInputComponent-blur", event, this.control);
  }

  modelChange(event: Event){
    console.log("DynamicInputComponent-modelChange", event, this.control);
  }

  // TODO use store here and get the error message from the config/wizard-form.config.ts
  getErrorMessage(key: string){
    return "error"
  }

}
