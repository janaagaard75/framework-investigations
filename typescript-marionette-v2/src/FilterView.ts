import Filter from "./Filter"
import FilterModel from "./FilterModel"
import TypedItemView from "./TypedItemView"

interface FilterViewOptions extends Backbone.ViewOptions<FilterModel> {
  fragment: string,
  model: FilterModel,
  name: string
}

// TODO: Why is this not automatically redrawn when the model changes?
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
  }

  template = require("./FilterView.ejs")

  private isActive(): boolean {
    switch (this.model.filter) {
      case Filter.Active:
        return this.options.name === "Active"

      case Filter.All:
        return this.options.name === "All"

      case Filter.Completed:
        return this.options.name === "Completed"

      default:
        throw new Error(`The filter ${this.model.filter} is not supported.`)
    }
  }

  private filterClicked() {
    // TODO: Implement
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
