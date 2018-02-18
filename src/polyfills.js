/**
* requestAnimationFrame polyfill
*/
import 'raf/polyfill';


/**
* ES6 Promises polyfill
*/
if (!window.Promise) {
  window.Promise = require('promise-polyfill');
}


/**
* Fetch API polyfill
*/
if (!window.fetch) {
  require('whatwg-fetch');
}
