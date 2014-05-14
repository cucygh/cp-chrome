define(['backbone', 'jquery', 'lottery', 'math', 'm-login'], function (Backbone, $, lottery, math, Login) {
	var login = new Login();
	var Ssq = Backbone.Model.extend({
			initialize : function () {
				this.number = '';
				this.id = '220051';
				this.lott_info = {
					id : '220051'
				};
				var lott_info = lottery.get_cur_issue(this.id);
				if (lott_info) {
					$.extend(this.lott_info, lott_info).bind(this);
				}
				$.extend(this.lott_info, {
					logined : login.attributes['isOn'],
					username : login.attributes['userName']
				});
			},
			caculate : function (red, blue) {
				return math.combo(red, 6) * blue
			},
			random : function (options) {
				var opt = {
					min : 1,
					max : 33,
					size : 6,
					count : 1
				};
				$.extend(opt, options);
				return math.random(opt);
			},
			get_issue : lottery.get_cur_issue,
			go_login : login.login,
			go_exit : login.exit
		});
	return Ssq;
});
