import App from "./App"
import Router from "./Router"

const app = new App()

app.on("start", () => {
  console.info("App started")
  // TODO: Can this be moved to the App.initialize() method?

  // TODO: Fix the tslint warning.
  new Router()
  Backbone.history.start()

})

app.start()
