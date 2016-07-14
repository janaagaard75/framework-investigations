import Filter from "./Filter"
import FilterModel from "./FilterModel"
import Fragment from "./Fragment"

// TODO: Figure out a rule for when several things belong to the same file. Either move this to a separate file or include Filter in FilterModel.ts.
export interface FilterViewModelAttributes {
  activeFilter: FilterModel,
  filter: Filter,
  fragment: Fragment,
  name: string
}

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
