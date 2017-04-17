var canDev = require("../dev/dev");

/**
 * @module can-util/js/is-browser-window/is-browser-window is-browser-window
 * @parent can-util/js
 * @description Deprecated. Use [can-is-browser-window] instead.
 */

 //!steal-remove-start
 canDev.warn('js/is-browser-window/is-browser-window is deprecated; please use can-is-browser-window instead: https://github.com/canjs/can-is-browser-window');
 //!steal-remove-end

module.exports = require('can-is-browser-window');
