import FilterViewModel from "../viewModels/FilterViewModel"
import Router from "../Router"
import TypedItemView from "./typedViews/TypedItemView"

interface FilterViewOptions extends Backbone.ViewOptions<FilterViewModel> {
  model: FilterViewModel
}

export default class FilterView extends TypedItemView<FilterViewModel> {
  constructor(options: FilterViewOptions) {
    super(FilterView.setDefaultOptions(options))

    this.setUi({
      filterLink: ".jsFilterLink"
    })

    this.setEvents({
      "click @ui.filterLink": this.filterClicked
    })

    this.className = this.isActive() ? "active" : ""

    this.listenTo(this.model.activeFilter, "change:filter", this.render)
  }

  template = require("./FilterView.ejs")

  private isActive(): boolean {
    const isActive = (this.model.filter === this.model.activeFilter.filter)
    return isActive
  }

  private filterClicked(e: JQueryMouseEventObject) {
    e.preventDefault()
    Router.instance.navigateTo(this.model.fragment)
  }

  render() {
    if (this.isActive()) {
      this.$el.addClass("active")
    } else {
      this.$el.removeClass("active")
    }

    return super.render()
  }

  private static setDefaultOptions(options: FilterViewOptions): FilterViewOptions {
    this.setTagName(options, "li")
    return options
  }

  templateHelpers() {
    return {
      active: this.isActive()
    }
  }
}
