module.exports = function (grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		requirejs : {
			compile : {
				options : {
					baseUrl : "js/",
					paths : {
						jquery : 'lib/jquery/1.11.0/jquery',
						require : 'lib/require/2.1.11/require',
						handlebars : 'gallery/1.3.0/handlebars',
						router : 'app/router'

					},
					name : "app/test", // assumes a production build using almond
					out : "online/js/app/test.js"
				}
			},
			js_compile_all : {
				options : {
					appDir : 'js/',
					baseUrl : "./",
					dir : './online/js/',
					paths : {
						jquery : 'lib/jquery/1.11.0/jquery',
						require : 'lib/require/2.1.11/require',
						backbone : 'lib/backbone/1.1.2/backbone',
						underscore : 'lib/underscore/1.6.0/underscore',
						handlebars : 'gallery/handlebars/1.3.0/handlebars',
						md5 : 'gallery/md5/1.0.0/md5',
						router : 'app/router',
						'views/login' : 'app/views/login',
						'views/nav' : 'app/views/nav',
						'modules/login' : 'app/modules/login',
						pop:'gallery/pop/1.0.0/pop',
						"pop-tpl":'gallery/pop/1.0.0/pop-tpl'
					},
					modules : [{
							name : "app/test"
						}, {
							name : "app/test2"
						}, {
							name : "app/start"
						}
					],
					preserveLicenseComments : false
				}
			},
			css_compile_test : {
				options : {
					cssIn : "css/app/test.css",
					out : "online/css/app/test.css"
				}
			},
			css_compile_test2 : {
				options : {
					cssIn : "css/app/test2.css",
					out : "online/css/app/test2.css"
				}
			}

		},
		copy : {
			main : {
				src : 'css/img/*',
				dest : 'online/',
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('build-app', ['requirejs:compile']);
	grunt.registerTask('build', ['requirejs:js_compile_all']);
	grunt.registerTask('css', ['requirejs:css_compile_test', 'requirejs:css_compile_test2', 'copy:main']);
};
