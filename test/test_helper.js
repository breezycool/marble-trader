import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import jsdom from 'jsdom'

chai.use(chaiImmutable);
var doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
var win = doc.defaultView
global.document = doc
global.window = win
propagateToGlobal(win)
// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal (window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue

    global[key] = window[key]
  }
}