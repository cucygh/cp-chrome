define(['jquery', 'backbone', 'underscore', 'm-login', 'pop'], function ($, Backbone, _, loginModel, pop) {
	var login_model = new loginModel;
	var loginView = Backbone.View.extend({
			el : '#view',
			model : login_model,
			render : function (html) {},
			initialize : function () {
				this.model.bind('change:isOn', this.notify);
				this.model.bind('change:msg', this.error);
			},
			notify : function (e) {
				if (!e.changed.isOn) {
					$('#view').html('<a href="#" class="login">登录</a><button class="ok">警告</button>');
				} else {
					$('#view').html('<a href="#" class="exit">退出</a>');
				}
			},
			error : function (e) {
				$('#view').append('<p>' + e.changed.msg + '</p>');
			},
			events : {
				'click .login' : 'fun_login',
				'click .exit' : 'fun_exit',
				'click .reg' : 'fun_reg',
				'click .ok' : 'fun_ok'
			},
			fun_login : function (e) {
				e.preventDefault();
				login_model.login('中传思客', 'ygh4931019', 1);
			},
			fun_exit : function (e) {
				login_model.exit();
			},
			fun_reg : function (e) {},
			fun_ok : function (e) {
				var frame='<iframe id="pop_ifm_payment1397383886107" src="http://ygh.cp.360.cn/pay/?orderid=PSSQ1404131811221060&amp;paychan=1&amp;pdm=http://ygh.cp.360.cn&amp;url=http%3A%2F%2Fygh.cp.360.cn%2Fssq&amp;t=1397383886108" frameborder="0" scrolling="no" width="428" height="225"></iframe>';
				new pop({
					title : '标题党',
					content : frame,
					footer:false,
					ok_call : function () {
						this.close();
						$('body').append('<p>ok</p>');
					},
					cancel : true,
					cancel_call : function () {
						$('body').append('<p>cancel</p>')
						this.close();
					}
				}).init();
			}
		});
	return loginView;
})
