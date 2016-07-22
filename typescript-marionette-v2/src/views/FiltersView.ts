import Filter from "../model/Filter"
import FilterModel from "../model/FilterModel"
import FilterView from "./FilterView"
import FilterViewModel from "./FilterViewModel"
import FilterViewModelAttributes from "./FilterViewModelAttributes"
import TypedLayoutView from "../TypedLayoutView"

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

  private static getFilterCssClass(filter: FilterViewModelAttributes): string {
    const cssClass = `js${FiltersView.getFilterId(filter)}`
    return cssClass
  }

  private static getFilterId(filterAttributes: FilterViewModelAttributes): string {
    const filterId = `Filter${filterAttributes.filter}`
    return filterId
  }

  onShow() {
    this.filters.forEach(filterAttributes => {
      const regionName = FiltersView.getFilterId(filterAttributes)
      const regionSelector = `.${FiltersView.getFilterCssClass(filterAttributes)}`

      this
        .addRegion(regionName, regionSelector)
        .show(
        new FilterView({
          model: new FilterViewModel(filterAttributes)
        }))
    })
  }

  templateHelpers() {
    return {
      filters: this.filters,
      getFilterCssClass: FiltersView.getFilterCssClass
    }
  }
}
