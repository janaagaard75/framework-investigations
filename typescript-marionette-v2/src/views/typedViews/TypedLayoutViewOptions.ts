import * as Marionette from "backbone.marionette"

interface TypedLayoutViewOptions<TModel extends Backbone.Model> extends Marionette.LayoutViewOptions<TModel> {
  /** The model is required instead of being optional. */
  model: TModel
}

export default TypedLayoutViewOptions
