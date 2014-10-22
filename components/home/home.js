var can = require('can/'),
	homeStache = require('./home.stache!');

/**
 * @module {function} components/home/ <sc-home>
 * @parent steal-can-example
 * 
 * @signature `<sc-home>`
 * 
 * Creates the homepage
 * 
 * @body
 * 
 * 
 */
module.exports = can.Component.extend({
	tag: "sc-home",
	template: homeStache,
	scope: {}
});