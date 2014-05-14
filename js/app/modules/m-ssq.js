define(['backbone', 'jquery', 'lottery', 'math'], function (Backbone, $, lottery, math) {
	var Ssq = Backbone.Model.extend({
			initialize : function () {
				this.number = '';
				this.id = '220051';
				this.lott_info = {};
				var lott_info = lottery.get_cur_issue(this.id);
				if (lott_info) {
					$.extend(this.lott_info, lott_info).bind(this);
				}
			},
			caculate : function (red, blue) {
				return math.combo(red, 6) * blue
			},
			random : function (options) {
				var opt={min:1,max:33,size:6,count:1};
				$.extend(opt,options);
				return math.random(opt);
			}
		});
	return Ssq;
});
