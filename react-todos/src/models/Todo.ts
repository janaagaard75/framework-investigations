export class Todo {
  constructor(
    public readonly id: number,
    public text: string,
    public completed: boolean = false
  ) { }

  public toggle(): void {
    this.completed = !this.completed
  }
}