import { action } from 'mobx';
import { observable as mobxObservable } from 'mobx';

export class Todo {
  @mobxObservable completed: boolean;

  constructor(
    public title: string
  ) {
    this.completed = false;
  }

  @action toggle() {
    this.completed = !this.completed;
  }

  @action complete() {
    this.completed = true;
  }
}
