import Filter from "./Filter"
import FilterModel from "./FilterModel"
import TypedItemView from "./TypedItemView"

interface FilterViewOptions extends Backbone.ViewOptions<FilterModel> {
  fragment: string,
  model: FilterModel,
  name: string
}

export default class FilterView extends TypedItemView<FilterModel> {
  constructor(
    private options: FilterViewOptions
  ) {
    super(FilterView.setDefaultOptions(options))

    this.setUi({
      filterLink: ".jsFilter"
    })

    this.setEvents({
      "click @ui.filterLink": this.filterClicked
    })

    this.listenTo(this.options.model, "change:filter", this.render)
  }

  template = require("./FilterView.ejs")

  private filterClicked() {
    // TODO: Implement
  }

  private isActive(): boolean {
    switch (name) {
      case "Active":
        return this.options.model.filter === Filter.Active

      case "All":
        return this.options.model.filter === Filter.All

      case "Completed":
        return this.options.model.filter === Filter.Completed

      default:
        throw new Error("Unknown name.")
    }
  }

  private static setDefaultOptions(options: FilterViewOptions): FilterViewOptions {
    this.setTagName(options, "span")
    return options
  }

  templateHelpers() {
    return {
      active: this.isActive(),
      name: this.options.name
    }
  }
}
