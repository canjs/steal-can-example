import can from 'can/';
import jqStache from './jquery-ui.stache!';
import acc from 'ui/accordion';
import $ from 'jquery';

export default can.Component.extend({
	tag: "sc-jquery-ui",
	template: jqStache,
	scope: {},
	helpers: {
		accordion: function(){
			return function(el){
				$(el).one("inserted", function(){
					$(el ).accordion();
				});
				
			};
		}
	}
});
