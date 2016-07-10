interface FilterModelAttributes {
  active: boolean
}

export default class FilterModel extends Backbone.Model {
  constructor(attributes: FilterModelAttributes, options?: any) {
    super(attributes, options)
  }

  get active(): boolean {
    return this.get("active")
  }
}
