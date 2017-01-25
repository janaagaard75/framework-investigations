import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';

import { Store } from './model/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  newTodoTitle: string;

  constructor(
    private store: Store
  ) {
    this.newTodoTitle = '';

    this.store.todos.addTodo('Buy Milk');
    this.store.todos.addTodo('Write ng2-mobx connector');
  }

  addTodo() {
    this.store.todos.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
  }
}
