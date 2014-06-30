var stealTools = require("steal-tools");

stealTools.build({
	config: __dirname+"/stealconfig.js",
	main: "main"
},{
	//minify: false
});
