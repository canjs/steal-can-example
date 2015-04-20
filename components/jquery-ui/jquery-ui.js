import can from 'can';
import jqStache from './jquery-ui.stache!';
import acc from 'ui/accordion';
import $ from 'jquery';

/**
 * @module {function} components/jquery-ui/ <sc-jquery-ui>
 * @parent steal-can-example
 * 
 * @signature `<sc-jquery-ui>`
 * 
 * Creates a jQueryUI demo.
 * 
 * @body
 * 
 * 
 */
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
