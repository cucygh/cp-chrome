module.exports = function (grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		requirejs : {
			js_compile_all : {
				options : {
					appDir : 'js/',
					baseUrl : "./",
					dir : './online/js/',
					paths : {
						jquery : 'lib/jquery/1.11.0/jquery',
						backbone : 'lib/backbone/1.1.2/backbone',
						underscore : 'lib/underscore/1.6.0/underscore',
						handlebars : 'gallery/handlebars/1.3.0/handlebars',
						md5 : 'gallery/md5/1.0.0/md5',
						pop : 'gallery/pop/1.0.0/pop',
						modal : 'gallery/pop/3.0.0/modal',
						dimmer : 'gallery/dimmer/1.0.0/dimmer',
						dropdown : 'gallery/dropdown/1.0.0/dropdown',
						transition : 'gallery/transition/1.0.0/transition',
						timer : 'gallery/timer/1.0.0/timer',
						store : 'gallery/store/1.0.0/store',
						'pop-tpl' : 'gallery/pop/1.0.0/pop-tpl',
						text : 'gallery/text/2.0.10/text',
						math : 'gallery/math/1.0.0/math',
						'v-ssq' : 'app/views/lottery/ssq/v-ssq',
						'v-login' : 'app/views/public/v-login',
						'v-remider' : 'app/views/public/v-remider',
						'm-login' : 'app/modules/m-login',
						'm-ssq' : 'app/modules/m-ssq',
						'm-bet' : 'app/modules/m-bet',
						'lottery' : 'app/modules/lottery',
						'feedback' : 'app/modules/feedback',
						'm-pay' : 'app/modules/m-pay',
						'router' : 'app/router',
						'ssq-tpl' : 'app/template/compile/lottery/ssq/out',
						'remider-tpl' : 'app/template/compile/public/remider-tpl',
						'pay-tpl' : 'app/template/compile/public/pay-tpl',
						'public-tpl' : 'app/template/compile/public/public-tpl',
						'login-tpl' : 'app/template/compile/public/login-tpl',
						'bet-tpl' : 'app/template/compile/lottery/ssq/bet-tpl',
						'menu-tpl' : 'app/template/compile/lottery/ssq/menu-tpl',
						'nav-tpl' : 'app/template/compile/lottery/ssq/nav-tpl',
						'buytype-tpl' : 'app/template/compile/lottery/ssq/buytype-tpl'
					},
					modules : [{
							name : "app/start"
						}
					],
					preserveLicenseComments : false
				}
			}
		},
		copy : {
			main : {
				src : 'css/img/*',
				dest : 'online/',
			}
		},
		handlebars : {
			compile : {
				options : {
					amd : true,
					namespace : false,
					partialsUseNamespace : true,
					expand : true
				},
				files : [{
						expand : true,
						cwd : 'js/app/template/',
						src : '**/*.handlebars',
						dest : 'js/app/template/compile',
						filter : 'isFile',
						ext : '-tpl.js'
					}
				]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('build', ['requirejs:js_compile_all']);
	grunt.registerTask('template', ['handlebars:compile']);
	grunt.registerTask('css', ['requirejs:css_compile_test', 'requirejs:css_compile_test2', 'copy:main']);
};
