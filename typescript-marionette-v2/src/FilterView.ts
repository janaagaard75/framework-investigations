import Filter from "./Filter"
import FilterModel from "./FilterModel"
import Fragment from "./Fragment"
import TypedItemView from "./TypedItemView"

export interface FilterViewModelAttributes {
  activeFilter: FilterModel,
  filter: Filter,
  fragment: Fragment,
  name: string
}

export class FilterViewModel extends Backbone.Model {
  constructor(attributes: FilterViewModelAttributes, options?: any) {
    super(attributes, options)
  }

  get activeFilter(): FilterModel {
    return this.get("activeFilter")
  }

  get filter(): Filter {
    return this.get("filter")
  }

  get fragment(): Fragment {
    return this.get("fragment")
  }

  get name(): string {
    return this.get("name")
  }
}

interface FilterViewOptions extends Backbone.ViewOptions<FilterViewModel> {
  model: FilterViewModel
}

export default class FilterView extends TypedItemView<FilterViewModel> {
  constructor(options: FilterViewOptions) {
    super(FilterView.setDefaultOptions(options))

    this.setUi({
      filterLink: ".jsFilter"
    })

    this.setEvents({
      "click @ui.filterLink": this.filterClicked
    })

    this.listenTo(this.model.activeFilter, "change:filter", this.render)
  }

  template = require("./FilterView.ejs")

  private isActive(): boolean {
    const isActive = this.model.filter === this.model.activeFilter.filter
    return isActive
  }

  private filterClicked() {
    // TODO: Implement
    window.console.info(`Filter ${this.model.filter} clicked.`)
  }

  private static setDefaultOptions(options: FilterViewOptions): FilterViewOptions {
    this.setTagName(options, "span")
    return options
  }

  templateHelpers() {
    return {
      active: this.isActive(),
      name: this.model.name // TODO: Is this necessary?
    }
  }
}
