import Filter from "./Filter"

interface FilterModelAttributes {
  filter: Filter
}

export default class FilterModel extends Backbone.Model {
  constructor(attributes: FilterModelAttributes) {
    super(attributes)
  }

  get filter(): Filter {
    return this.get("filter")
  }

  set filter(newFilter: Filter) {
    this.set("filter", newFilter)
  }
}
