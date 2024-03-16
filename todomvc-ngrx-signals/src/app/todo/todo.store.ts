
import { computed } from '@angular/core';
import {signalStore, withComputed, withState} from "@ngrx/signals"
import {Todo} from '../todo/todo'

type TodoState = {
    todos: Todo[];
    isLoading: boolean;
  };
  
  const initialState: TodoState = {
    todos: [],
    isLoading: false,
  };


export const TodoStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withComputed(({ todos }) => ({
        active: computed( () => todos().filter((todo) => !todo.completed)),
        completed: computed(() => todos().filter((todo) => todo.completed)),
      }))
    );
