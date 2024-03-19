import { Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WizardFormComponent} from './wizard-form/wizard-form.component'
import {SidebarComponent} from './sidebar/sidebar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WizardFormComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wizard-form';
}
