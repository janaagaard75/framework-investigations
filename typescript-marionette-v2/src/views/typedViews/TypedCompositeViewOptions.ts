// TODO: Rename this to something about the collection being required. FiltersView does not require it. TypedCompositeView also has to be updated.

interface TypedCompositeViewOptions<
  TModel extends Backbone.Model,
  TCollection extends Backbone.Collection<TModel>
> extends Marionette.CompositeViewOptions<TModel> {

  collection: TCollection
}

export default TypedCompositeViewOptions
