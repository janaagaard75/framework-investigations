// The reference only needed by VS Code, and not by the TypeScript compiler.
/// <reference path="../typings/index.d.ts"/>

import * as Marionette from "backbone.marionette"

export default class App extends Marionette.Application {
  template = "#appTemplate"

  initialize() {
    console.info("App initialized.")
  }
}
