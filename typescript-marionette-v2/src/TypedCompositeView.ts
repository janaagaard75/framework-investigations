// TODO: Why does the compiler not complain when Marionette is missing, but it fails at run time?
import * as Marionette from "backbone.marionette"
import TypedCompositeViewOptions from "./TypedCompositeViewOptions"

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

  // TODO: Figure out how to define a template for the setDefaultOptions method.
}

export default TypedCompositeView
