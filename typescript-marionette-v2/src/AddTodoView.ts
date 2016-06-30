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
      titleInput: ".jsTitleInput"
    })

    this.setEvents({
      "click @ui.addButton": this.addButtonClicked,
      // Keypress is not triggered by the Escape key.
      "keyup @ui.titleInput": this.titleInputKeyup
    })
  }

  template = require("./AddTodoView.ejs")

  private get titleElement(): JQuery {
    return this.ui.titleInput
  }

  private addButtonClicked(e: JQueryMouseEventObject) {
    e.preventDefault()
    this.addTodo()
  }

  private addTodo() {
    const title = this.titleElement.val().trim()
    if (title === "") {
      return
    }

    const newTodo = new TodoModel({
      title: title
    })
    this.collection.add(newTodo)

    this.clearTitle()
  }

  private clearTitle() {
    this.titleElement.val("")
  }

  private titleInputKeyup(e: JQueryKeyEventObject) {
    switch (e.which) {
      case KeyCode.Escape:
        this.clearTitle()
        break
    }
  }
}
