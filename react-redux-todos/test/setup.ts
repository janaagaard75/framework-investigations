// tslint:disable-next-line no-reference
/// <reference path="global.d.ts"/>

import { jsdom } from 'jsdom'

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator