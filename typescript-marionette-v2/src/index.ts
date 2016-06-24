import App from "./App"

const app = new App()

app.on("start", () => {
  Backbone.history.start()
})

app.start()
