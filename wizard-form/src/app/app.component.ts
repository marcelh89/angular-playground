import { Component,  } from '@angular/core';
import {MultistepFormComponent} from './multistep-form/multistep-form.component'
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MultistepFormComponent, MatToolbar],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'wizard-form';
}
