import { Component, inject} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {AppStore} from './multistep-form.store'
import {StepComponent} from './step/step.component'
import {SidebarComponent} from './sidebar/sidebar.component'
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-multistep-form',
  standalone: true,
  imports: [CommonModule,NgIf,StepComponent, SidebarComponent, ReactiveFormsModule, HttpClientModule],
  templateUrl: './multistep-form.component.html',
})
export class MultistepFormComponent {
  appStore = inject(AppStore)

}
