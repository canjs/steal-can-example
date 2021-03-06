import can from 'can/';
import loginStache from './login.stache!';
import Session from 'models/session';

/**
 * @module {function} components/login/ <sc-login>
 * @parent steal-can-example
 * @inherits can.Component
 * 
 * @signature `<sc-login>`
 * 
 * Creates a login component.
 * 
 * @body
 * 
 * 
 */
export default can.Component.extend({
	tag: "sc-login",
	template: loginStache,
	scope: {
		login: function(scope, el,ev){
			ev.preventDefault();
			this.attr("logingIn", true);
			var self = this;
			new Session({
				email: this.attr("email"),
				password: this.attr("password")
			}).save(function(session){
				self.attr({
					session :session,
					logingIn: false
				});
			});
		}
	}
});
