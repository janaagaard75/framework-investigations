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
    // TODO: Remove this span - it's not allowed by Bootstrap's CSS. 1) Is it possible to move the li-element from FiltersView into FilterView? Setting the tag name in here to li results in double li elements. The li elements in FilterView is required to have an element to bind the regions to. 2) Alternatively delete FilterView and let FiltersView handle everything. This should work, but feels like a less elegang solution, since we have to manually distinguish between the links being clicked. 3) Make the list of filters a Backbone Collection and use a Marionette CollectionView. This probably gives the cleanest code, but it feel wrong to create Backbone classes for static data. A collection FilterViewModels are required.
    this.setTagName(options, "li")
    return options
  }

  templateHelpers() {
    return {
      active: this.isActive()
    }
  }
}
