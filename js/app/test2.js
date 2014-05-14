require.config({
	paths : {
		jquery : '../lib/jquery/1.11.0/jquery',
		handlebars : '../gallery/handlebars/1.3.0/handlebars',
		pop : '../gallery/pop/1.0.0/pop',
		'pop-tpl':'../gallery/pop/1.0.0/pop-tpl',
	}
});
require(['jquery', 'handlebars','pop'], function ($, tpl,pop) {
	// var template = tpl.compile($("#people-template").html());
	var data = {
		people : [{
				first_name : "Alan",
				last_name : "Johnson",
				phone : "1234567890",
				email : "alan@test.com",
				member_since : "Mar 25, 2011"
			}, {
				first_name : "Allison",
				last_name : "House",
				phone : "0987654321",
				email : "allison@test.com",
				member_since : "Jan 13, 2011"
			}, {
				first_name : "Nick",
				last_name : "Pettit",
				phone : "9836592272",
				email : "nick@test.com",
				member_since : "Apr 9, 2009"
			}, {
				first_name : "Jim",
				last_name : "Hoskins",
				phone : "7284927150",
				email : "jim@test.com",
				member_since : "May 21, 2010"
			}, {
				first_name : "Ryan",
				last_name : "Carson",
				phone : "8263729224",
				email : "ryan@test.com",
				member_since : "Nov 1, 2008"
			}
		]
	};
	var frame = '<iframe id="pop_ifm_payment1397383886107" src="http://ygh.cp.360.cn/pay/?orderid=PSSQ1404141445571117&paychan=1&pdm=http://ygh.cp.360.cn&url=http%3A%2F%2Fygh.cp.360.cn%2Fssq&t=1397457975420" frameborder="0" scrolling="no" width="428" height="225" ></iframe>';
	new pop({
		title : '标题党',
		content : frame,
		footer : false,
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
	
});
