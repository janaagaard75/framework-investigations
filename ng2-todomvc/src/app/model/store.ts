import { Injectable } from '@angular/core';

import { Todos } from './todos';

@Injectable()
export class Store {
  todos: Todos;

  constructor() {
    this.todos = new Todos();

    this.todos.addTodo('Buy Milk');
    this.todos.addTodo('Write ng2-mobx connector');
  }
}
