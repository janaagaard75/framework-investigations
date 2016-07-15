import Filter from "./Filter"
import FilterModel from "./FilterModel"
import FilterViewModelAttributes from "./FilterViewModelAttributes"
import Fragment from "./Fragment"

export default class FilterViewModel extends Backbone.Model {
  constructor(attributes: FilterViewModelAttributes, options?: any) {
    super(attributes, options)
  }

  get activeFilter(): FilterModel {
    return this.get("activeFilter")
  }

  get filter(): Filter {
    return this.get("filter")
  }

  get fragment(): Fragment {
    return this.get("fragment")
  }

  get name(): string {
    return this.get("name")
  }
}
