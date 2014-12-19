define(['backbone', 'jquery', 'lottery', 'math'], function (Backbone, $, lottery, math) {
	var Ssq = Backbone.Model.extend({
			initialize : function () {
				this.number = '';
				this.id = '220051';
				this.domain=lottery.domain;
				this.lott_info = {
					id : '220051'
				};
				var _this=this;
				lottery.get_cur_issue({
					id : _this.id,
					ok_call : function (lott_info) {
						if (lott_info) {
							$.extend(_this.lott_info, lott_info);
						}
					}
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
			get_issue : lottery.get_cur_issue
		});
	return Ssq;
});
