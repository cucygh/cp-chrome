define(['backbone', 'jquery', 'm-login', 'login-tpl', 'modal'], function (Backbone, $, Login, TplLogin, Modal) {
	var login=new Login();
	var $login;
	var Vlogin = Backbone.View.extend({
			initialize : function () {
				login.unbind();
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
				if (e.attributes.msg != 'ok') {
					var msg = e.attributes.msg.replace(/\:t\=\d+/g, '');
					if (msg.indexOf('验证') > -1) {
						$login.find('.auth').show();
					}
					if (msg) {
						$login.find('.error .header').html(msg).parent().show();
					}
					$login.find('.auth img').trigger('click');
				} else {
					$login.modal('hide').remove();
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
						var captcha=$('#captcha');
						captcha=captcha.is(':visible')?captcha.val():'';
						login.login(user,pwd,1,captcha);
						return false;
					},
					onDeny:function(){
						$login.modal('hide').remove();
					}
				}).modal('show');
				$login.on('click','.auth img',function(){
					var $self=$(this);
					var url=$self.attr('src').replace(/t=\d+/g,'t='+(+new Date()));
					$self.attr('src',url);
				});
			},
			exit:function(){
				login.exit();
			}
		});
		return Vlogin;
});