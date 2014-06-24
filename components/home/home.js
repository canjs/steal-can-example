var can = require('can/'),
	homeStache = require('./home.stache!');
	
module.exports = can.Component.extend({
	tag: "sc-home",
	template: homeStache,
	scope: {}
});