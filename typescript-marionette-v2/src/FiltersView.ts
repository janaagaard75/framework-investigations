import FilterView from "./FilterView"
import Router from "./Router"
import TodoModel from "./TodoModel"
import TypedLayoutView from "./TypedLayoutView"

export default class FiltersView extends TypedLayoutView<TodoModel> {
  constructor() {
    super()

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

  private filters = [
    {
      fragment: "",
      name: "All"
    },
    {
      fragment: "active",
      name: "Active"
    },
    {
      fragment: "completed",
      name: "Completed"
    }
  ]

  template = require("./FiltersView.ejs")

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

  onShow() {
    this.filters.forEach(filter => {
      this.addRegion(filter.name, ".js-" + filter.name).show(new FilterView({
        fragment: filter.fragment,
        name: filter.name
      }))
    })
  }

  templateHelpers() {
    return {
      filters: this.filters
    }
  }
}