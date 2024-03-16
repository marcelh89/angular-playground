import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../todo/todo.service';

@Component({
  standalone: true,
  selector: 'app-todo-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private todoService = inject(TodoService);

  title = '';

  addTodo() {
    if (this.title) {
      this.todoService.addItem(this.title);

      // Reset title to clear input field.
      this.title = '';
    }
  }
}