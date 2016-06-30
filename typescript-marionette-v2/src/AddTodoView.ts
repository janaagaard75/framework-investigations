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
      addButton: ".jsAddButton",
      todoTitle: ".jsTitleInput"
    })

    this.setEvents({
      "click @ui.addButton": this.addButtonClicked,
      // Keypress is not triggered by the Escape key.
      "keyup @ui.todoTitle": this.todoTitleKeyup
    })
  }

  template = require("./AddTodoView.ejs")

  private get todoTitleElement(): JQuery {
    return this.ui.todoTitle
  }

  private addButtonClicked(e: JQueryMouseEventObject) {
    e.preventDefault()
    this.addTodo()
  }

  private addTodo() {
    const newTodo = new TodoModel({
      title: this.todoTitleElement.val().trim()
    })
    this.collection.add(newTodo)

    this.todoTitleElement.val("")
  }

  private todoTitleKeyup(e: JQueryKeyEventObject) {
    switch (e.which) {
      case KeyCode.Escape:
        console.info("Escape pressed.")
        break
    }
  }
}
