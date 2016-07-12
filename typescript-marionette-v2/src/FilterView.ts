import FilterModel from "./FilterModel"
import TypedItemView from "./TypedItemView"

interface FilterViewOptions extends Backbone.ViewOptions<FilterModel> {
  fragment: string,
  name: string
}

export default class FilterView extends TypedItemView<FilterModel> {
  constructor(options: FilterViewOptions) {
    super(FilterView.setDefaultOptions(options))

    this.setUi({
      filterLink: ".jsFilter"
    })

    this.setEvents({
      "click @ui.filterLink": this.filterClicked
    })
  }

  template = require("./FilterView.ejs")

  private filterClicked() {
    // TODO: Implement
  }

  private static setDefaultOptions(options: FilterViewOptions): FilterViewOptions {
    this.setTagName(options, "span")
    return options
  }
}

// TODO: How should this view be instantiated? The Marionette way would be to create a FilterCollectionView that would then loop over this FilterView. The requires calling FilterCollectionView with a FilterCollection, so now RootView needs to now how many filters we have. Can this be avoided?
//
// How should the FilterView be instantiated? Would the code below create a call by reference?
//
//    this.getRegion("filterTodos").show(new FiltersView({
//      model: this.model.filteredTodos.activeFilter
//    }))
//
// Problem: Both TodosView and FilterView needs to know about the active filter. How should this be handled?
//
// RootModel
//   FilteredTodos
//     ActiveFilter: Filter
//     Todos: TodoCollection
//   Filters: FilterCollection

// RootModel
//   ActiveFilter: Filter
//   Filters: FilterCollection
//   Todos: TodoCollection

// In Angular most data is retrieved through services, and since the service layer caches very efficiently, there is no penalty in requesting the same data more that once.
// Idea: Make RootModel a singleton. This means that RootModel data will not be passed around between the views. A view will initialize it's own model or collection in the constructor.