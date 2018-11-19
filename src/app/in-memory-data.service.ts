import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { TODOS } from './todo-mocks';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = TODOS;
    return { todos };
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  }
}