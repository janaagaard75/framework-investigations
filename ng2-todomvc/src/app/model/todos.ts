import { action } from 'mobx';
import { computed } from 'mobx';
import { observable as mobxObservable } from 'mobx';

import { Todo } from './todo';

type Filter = boolean | null;

export class Todos {
  @mobxObservable currentFilter: Filter;
  @mobxObservable todos: Array<Todo>;

  constructor() {
    this.currentFilter = null;
    this.todos = [];
  }

  @computed get filteredTodos(): Array<Todo> {
    return this.getFilteredTodos(this.currentFilter);
  }

  @computed get numberOfActiveTodos(): number {
    return this.getFilteredTodos(false).length;
  }

  @action addTodo(title: string): void {
    this.todos.push(new Todo(title));
  }

  @action clearCompleted(): void {
    this.todos = this.getFilteredTodos(false);
  }

  @action completeAll(): void {
    this.todos.forEach(todo => todo.complete());
  }

  @action removeTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  @action showActive(): void {
     this.currentFilter = false;
  }

  @action showAll(): void {
    this.currentFilter = null;
  }

  @action showCompleted(): void {
    this.currentFilter = true;
  }

  private getFilteredTodos(filter: Filter): Array<Todo> {
    if (filter === null) {
      return this.todos;
    }

    return this.todos.filter(todo => todo.completed === filter);
  }
}
