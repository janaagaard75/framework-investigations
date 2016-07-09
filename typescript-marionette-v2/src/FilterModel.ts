import Filter from "./Filter"

// TODO: Move the filter enum in here?

interface FilterAttributes {
  filter: Filter
}

export default class FilterModel extends Backbone.Model {
  constructor(attributes: FilterAttributes, options?: any) {
    super(attributes, options)
  }

  get filter(): Filter {
    return this.get("filter")
  }

  // set filter(newFilter: Filter) {
  //   this.set("filter", newFilter)
  // }

  static get Active(): FilterModel {
    return new FilterModel({
      filter: Filter.Active
    })
  }

  static get All(): FilterModel {
    return new FilterModel({
      filter: Filter.All
    })
  }

  static get Completed(): FilterModel {
    return new FilterModel({
      filter: Filter.Completed
    })
  }
}
