import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { TodoService } from '../../todo/todo.service';
import { TodoStore } from '../../todo/todo.store'
import { Todo } from '../../todo/todo';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  private location = inject(Location);
  private todoService = inject(TodoService);

  get todos(): Todo[] {
    return this.todoService.getItems();
  }

  get activeTodos(): Todo[] {
    return this.todoService.getItems('active');
  }

  get completedTodos(): Todo[] {
    return this.todoService.getItems('completed');
  }

  get filter(): string {
    return this.location.path().split('/')[1] || 'all';
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }
}