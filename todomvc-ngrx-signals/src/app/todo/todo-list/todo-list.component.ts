import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [TodoItemComponent],
    templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  private location = inject(Location);
  private todoService = inject(TodoService);

  get todos(): Todo[] {
    const filter = this.location.path().split('/')[1] || 'all';
    return this.todoService.getItems(filter);
  }

  get activeTodos(): Todo[] {
    return this.todoService.getItems('active');
  }

  removeTodo(todo: Todo): void {
    this.todoService.removeItem(todo);
  }

  toggleAll(e: Event) {
    const input = e.target as HTMLInputElement;
    this.todoService.toggleAll(input.checked);
  }
}