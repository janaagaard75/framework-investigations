import * as Marionette from "backbone.marionette"
import TypedCompositeViewOptions from "./TypedCompositeViewOptions"

/** CompositeView where it's required to supply a collection to the view. */
abstract class TypedCompositeView<
  TModel extends Backbone.Model,
  TCollection extends Backbone.Collection<TModel>,
  TView extends Marionette.View<TModel>
> extends Marionette.CompositeView<TModel, TView> {
  constructor(options: TypedCompositeViewOptions<TModel, TCollection>) {
    super(options)
  }

  collection: TCollection

  /** Returns a throttled version of the render method. Use it when listening for an event that might be triggered rapidly one after the other. */
  protected getThrottledRender() {
    return _.throttle(this.render, 10, { leading: false })
  }
}

export default TypedCompositeView
