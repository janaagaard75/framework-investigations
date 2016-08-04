interface TypedItemViewOptions<TModel extends Backbone.Model> extends Backbone.ViewOptions<TModel> {
  // Required instead of optional.
  model: TModel
}

export default TypedItemViewOptions
