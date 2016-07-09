import * as Marionette from "backbone.marionette"
import FilterModel from "./FilterModel"
import RootModel from "./RootModel"

type Fragment = "" | "active" | "completed"

// TODO: Take a look at the simpler singleton construction from one of the other projects.

class RouterInstance extends Marionette.AppRouter {
  constructor(
    private rootModel: RootModel
  ) {
    super({
      routes: {
        "": "all",
        "active": "active",
        "completed": "completed"
      }
    })
  }

  all() {
    this.rootModel.filteredTodos.filter = FilterModel.All
  }

  active() {
    this.rootModel.filteredTodos.filter = FilterModel.Active
  }

  completed() {
    this.rootModel.filteredTodos.filter = FilterModel.Completed
  }

  navigateTo(fragment: Fragment) {
    this.navigate(fragment, {
      trigger: true
    })
  }
}

export default class Router {
  private static routerInstance: RouterInstance
  private static initialized = false

  static get instance(): RouterInstance {
    if (!this.initialized) {
      throw new Error("Router.initialize has not been called.")
    }

    return this.routerInstance
  }

  static initialize(rootModel: RootModel) {
    if (this.initialized) {
      throw new Error("Router.initialize has already been called.")
    }

    this.routerInstance = new RouterInstance(rootModel)

    Backbone.history.start({
      pushState: true
    })

    this.initialized = true
  }
}
