import { Todo } from './todo';

type Filter = boolean | null;

export class Todos {
  currentFilter: Filter;
  todos: Array<Todo>;

  constructor() {
    this.currentFilter = null;
    this.todos = [];
  }

  get filteredTodos(): Array<Todo> {
    return this.getFilteredTodos(this.currentFilter);
  }

  get numberOfActiveTodos(): number {
    return this.getFilteredTodos(false).length;
  }

  addTodo(title: string): void {
    this.todos.push(new Todo(title));
  }

  clearCompleted(): void {
    this.todos = this.getFilteredTodos(false);
  }

  completeAll(): void {
    this.todos.forEach(todo => todo.complete());
  }

  removeTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  showActive(): void {
     this.currentFilter = false;
  }

  showAll(): void {
    this.currentFilter = null;
  }

  showCompleted(): void {
    this.currentFilter = true;
  }

  private getFilteredTodos(filter: Filter): Array<Todo> {
    if (filter === null) {
      return this.todos;
    }

    return this.todos.filter(todo => todo.completed === filter);
  }
}
