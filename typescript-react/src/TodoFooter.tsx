/// <reference path="../typings/browser.d.ts" />
/// <reference path="./interfaces.d.ts"/>

import * as React from "react";

import { ITodoFooterProps } from "./interfaces";
import Filter from "./Filter";
import Utils from "./Utils";

export default class TodoFooter extends React.Component<ITodoFooterProps, {}> {
  public render() {
    const activeTodoWord = Utils.pluralize(this.props.count, "item");
    let clearButton = null;

    if (this.props.completedCount > 0) {
      clearButton = (
        <button
          className="clear-completed"
          onClick={this.props.onClearCompleted}>
          Clear completed
        </button>
      );
    }

    const nowShowing = this.props.nowShowing;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.count}</strong> {activeTodoWord} left
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/"
              className={classNames({ selected: nowShowing === Filter.All }) }>
              All
            </a>
          </li>
          {" "}
          <li>
            <a
              href="#/active"
              className={classNames({ selected: nowShowing === Filter.Active }) }>
              Active
            </a>
          </li>
          {" "}
          <li>
            <a
              href="#/completed"
              className={classNames({ selected: nowShowing === Filter.Completed }) }>
              Completed
            </a>
          </li>
        </ul>
        {clearButton}
      </footer>
    );
  }
}
