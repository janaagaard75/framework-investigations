import * as Marionette from "backbone.marionette"
import Filter from "../model/Filter"
import FilterModel from "../model/FilterModel"
import FilterView from "./FilterView"
import FilterViewModel from "../viewModels/FilterViewModel"

class FilterViewModelCollection extends Backbone.Collection<FilterViewModel> {
}

interface FiltersViewOptions extends Marionette.CompositeViewOptions<FilterViewModel> {
  activeFilter: FilterModel
}

export default class FiltersView extends Marionette.CompositeView<FilterViewModel, FilterView> {
  constructor(options: FiltersViewOptions) {
    super(FiltersView.setDefaultOptions(options))

    this.collection = new Backbone.Collection<FilterViewModel>([
      new FilterViewModel({
        activeFilter: options.activeFilter,
        filter: Filter.All,
        fragment: "",
        name: "All"
      }),
      new FilterViewModel({
        activeFilter: options.activeFilter,
        filter: Filter.Active,
        fragment: "active",
        name: "Active"
      }),
      new FilterViewModel({
        activeFilter: options.activeFilter,
        filter: Filter.Completed,
        fragment: "completed",
        name: "Completed"
      })]
    )
  }

  childView = FilterView
  template = require("./FiltersView.ejs")

  private static setDefaultOptions(options: FiltersViewOptions): FiltersViewOptions {
    options.childViewContainer = ".jsChildViewContainer"
    return options
  }
}
