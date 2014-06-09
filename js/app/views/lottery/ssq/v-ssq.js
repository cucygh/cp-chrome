define(['backbone', 'jquery', 'm-ssq', 'm-bet', 'm-pay', 'pop', 'dropdown', 'ssq-tpl', 'timer', 'v-login'], function (Backbone, $, Mssq, Mbet, Mpay, Pop, Dropdown, Tpl, Timer, Vlogin) {
	var mssq = new Mssq(); //双色球控制器
	var mbet = new Mbet(); //投注控制器
	var mpay = new Mpay(); //支付控制器
	var vlogin=new Vlogin();//登录视图
	var Q = {}; //全局临时变量
	var Vssq = Backbone.View.extend({
			el : '#main',
			model : mssq,
			initialize : function () {
				mbet.bind('change:code', this.bet_call);
				mpay.bind('change:code', this.pay_call);
				// 渲染模板
				var html = [], config_bet = {
					red : [],
					red_select : [],
					blue : [],
					blue_select : []
				};
				html.push(Tpl.nav(mssq.lott_info));
				html.push(Tpl.menu({}));
				for(var i=1;i<34;i++){
					config_bet.red.push({num:i<10?'0'+i:i});
					if(i>5&&i<21){
						config_bet.red_select.push(i);
					}
					if(i<17){
						config_bet.blue.push({num:i<10?'0'+i:i});
						config_bet.blue_select.push(i);
					}
				}
				html.push(Tpl.bet(config_bet));
				$('#main').html(html.join(''));
				/* 垂直导航 */
				setTimeout(function () {
					$('.ui.dropdown').dropdown({
						onChange:function(e){
							console.debug(e);
						}
					});
				}, 1);
				/* 倒计时 */
				$('.countdown').countdown(mssq.lott_info.EndTime * 1000, function (event) {
					$(this).html(event.strftime('<b class="day red">%D</b>天<b class="hour red">%H</b>时<b class="minute red">%M</b>分<b class="second red">%S</b>秒'));
				});
			},
			events : {
				'click .ownbuy' : 'fun_ownbuy',
				'cilck .teambuy' : 'fun_teambuy',
				'click .red,.blue' : 'fun_count',
				'click .exit':'fun_exit',
				'click .login':'fun_login'
			},
			bet_call : function (e) {
				switch (e.changed.code) {
				case '0':
					mpay.post();
					break;
				case '':
				case '':
					break;
				default:
				}
			},
			pay_call : function (e) {},
			fun_ownbuy : function () {
				var param = {
					buy_type : 'bet',
					LotID : '220051',
					BetCodes : '05 08 26 28 31 32+05',
					OneMoney : 2,
					BetPageID : '1010',
					DrawNo : '2014049',
					BetMoney : 2,
					BetMulti : 1
				};
				mbet.post(param, function () {
					var xValue = this.xValue;
					var code = this.xCode;
					if (code == 0) {
						var frame = '<input type="text" value="ss" id="user"><input type="password" value="ygh13284705287" id="pwd"><button class="confirm">ok</button>';
							Q.box = new Pop({
								title : 'Pay input',
								content : frame,
								footer : false,
								ok_call : function () {
									this.close();
									var d_param = {
										chan : "1",
										from : 3,
										orderamt : xValue.TradeMoney,
										orderid : xValue.OrderID,
										ordername : xValue.LotName,
										ordertime : xValue.OrderTime,
										paypass : "",
										paytype : xValue.TypeID
									}
									mpay.post(d_param, function () {
										Q.box = new Pop({
												title : 'Pay result',
												content : '<span>开奖时间：' + this.OpenTime + '</span>,<span>派奖时间：' + this.BonusTime + '</span>'
											}).init();
									});
								},
								cancel : true,
								cancel_call : function () {
									$('body').append('<p>cancel</p>')
									this.close();
								}
							}).init();
					}
				});
			},
			fun_teambuy : function () {},
			fun_count : function () {
				var $bet = $('#bet');
				var count = this.model.caculate($bet.find('.red').length, $bet.find('.blue').length);
				$bet.find('.count').text(count).end().find('.money').text(count * 2);
			}
			.bind(this),
			fun_exit:function(){
				vlogin.exit();
			},
			fun_login:function(){
				vlogin.show();
			}
		});
	return Vssq;
});
