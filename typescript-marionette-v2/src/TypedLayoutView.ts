import * as Marionette from "backbone.marionette"
import TagName from "./TagName"
import UiHash from "./UiHash"

export default class TypedLayoutView<TModel extends Backbone.Model> extends Marionette.LayoutView<TModel> {
  /** Call setEvents in the constructor in the initialize method. */
  protected setEvents(events: Backbone.EventsHash) {
    this.events = <any>events
    this.delegateEvents()
  }

  protected static setTagName(options: Marionette.LayoutViewOptions<any>, tagName: TagName): Marionette.LayoutViewOptions<any> {
    options.tagName = tagName
    return options
  }

  protected setUi(ui: UiHash) {
    this.ui = ui
  }
}
