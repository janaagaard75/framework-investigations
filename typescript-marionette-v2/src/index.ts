import App from "./App"

const app = new App()

app.on("start", () => {
  // TODO: Can this be moved to the App.initialize() method?
  Backbone.history.start()
})

app.start()
