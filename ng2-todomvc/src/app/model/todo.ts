export class Todo {
  completed: boolean;

  constructor(
    public title: string
  ) {
    this.completed = false;
  }

  toggle() {
    this.completed = !this.completed;
  }

  complete() {
    this.completed = true;
  }
}
