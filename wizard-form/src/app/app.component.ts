import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WizardFormComponent} from './wizard-form/wizard-form.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WizardFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wizard-form';
}
