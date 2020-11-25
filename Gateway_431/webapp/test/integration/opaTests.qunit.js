/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/sap/ua/Gateway_431/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});