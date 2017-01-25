import { Injectable } from '@angular/core';

import { Todos } from './todos';

@Injectable()
export class Store {
  todos: Todos;

  constructor() {
    this.todos = new Todos();
  }
}
