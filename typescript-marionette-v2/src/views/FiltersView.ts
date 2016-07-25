import Filter from "../model/Filter"
import FilterModel from "../model/FilterModel"
import FilterView from "./FilterView"
import FilterViewModel from "./FilterViewModel"
import FilterViewModelAttributes from "./FilterViewModelAttributes"
import TypedLayoutView from "./typedViews/TypedLayoutView"
import TypedLayoutViewOptions from "./typedViews/TypedLayoutViewOptions"

export default class FiltersView extends TypedLayoutView<FilterModel> {
  constructor(options: TypedLayoutViewOptions<FilterModel>) {
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

  private static getActiveCssClass(filterAttributes: FilterViewModelAttributes): string {
    if (filterAttributes.filter === filterAttributes.activeFilter.filter) {
      return "active"
    } else {
      return ""
    }
  }

  private static getFilterCssClass(filterAttributes: FilterViewModelAttributes): string {
    const cssClass = `js${FiltersView.getFilterId(filterAttributes)}`
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

      this.addRegion(regionName, regionSelector)
        .show(new FilterView({
          model: new FilterViewModel(filterAttributes)
        }))
    })
  }

  templateHelpers() {
    return {
      filters: this.filters,
      getActiveCssClass: FiltersView.getActiveCssClass,
      getFilterCssClass: FiltersView.getFilterCssClass
    }
  }
}
