import * as Marionette from "backbone.marionette"
import RootModel from "./RootModel"

export default class RootView extends Marionette.LayoutView<RootModel> {
  constructor() {
    super({
      el: "#rootPlaceholder"
    })
  }

  template = "#rootTemplate"
}
