define(['can/','./bootstrap.stache!','bootstrap','bootstrap.css!'], function(can, bootStache){
	
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
