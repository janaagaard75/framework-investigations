import Filter from "./Filter"
import FilterModel from "./FilterModel"
import Fragment from "./Fragment"

interface FilterViewModelAttributes {
  activeFilter: FilterModel,
  filter: Filter,
  fragment: Fragment,
  name: string
}

export default FilterViewModelAttributes
