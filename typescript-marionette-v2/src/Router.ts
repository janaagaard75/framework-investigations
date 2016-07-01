import * as Marionette from "backbone.marionette"

export default class Router extends Marionette.AppRouter {
  constructor() {
    super({
      routes: {
        "completed": "completed"
      }
    })
  }

  completed() {
    console.info("'completed' route triggered.")
  }
}
