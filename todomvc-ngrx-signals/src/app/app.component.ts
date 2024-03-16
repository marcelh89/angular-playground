import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    TodoListComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}