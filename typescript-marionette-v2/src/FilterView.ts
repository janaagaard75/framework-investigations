import TodoCollection from "./TodoCollection"
import TodoModel from "./TodoModel"
import TypedItemView from "./TypedItemView"

interface FilterViewOptions extends Backbone.ViewOptions<TodoModel> {
  collection: TodoCollection
}

export default class FilterView extends TypedItemView<TodoModel> {
  constructor(options: FilterViewOptions) {
    super(options)

    this.setUi({
      active: ".jsActive",
      all: ".jsAll",
      completed: ".jsCompleted"
    })

    this.setEvents({
      "click @ui.completed": this.completedClicked
    })
  }

  completedClicked(e: JQueryMouseEventObject) {
    e.preventDefault()
    console.info("Completed clicked.")
    // TODO: Need to trigger the navigate method on the router. But how? Make the router a singleton?
  }

  template = require("./FilterView.ejs")
}
