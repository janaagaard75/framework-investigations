import * as _ from "underscore"
import App from "./App"

// Create our Application
const app = new App()

// Start history when our application is ready.
app.on("start", () => {
  Backbone.history.start()
})

app.start()
