var canDev = require("../dev/dev");

/**
 * @module can-util/js/global/global global
 * @parent can-util/js
 * @signature `GLOBAL()`
 */

 //!steal-remove-start
 canDev.warn('js/global/global is deprecated; please use can-global instead: https://github.com/canjs/can-global');
 //!steal-remove-end

module.exports = require('can-global');
