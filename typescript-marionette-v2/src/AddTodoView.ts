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
      newTodoTitle: ".jsNewTodoTitle"
    })

    this.setEvents({
      "keypress @ui.newTodoTitle": this.newTodoTitleKeypress
    })
  }

  template = require("./AddTodoView.ejs")

  private get newTodoTitleElement(): JQuery {
    return this.ui.newTodoTitle
  }

  private newTodoTitleKeypress(e: JQueryKeyEventObject) {
    if (e.which === KeyCode.Enter) {
      const newTodoTitle: string = this.newTodoTitleElement.val().trim()
      console.info(`New todo title: ${newTodoTitle}.`)

      // const newTodo = new TodoModel({
      //   title: newTodoTitle
      // })

      // this.collection.add(newTodo)
    }
  }
}
