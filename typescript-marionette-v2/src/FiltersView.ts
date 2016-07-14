import FilterModel from "./FilterModel"
import FilterView from "./FilterView"
import Router from "./Router"
import TypedLayoutView from "./TypedLayoutView"

interface FiltersViewOptions extends Backbone.ViewOptions<FilterModel> {
  model: FilterModel
}

export default class FiltersView extends TypedLayoutView<FilterModel> {
  constructor(
    private options: FiltersViewOptions
  ) {
    super(options)

    // TODO: Delete these UI and events, since it will be handled by FilterView.
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
      this.addRegion(filter.name, ".js" + filter.name).show(new FilterView({
        fragment: filter.fragment,
        model: this.model,
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
