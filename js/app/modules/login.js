define(['backbone', 'md5', 'jquery'], function (Backbone, md5, $) {
	var Login = Backbone.Model.extend({
			isOn : false,
			userName:'',
			msg:'初始化',
			domain:'http://ygh.cp.360.cn/',
			initialize : function () {
				var _this = this;
				chrome.cookies.get({
					"url" : _this.domain,
					"name" : 'loginedUserName'
				}, function (c) {
					// console.debug('c=',c);
					if (!c) {
						_this.set({
							isOn : false
						});
					} else {
						_this.set({
							isOn : true,
							userName:decodeURIComponent(c.value)
						});
					}
				});
			},
			login : function (user, pwd, keep) {
				var _this = this;
				var result = this.validate(user, pwd);
				if (result.pass) {
					var options = {
						account : user,
						password : md5(pwd),
						isKeepAlive : keep,
						userType : '360',
						union : '360',
						t : +new Date
					};
					var data_type = 'json';
					var url = this.domain + 'user/unionLogin/?' + $.param(options);
					this.fetch({
						url : url,
						success : function (data) {
							_this.set({
								isOn : true
							});
						},
						error : function (err) {
							_this.set({
								msg : 'errl'
							})
						}
					});
				} else {
					this.set({
						msg : '验证失败'
					});
				}
			}.bind(this),
			exit : function () {
				var url = this.domain+"user/logout/?rt=" + new Date;
				var _this = this;
				Backbone.sync('read', this, {
					url : url,
					dataType : 'html',
					success : function () {
						_this.set({
							isOn : false
						});
					},
					error : function () {
						_this.set({
							msg : '退出失败'
						});
					}
				});
			}.bind(this),
			validate : function (user, pwd) {
				var r;
				if (user.toString().trim() != '' && pwd.toString().trim() != '') {
					r = {
						pass : true,
						msg : 'pass',
					}
				} else {
					r = {
						pass : false,
						msg : '账号或密码不能为空！'
					}
				}
				return r;
			}
		});
	return Login;
});
