import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent implements AfterViewChecked {
  todoService = inject(TodoService)
  @Input({required: true}) todo!: Todo;

  @Output() remove = new EventEmitter<Todo>();

  @ViewChild('todoInputRef') inputRef?: ElementRef;

  title = '';

  isEditing = false;

  toggleTodo(): void {
    //this.todo.completed = !this.todo.completed;
    this.todoService.toggleCompleted(this.todo)
  }

  removeTodo(): void {
    this.remove.emit(this.todo);
  }

  startEdit() {
    this.isEditing = true;
    //this.todoService.setEditing(this.todo, true)
  }

  handleBlur(e: Event) {
    this.isEditing = false;
    //this.todoService.setEditing(this.todo, false)

  }

  handleFocus(e: Event) {
    this.title = this.todo.title;
    this.todoService.setTitle(this.todo, this.title)
  }

  updateTodo() {
    if (!this.title) {
      this.remove.emit(this.todo);
    } else {
      this.todo.title = this.title;
    }

    this.isEditing = false;
  }

  ngAfterViewChecked(): void {
    if (this.isEditing) {
      this.inputRef?.nativeElement.focus();
    }
  }
}