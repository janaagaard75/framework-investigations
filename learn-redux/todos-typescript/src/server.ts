import * as express from 'express'
import * as favicon from 'serve-favicon'
import * as webpack from 'webpack'
import webpackDevMiddleware = require('webpack-dev-middleware')
import webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('../webpack.config')
const port = 3000

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(favicon(__dirname + "/favicon.ico"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})