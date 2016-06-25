import KeyCode from "./KeyCode"
import TodoCollection from "./TodoCollection"
import TypedItemView from "./TypedItemView"

// TODO: Is this dummy model really necessary?
class DummyModel extends Backbone.Model { }

interface AddTodoViewOptions extends Backbone.ViewOptions<DummyModel> {
  collection: TodoCollection
}

export default class AddTodoView extends TypedItemView<DummyModel> {
  constructor(options: AddTodoViewOptions) {
    super(options)

    // TODO: Is this line necessary?
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
    }
  }
}
