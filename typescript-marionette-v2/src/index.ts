import App from "App"

// Create our Application
const app = new App()

// Start history when our application is ready
app.on("start", () => {
  Backbone.history.start()
})

// Load some initial data, and then start our application
//loadInitialData().then(app.start);
//app.start({container: "#root"})
app.start()
