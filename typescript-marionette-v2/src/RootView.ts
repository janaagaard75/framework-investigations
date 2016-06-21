import * as Marionette from "backbone.marionette"
import RootModel from "./RootModel"

interface RootViewOptions extends Backbone.ViewOptions<RootModel> {
}

export default class RootView extends Marionette.ItemView<RootModel> {
  constructor(options: RootViewOptions) {
    super(RootView.setPlaceholderElement(options))
  }

  template = require("./RootViewTemplate.ejs")

  private static setPlaceholderElement(options: RootViewOptions): RootViewOptions {
    if (!options.el) {
      options.el = "#rootPlaceholder"
    }

    return options
  }
}
