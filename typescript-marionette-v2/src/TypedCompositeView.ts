// TODO: Why does the compiler not complain when Marionette is missing, but it fails at run time?
import * as Marionette from "backbone.marionette"
import TypedCompositeViewOptions from "./TypedCompositeViewOptions"

export default class TypedCompositeView<
  TModel extends Backbone.Model,
  TCollection extends Backbone.Collection<TModel>,
  TView extends Marionette.View<TModel>
> extends Marionette.CompositeView<TModel, TView> {

  constructor(options: TypedCompositeViewOptions<TModel, TCollection>) {
    super(options)
  }

  collection: TCollection
}
