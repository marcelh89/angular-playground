import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FieldConfig } from '../multistep-form.model';
import { AppStore } from '../multistep-form.store';
import {MatError, MatHint, MatInputModule, MatLabel} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIcon} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatError, MatLabel, MatInputModule, MatDatepickerModule, MatHint, MatIcon],
  templateUrl: './dynamic-input.component.html',
})
export class DynamicInputComponent {
  @Input() field!: FieldConfig;
  control!: FormControl

  appStore = inject(AppStore)

  ngOnInit(): void {
    this.control = (this.appStore.getFieldControl(this.field) as FormControl)
  }

  isSimpleInputType(type: string){
    return ["text", "number"].includes(type)
  }

  blur(event: Event){
    console.log("blur", event, this.field, this.control)
    console.log("blur",this.control)
    console.log("blur-control.invalid",this.control.invalid)
    console.log("blur-control.dirty",this.control.dirty)
    console.log("blur-control.invalid",this.control.touched)
  }

}
