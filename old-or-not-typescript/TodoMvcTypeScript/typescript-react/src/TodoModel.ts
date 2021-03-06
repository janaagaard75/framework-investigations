/// <reference path="../typings/browser.d.ts" />
/// <reference path="./interfaces.d.ts"/>

import { ChangeFunction, ITodo, ITodoModel } from "./interfaces";
import Utils from "./Utils";

// Generic "model" object. You can use whatever framework you want. For this application it may not even be worth separating this logic out, but we do this to demonstrate one way to separate out parts of your application.
export default class TodoModel implements ITodoModel {
  constructor(key: string) {
    this.key = key;
    this.todos = Utils.store(key);
    this.onChanges = [];
  }

  public key: string;
  public todos: Array<ITodo>;
  public onChanges: Array<any>;

  public subscribe(onChange: ChangeFunction) {
    this.onChanges.push(onChange);
  }

  public inform() {
    Utils.store(this.key, this.todos);
    this.onChanges.forEach(function (onChange: ChangeFunction) { onChange(); });
  }

  public addTodo(title: string) {
    this.todos = this.todos.concat({
      completed: false,
      id: Utils.uuid(),
      title: title
    });

    this.inform();
  }

  public toggleAll(checked: Boolean) {
    // Note: It's usually better to use immutable data structures since they're easier to reason about and React works very well with them. That's why we use map(), filter() and reduce() everywhere instead of mutating the array or todo items themselves.
    this.todos = this.todos.map<ITodo>((todo: ITodo) => {
      return Utils.extend({}, todo, { completed: checked });
    });

    this.inform();
  }

  public toggle(todoToToggle: ITodo) {
    this.todos = this.todos.map<ITodo>((todo: ITodo) => {
      return todo !== todoToToggle ?
        todo :
        Utils.extend({}, todo, { completed: !todo.completed });
    });

    this.inform();
  }

  public destroy(todoToDestroy: ITodo) {
    this.todos = this.todos.filter(function (todo: ITodo) {
      return todo !== todoToDestroy;
    });

    this.inform();
  }

  public save(todoToSave: ITodo, text: string) {
    this.todos = this.todos.map(function (todo: ITodo) {
      return todo !== todoToSave ? todo : Utils.extend({}, todo, { title: text });
    });

    this.inform();
  }

  public clearCompleted() {
    this.todos = this.todos.filter(function (todo: ITodo) {
      return !todo.completed;
    });

    this.inform();
  }
}
