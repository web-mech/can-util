var global = require("can-global")();
var setMutationObserver;
module.exports = function(setMO){
	if(setMO !== undefined) {
		setMutationObserver = setMO;
	}
	return setMutationObserver !== undefined ? setMutationObserver :
		global.MutationObserver || global.WebKitMutationObserver || global.MozMutationObserver;
};
