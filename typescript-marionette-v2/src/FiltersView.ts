import Router from "./Router"
import TodoCollection from "./TodoCollection"
import TodoModel from "./TodoModel"
import TypedItemView from "./TypedItemView"

interface FiltersViewOptions extends Backbone.ViewOptions<TodoModel> {
  collection: TodoCollection
}

export default class FiltersView extends TypedItemView<TodoModel> {
  constructor(options: FiltersViewOptions) {
    super(options)

    this.setUi({
      active: ".jsActive",
      all: ".jsAll",
      completed: ".jsCompleted"
    })

    this.setEvents({
      "click @ui.active": this.activeClicked,
      "click @ui.all": this.allClicked,
      "click @ui.completed": this.completedClicked
    })
  }

  activeClicked(e: JQueryMouseEventObject) {
    e.preventDefault()
    Router.instance.navigateTo("active")
  }

  allClicked(e: JQueryMouseEventObject) {
    e.preventDefault()
    Router.instance.navigateTo("")
  }

  completedClicked(e: JQueryMouseEventObject) {
    e.preventDefault()
    Router.instance.navigateTo("completed")
  }

  template = require("./FiltersView.ejs")
}
