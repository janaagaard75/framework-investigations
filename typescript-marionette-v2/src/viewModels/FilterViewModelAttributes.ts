import Filter from "../model/Filter"
import FilterModel from "../model/FilterModel"
import Fragment from "../Fragment"

interface FilterViewModelAttributes {
  activeFilter: FilterModel,
  filter: Filter,
  fragment: Fragment,
  name: string
}

export default FilterViewModelAttributes
