interface TypedCompositeViewOptions<
  TModel extends Backbone.Model,
  TCollection extends Backbone.Collection<TModel>
> extends Marionette.CompositeViewOptions<TModel> {

  collection: TCollection
}

export default TypedCompositeViewOptions
