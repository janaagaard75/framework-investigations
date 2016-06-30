import KeyCode from "./KeyCode"
import TodoCollection from "./TodoCollection"
import TypedItemView from "./TypedItemView"
import TodoModel from "./TodoModel"

interface AddTodoViewOptions extends Backbone.ViewOptions<TodoModel> {
  collection: TodoCollection
}

export default class AddTodoView extends TypedItemView<TodoModel> {
  constructor(options: AddTodoViewOptions) {
    super(options)

    // TODO: Is this line necessary, or is this already done by Backbone or Marionette?
    this.collection = options.collection

    this.setUi({
      todoTitle: ".jsTitleInput"
    })

    this.setEvents({
      "keypress @ui.todoTitle": this.todoTitleKeypress
    })
  }

  template = require("./AddTodoView.ejs")

  private get todoTitleElement(): JQuery {
    return this.ui.todoTitle
  }

  private addTodo() {
    const newTodo = new TodoModel({
      title: this.todoTitleElement.val().trim()
    })

    this.collection.add(newTodo)
  }

  private todoTitleKeypress(e: JQueryKeyEventObject) {
    switch (e.which) {
      case KeyCode.Enter:
        this.addTodo()
        break
    }
  }
}
