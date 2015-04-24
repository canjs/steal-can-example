import can from 'can/can';
import $ from 'jquery';
import Session from 'models/session';
import siteStache from 'site.stache!'
import 'can/map/define/';
import reload from 'live-reload';

// Defines the state of the application
var AppState = can.Map.extend({
	define : {
		session : {
			serialize: false,
			set() {
				// When there is a session, start routing.
				can.route.map(appState);
				can.route.ready();
			},
			remove() {
				// When the session is removed, stop routing.
				can.route._teardown();
			}
		},
		isLoggedIn: {
			get() { return !!this.attr("session") }
		},
		// Set to true once we know if a session has been established or not.
		ready: {
			serialize: false
		},
		showPage: {
			get() {
				if( this.attr("session") ) {
					return this.attr("page");
				} else if(this.attr("ready")){
					return "login";
				}
			}
		}
	},
	logout() {
		var self = this;
		this.attr("session").destroy(() => self.removeAttr("session"));
	}
}),
	appState = new AppState();

can.route(":page",{page: "home"})


var pages = {
	login: "<sc-login session='{session}'></sc-login>"
};

var currentPage;

function render(){
	var template =  pages[currentPage] || "<sc-"+currentPage+"></sc-"+currentPage+">";
	$("#main").html(  can.stache( template )( appState ) );
}

appState.bind("showPage", (ev, newVal) => {
	if(newVal) {
		currentPage = newVal;
		System.import("components/"+newVal+"/").then(
			(Component) => {
				render();
			}).catch( (e) => {
				console.log("borked!",e, e.stack);
			});
	}

});

Session.findOne({}).then(
	(session) => {
		appState.attr({
			session: session,
			ready : true
		});
	},
	() => {
		appState.attr("ready", true);
	});


can.stache.registerHelper("linkTo", (page) => can.stache.safeString(can.route.link(page,{page: page}))  );

$(document.body).append( siteStache(appState) );

// Called when the reload has completed.
reload(function(){
  render();
});

// Called when this module gets deleted.
reload.dispose(function(){
  $("#site").remove();
});
