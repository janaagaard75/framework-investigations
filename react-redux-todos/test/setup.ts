// tslint:disable no-string-literal
import { jsdom } from 'jsdom'
import { use } from 'chai'
import * as chaiImmutable from 'chai-immutable'

use(chaiImmutable)

global['document'] = jsdom('<!doctype html><html><body></body></html>')
global['window'] = document.defaultView
global['navigator'] = (global as any).window.navigator