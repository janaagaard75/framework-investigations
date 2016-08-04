import AddTodoViewModel from "../viewModels/AddTodoViewModel"
import KeyCode from "./KeyCode"
import TypedItemView from "./typedViews/TypedItemView"
import TypedItemViewOptions from "./typedViews/TypedItemViewOptions"
import TodoModel from "../model/TodoModel"

export default class AddTodoView extends TypedItemView<AddTodoViewModel> {
  constructor(options: TypedItemViewOptions<AddTodoViewModel>) {
    super(options)

    this.setUi({
      addButton: ".jsAddButton",
      titleInput: ".jsTitleInput"
    })

    this.setEvents({
      "click @ui.addButton": this.addButtonClicked,
      // Keypress is not triggered by the Escape key, so using keyup instead.
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

    this.collection.create(newTodo)

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
