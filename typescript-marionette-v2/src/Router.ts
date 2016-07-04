import * as Marionette from "backbone.marionette"

type Fragment = "" | "active" | "completed"

class RouterInstance extends Marionette.AppRouter {
  constructor() {
    super({
      routes: {
        "": "all",
        "active": "active",
        "completed": "completed"
      }
    })
  }

  all() {
    console.info("'all' route triggered.")
  }

  active() {
    console.info("'active' route triggered.")
  }

  completed() {
    console.info("'completed' route triggered.")
  }

  navigateTo(fragment: Fragment) {
    this.navigate(fragment, {
      trigger: true
    })
  }
}

export default class Router {
  private static routerInstance: RouterInstance = null

  static get instance(): RouterInstance {
    this.instantiate()
    return this.routerInstance
  }

  static instantiate() {
    if (this.routerInstance === null) {
      this.routerInstance = new RouterInstance()

      Backbone.history.start({
        pushState: true
      })
    }
  }
}
