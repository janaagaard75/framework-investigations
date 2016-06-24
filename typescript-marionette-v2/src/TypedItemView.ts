import * as Marionette from "backbone.marionette"

type TagName = "div" | "li"

interface UiHash {
  [selector: string]: string
}

export default class TypedItemView<TModel extends Backbone.Model> extends Marionette.ItemView<TModel> {
  /** Call setEvents in the constructor in the initialize method. */
  protected setEvents(events: Backbone.EventsHash) {
    this.events = <any>events
    this.delegateEvents()
  }

  protected static setTagName(options: Backbone.ViewOptions<any>, tagName: TagName): Backbone.ViewOptions<any> {
    options.tagName = tagName
    return options
  }

  protected setUi(ui: UiHash) {
    this.ui = ui
  }
}
