// tslint:disable no-string-literal
import { jsdom } from 'jsdom'

global['document'] = jsdom('<!doctype html><html><body></body></html>')
global['window'] = document.defaultView
global['navigator'] = (global as any).window.navigator