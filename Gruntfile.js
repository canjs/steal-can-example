module.exports = function (grunt) {
	grunt.loadNpmTasks('steal-tools');
	grunt.loadNpmTasks('documentjs');
	
	grunt.initConfig({
		"steal-build": {
			main: {
				options: {
					system: {
						config: "package.json!npm"
					},
					buildOptions: {}
				}
			}
		}
	});

	

	grunt.registerTask('build', ['steal-build']);
};
