module.exports = function (grunt) {
	grunt.loadNpmTasks('steal-tools');
	grunt.loadNpmTasks('documentjs');
	
	grunt.initConfig({
		stealBuild: {
			main: {
				options: {
					system: {
						config: __dirname + "/stealconfig.js",
						main: "main"
					},
					buildOptions: {}
				}
			}
		}
	});

	

	grunt.registerTask('build', ['stealBuild']);
};