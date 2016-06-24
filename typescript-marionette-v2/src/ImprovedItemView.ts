import * as Marionette from "backbone.marionette"

interface UiHash {
  [selector: string]: string
}

export default class ImprovedItemView<TModel extends Backbone.Model> extends Marionette.ItemView<TModel> {
  /** Call setEvents in the constructor in the initialize method. */
  protected setEvents(events: Backbone.EventsHash) {
    this.events = <any>events
    this.delegateEvents()
  }

  protected setUi(ui: UiHash) {
    this.ui = ui
  }
}
