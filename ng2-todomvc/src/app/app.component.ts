import { Component } from '@angular/core';

import { Store } from './model/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  newTodoTitle: string;

  constructor(
    private store: Store
  ) {
    this.newTodoTitle = '';
  }

  addTodo() {
    this.store.todos.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
  }
}
