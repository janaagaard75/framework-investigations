import FilterViewModel from "./FilterViewModel"
import Router from "../Router"
import TypedItemView from "./typedViews/TypedItemView"

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

  private filterClicked(e: JQueryMouseEventObject) {
    e.preventDefault()
    Router.instance.navigateTo(this.model.fragment)
  }

  private static setDefaultOptions(options: FilterViewOptions): FilterViewOptions {
    // TODO: Remove this span - it's not allowed by Bootstrap's CSS. 1) Is it possible to move the li-element from FiltersView into FilterView? 2) Alternatively delete FilterView and let FiltersView handle everything. This should work, but feels like a less elegang solution. 3) Make the list of filters a Backbone Collection and us a Marionette CollectionView.
    this.setTagName(options, "span")
    return options
  }

  templateHelpers() {
    return {
      active: this.isActive()
    }
  }
}
