import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {AppStore} from '../multistep-form.store'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  appStore = inject(AppStore);
}
