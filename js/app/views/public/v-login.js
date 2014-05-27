define(['backbone', 'jquery', 'm-login', 'login-tpl', 'modal'], function (Backbone, $, Login, TplLogin, Modal) {
	var login=new Login();
	var $login;
	var Vlogin = Backbone.View.extend({
			initialize : function () {
				login.bind('change:isOn', this.login_call);
				login.bind('change:msg', this.msg_call);
			},
			login_call:function(e){
				var tpl_login='<i class="icon user"></i><a href="#" class="username">{{username}}</a> | <a href="#" class="exit">退出</a>';
				var tpl_exit='<a href="#" class="login">登录</a> | <a href="#" class="register">注册</a>';
				if(e.changed.isOn){
					tpl_login=tpl_login.replace('{{username}}',e.attributes.userName);
					$('.profile').html(tpl_login);
				}else{
					$('.profile').html(tpl_exit);
				}
			},
			msg_call : function (e) {
				if (e.attributes.msg != 'success') {
					console.log(e.attributes.msg);
					$login.find('.error .header').html(e.attributes.msg).parent().show();
				}
			},
			show:function(){
				$login=$(TplLogin({user:login.attributes.userName}));
				$login.modal('setting',{
					selector:{
						approve:'.actions .login',
						deny:'.actions .cancel'
					},
					onApprove:function(){
						var user=$('#user').val();
						var pwd=$('#pwd').val();
						login.login(user,pwd,1);
						return false;
					},
					onDeny:function(){
						login.reset();
						$login.remove();
					}
				}).modal('show');
			},
			exit:function(){
				login.exit();
			}
		});
		return Vlogin;
});