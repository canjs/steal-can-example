define(['can/',
	'./bootstrap.stache!',
	'bootstrap',
	'bootstrap.css!'
], function(can, bootStache){

	/**
	 * @module {function} components/bootstrap/ <sc-bootstrap>
	 * @parent steal-can-example
	 * 
	 * @signature `<sc-bootstrap>`
	 * 
	 * Creates a bootstrap example with a carousel.
	 * 
	 * @body
	 * 
	 * ## Demo
	 * 
	 * @demo components/bootstrap/bootstrap.html
	 * 
	 */
	return can.Component.extend({
		tag: "sc-bootstrap",
		template: bootStache,
		scope: {},
		helpers: {
			carousel: function(){
				return function(el){
					$(el).one("inserted", function(){
						$(el ).carousel();
					});
					
				};
			}
		}
	});
	
});
