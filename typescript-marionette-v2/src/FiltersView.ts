import Filter from "./Filter"
import FilterModel from "./FilterModel"
import FilterView from "./FilterView"
import FilterViewModel, { FilterViewModelAttributes } from "./FilterViewModel"
import Router from "./Router"
import TypedLayoutView from "./TypedLayoutView"

interface FiltersViewOptions extends Backbone.ViewOptions<FilterModel> {
  model: FilterModel
}

export default class FiltersView extends TypedLayoutView<FilterModel> {
  constructor(options: FiltersViewOptions) {
    super(options)
  }

  private filters: Array<FilterViewModelAttributes> = [
    {
      activeFilter: this.model,
      filter: Filter.All,
      fragment: "",
      name: "All"
    },
    {
      activeFilter: this.model,
      filter: Filter.Active,
      fragment: "active",
      name: "Active"
    },
    {
      activeFilter: this.model,
      filter: Filter.Completed,
      fragment: "completed",
      name: "Completed"
    }
  ]

  template = require("./FiltersView.ejs")

  onShow() {
    this.filters.forEach(filter => {
      this
        .addRegion(filter.name, ".js" + filter.name)
        .show(
        new FilterView({
          model: new FilterViewModel(filter)
        }))
    })
  }

  templateHelpers() {
    return {
      filters: this.filters
    }
  }
}
