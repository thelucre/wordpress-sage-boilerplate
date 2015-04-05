/**
 * Bootstrap the JS.  This is invoked by main.js.  Add site
 * specific initialization logic to this.
 */
define(function (require) {

	// Plugin dependencies
	require('bkwld/console');
	require('bkwld/csrf');
	require('bkwld/jquery-views');

	// AMD dependencies and var assignments
	var $ = require('jquery')
		, FastClick = require('fastclick')
		, body = $('body')[0].className
		, _ = require('underscore')
		, vel = require('velocity')
	;

	// Enable FastClick everywhere
	FastClick.attach(document.body);

});