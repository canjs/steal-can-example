import Model from 'can/model/model';

export default Model.extend({
	findOne: function(){
		var d = new can.Deferred();
		if(localStorage.getItem("session")) {
			d.resolve( JSON.parse(localStorage.getItem("session")) );
		} else {
			d.reject({});
		}
		return d;
	},
	create: function(data){
		var d = new can.Deferred();
		if(data.email && data.password) {
			localStorage.setItem("session", JSON.stringify({email: data.email, id: Math.floor(Math.random()*100000 ) }));
			d.resolve( data );
		} else {
			d.reject({message: "incorrect username or password"});
		}
		return d;
	},
	destroy: function(data){
		var d = new can.Deferred();
		localStorage.removeItem("session");
		d.resolve();
		return d;
	}
},{});
