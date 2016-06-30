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
      newTodoTitle: ".jsTitleInput"
    })

    this.setEvents({
      "keypress @ui.newTodoTitle": this.newTodoTitleKeypress
    })
  }

  template = require("./AddTodoView.ejs")

  private get newTodoTitleElement(): JQuery {
    return this.ui.newTodoTitle
  }

  private addTodo() {
    const newTodoTitle: string = this.newTodoTitleElement.val().trim()

    const newTodo = new TodoModel({
      title: newTodoTitle
    })

    this.collection.add(newTodo)
  }

  private newTodoTitleKeypress(e: JQueryKeyEventObject) {
    switch (e.which) {
      case KeyCode.Enter:
        this.addTodo()
        break
    }
  }
}
