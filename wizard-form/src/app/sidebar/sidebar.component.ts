import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {AppStore} from '../app.store'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  appStore = inject(AppStore);


}
