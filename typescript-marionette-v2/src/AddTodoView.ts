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
    // TODO: Calling create here should automagically save the todo. But this does not work, since localStorage has been set on the RootModel and not on the TodoCollection. Consider removing the active filter from the root model and instead making it a computed value based on the current URL.
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
