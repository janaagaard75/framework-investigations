import * as Marionette from "backbone.marionette"
import TagName from "./TagName"
import TypedItemViewOptions from "./TypedItemViewOptions"
import UiHash from "./UiHash"

export default class TypedItemView<TModel extends Backbone.Model> extends Marionette.ItemView<TModel> {
  constructor(options: TypedItemViewOptions<TModel>) {
    super(options)
  }

  /** Returns a throttled version of the render method. Use it when listening for an event that might be triggered rapidly one after the other. */
  protected getThrottledRender() {
    return _.throttle(this.render, 10, { leading: false })
  }

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
