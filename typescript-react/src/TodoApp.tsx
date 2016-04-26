/// <reference path="../typings/browser.d.ts" />
/// <reference path="./interfaces.d.ts"/>

declare var Router;

import * as React from "react";
import * as ReactDOM from "react-dom";

import { IAppProps, IAppState, ITodo } from "./interfaces";
import Filter from "./Filter";
import KeyCode from "./KeyCode";
import TodoFooter from "./TodoFooter";
import TodoItem from "./TodoItem";
import TodoModel from "./TodoModel";

class TodoApp extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      editing: null,
      nowShowing: Filter.All
    };
  }

  public state: IAppState;

  public componentDidMount() {
    const router = Router({
      "/": this.setState.bind(this, { nowShowing: Filter.All }),
      "/active": this.setState.bind(this, { nowShowing: Filter.Active }),
      "/completed": this.setState.bind(this, { nowShowing: Filter.Completed })
    });
    router.init("/");
  }

  public handleNewTodoKeyDown(event: React.KeyboardEvent) {
    if (event.keyCode !== KeyCode.Enter) {
      return;
    }

    event.preventDefault();

    const val = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["newField"]).value.trim();

    if (val) {
      this.props.model.addTodo(val);
      ReactDOM.findDOMNode<HTMLInputElement>(this.refs["newField"]).value = "";
    }
  }

  public toggleAll(event: React.FormEvent) {
    const target: any = event.target;
    const checked = target.checked;
    this.props.model.toggleAll(checked);
  }

  public toggle(todoToToggle: ITodo) {
    this.props.model.toggle(todoToToggle);
  }

  public destroy(todo: ITodo) {
    this.props.model.destroy(todo);
  }

  public edit(todo: ITodo) {
    this.setState({ editing: todo.id });
  }

  public save(todoToSave: ITodo, text: string) {
    this.props.model.save(todoToSave, text);
    this.setState({ editing: null });
  }

  public cancel() {
    this.setState({ editing: null });
  }

  public clearCompleted() {
    this.props.model.clearCompleted();
  }

  public render() {
    // TODO: Figure out how to move these declarations down.
    let footer;
    let main;
    const todos = this.props.model.todos;

    const shownTodos = todos.filter((todo) => {
      switch (this.state.nowShowing) {
        case Filter.Active:
          return !todo.completed;

        case Filter.Completed:
          return todo.completed;

        // TODO: Is it possible to avoid this default state since we're now using an enum?
        default:
          return true;
      }
    });

    const todoItems = shownTodos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={this.toggle.bind(this, todo) }
          onDestroy={this.destroy.bind(this, todo) }
          onEdit={this.edit.bind(this, todo) }
          editing={this.state.editing === todo.id}
          onSave={this.save.bind(this, todo) }
          onCancel={ e => this.cancel() }
          />
      );
    });

    // Note: It's usually better to use immutable data structures since they're
    // easier to reason about and React works very well with them. That's why
    // we use map(), filter() and reduce() everywhere instead of mutating the
    // array or todo items themselves.
    const activeTodoCount = todos.reduce(function (sum: number, todo: ITodo) {
      return todo.completed ? sum : sum + 1;
    }, 0);

    const completedCount = todos.length - activeTodoCount;

    if (activeTodoCount || completedCount) {
      footer =
        <TodoFooter
          count={activeTodoCount}
          completedCount={completedCount}
          nowShowing={this.state.nowShowing}
          onClearCompleted={ e => this.clearCompleted() }
          />;
    }

    if (todos.length) {
      main = (
        <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
            onChange={ e => this.toggleAll(e) }
            checked={activeTodoCount === 0}
            />
          <ul className="todo-list">
            {todoItems}
          </ul>
        </section>
      );
    }

    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <input
            ref="newField"
            className="new-todo"
            placeholder="What needs to be done?"
            onKeyDown={ e => this.handleNewTodoKeyDown(e) }
            autoFocus={true}
            />
        </header>
        {main}
        {footer}
      </div>
    );
  }
}

const model = new TodoModel("react-todos");

function render() {
  ReactDOM.render(
    <TodoApp model={model}/>,
    document.getElementsByClassName("todoapp")[0]
  );
}

model.subscribe(render);
render();
