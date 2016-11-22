import * as express from 'express'
import * as favicon from 'serve-favicon'
import * as webpack from 'webpack'
// tslint:disable-next-line no-var-requires
const webpackDevMiddleware = require('webpack-dev-middleware')
// tslint:disable-next-line no-var-requires
const webpackHotMiddleware = require('webpack-hot-middleware')

// tslint:disable-next-line no-var-requires
const config = require('../webpack.config')
const port = 3000

const app = express()
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(favicon(__dirname + '/favicon.ico'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    // tslint:disable-next-line no-console
    console.info('Listening on http://localhost:%s/.', port, port)
  }
})