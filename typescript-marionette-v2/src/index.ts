import * as _ from "underscore"
import App from "./App"

// HtmlWebpackPlugin also uses underscore templates, so Webpack will render the template on build if we use the standard <% ... %> syntax.
// TODO: Try to define the template in another way. It would be cool to have them in separate files anyway.
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
  // TODO: Also define escape and evaluate regular expressions.
}

// Create our Application
const app = new App()

// TODO: Move as much as possible into App.ts.

// Start history when our application is ready
app.on("start", () => {
  window.console.info("Application started.")
  Backbone.history.start()
})

// Load some initial data, and then start our application
//loadInitialData().then(app.start);
//app.start({container: "#root"})
app.start()
