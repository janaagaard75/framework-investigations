import * as Marionette from "backbone.marionette"
import RootModel from "./RootModel"
import TodosFilter from "./TodosFilter"

type Fragment = "" | "active" | "completed"

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
    this.rootModel.todosFilter = TodosFilter.All
  }

  active() {
    this.rootModel.todosFilter = TodosFilter.Active
  }

  completed() {
    this.rootModel.todosFilter = TodosFilter.Completed
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
