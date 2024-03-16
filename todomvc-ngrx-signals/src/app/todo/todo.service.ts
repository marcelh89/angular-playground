import { Injectable, inject } from '@angular/core';
import {Todo} from './todo'
import {TodoStore} from '../todo/todo.store'
import { patchState } from '@ngrx/signals';

@Injectable({ providedIn: 'root' })
export class TodoService {
    //todos: Todo[] = [];
    todoStore = inject(TodoStore)

    addItem(title: string): void {
      const todo: Todo = {
        title,
        completed: false,
      };
      patchState(this.todoStore, {todos : this.todoStore.todos().concat(todo)})
    }

    public removeItem(todo: Todo): void {
      patchState(this.todoStore, {todos : this.todoStore.todos().filter(t => t.title !== todo.title)})
    }

    clearCompleted(): void {
      //this.todos = this.todos.filter((todo) => !todo.completed);
      patchState(this.todoStore, {todos : this.todoStore.todos().filter(t => !t.completed)})
    }

    setTitle(todo: Todo, title: string) {
      patchState(this.todoStore, {todos : this.todoStore.todos().map(t => { 
        if(t.title === todo.title) {
          t.title = title
        }
        return t
       })})
    }

    toggleCompleted(todo: Todo): void {
      //this.todos = this.todos.map((todo) => ({ ...todo, completed }));
      patchState(this.todoStore, {todos : this.todoStore.todos().map(t => { 
        if(t.title === todo.title) {
          t.completed = !todo.completed
        }
        return t
       })})
    }

    toggleAll(completed: boolean): void {
      //this.todos = this.todos.map((todo) => ({ ...todo, completed }));
      patchState(this.todoStore, {todos : this.todoStore.todos().map(todo => ({ ...todo, completed }))})
    }

    getItems(type = 'all'): Todo[] {
      switch (type) {
        case 'active':
          //return this.todos.filter((todo) => !todo.completed);
          return this.todoStore.active()
        case 'completed':
          //return this.todos.filter((todo) => todo.completed);
          return this.todoStore.completed()
      }

      //return this.todos;
      return this.todoStore.todos()
    }
}