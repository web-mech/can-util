var mutate = require('./mutate');
var MUTATION_OBSERVER = require("../mutation-observer/mutation-observer");
var canNamespace = require("../../namespace");

QUnit = require('steal-qunit');

QUnit.module("can-util/dom/mutate");

function disableMO(){
	var old = MUTATION_OBSERVER();
	MUTATION_OBSERVER(null);
	return function(){
		MUTATION_OBSERVER(old);
	};
}

test("inserting empty frag", function () {
	var enableMO = disableMO();

	var frag = document.createDocumentFragment();
	mutate.appendChild.call( document.getElementById("qunit-fixture"), frag );

	var div = document.createElement("div");
	div.addEventListener("inserted", function(){
		ok(true, "called");
	});
	mutate.appendChild.call( document.getElementById("qunit-fixture"), div );
	stop();
	setTimeout(function(){
		enableMO();
		start();
	},10);

});

test("inserting into a different document fires inserted", function(){
	var enableMO = disableMO();

	var doc = document.createElement("html");
	doc.body = document.createElement("body");
	doc.appendChild(doc.body);

	var oldDoc = canNamespace.document;
	canNamespace.document = doc;

	var div = document.createElement("div");
	div.addEventListener("inserted", function(){
		ok(true, "called");
	});
	mutate.appendChild.call(doc.body, div);

	stop();
	setTimeout(function(){
		enableMO();
		canNamespace.document = oldDoc;
		start();
	}, 10);
});
