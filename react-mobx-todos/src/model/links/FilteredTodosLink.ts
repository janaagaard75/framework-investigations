import { TypedLink } from './TypedLink'

type FilterPath = 'active' | 'completed'

export class FilteredTodosLink implements TypedLink {
  constructor(
    public path: FilterPath
  ) { }
}
