import App from "./App"

// Create our Application
const app = new App()

// TODO: Move as much as possible into App.ts.

// Start history when our application is ready
app.on("start", () => {
  Backbone.history.start()
})

// Load some initial data, and then start our application
//loadInitialData().then(app.start);
//app.start({container: "#root"})
app.start()
