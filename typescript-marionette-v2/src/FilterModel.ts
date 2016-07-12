import Filter from "./Filter"

interface FilterModelAttributes {
  filter: Filter
}

export default class FilterModel extends Backbone.Model {
  constructor(attributes: FilterModelAttributes, options?: any) {
    super(attributes, options)
  }

  get filter(): Filter {
    return this.get("filter")
  }

  set filter(newFilter: Filter) {
    this.set("filter", newFilter)
  }

  // TODO: Consider adding attributes for the three kinds of filters. That way other classes will only have to import FilterModel and not also Filter.
}
