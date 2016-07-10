import FilterModel from "./FilterModel"
import TypedItemView from "./TypedItemView"

interface FilterViewOptions extends Backbone.ViewOptions<FilterModel> { }

export default class FilterView extends TypedItemView<FilterModel> {
  constructor(options: FilterViewOptions) {
    super(options)

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

// How is this issue with data that needs to be readable in multiple places solved in Angular?