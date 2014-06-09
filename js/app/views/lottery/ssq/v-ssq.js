define(['backbone', 'jquery', 'm-ssq', 'm-bet', 'm-pay', 'pop', 'dropdown', 'ssq-tpl', 'timer', 'v-login','v-remider'], function (Backbone, $, Mssq, Mbet, Mpay, Pop, Dropdown, Tpl, Timer, Vlogin,Vremider) {
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
					red_random : [],
					blue : [],
					blue_random : []
				};
				html.push(Tpl.nav(mssq.lott_info));
				html.push(Tpl.menu({}));
				for(var i=1;i<34;i++){
					config_bet.red.push({num:i<10?'0'+i:i});
					if(i>5&&i<21){
						config_bet.red_random.push(i);
					}
					if(i<17){
						config_bet.blue.push({num:i<10?'0'+i:i});
						config_bet.blue_random.push(i);
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
				'click .exit':'fun_exit',
				'click .login':'fun_login',
				'click #red_yl,#blue_yl':'fun_yl',
				'click #red_dan,#blue_dan':'fun_dan',
				'click .circular.button':'fun_select',
				'change #red_r_num,#blue_r_num':'fun_random',
				'click .red_clear,.blue_clear':'fun_clear_num',
				'click #confirm':'fun_confirm'
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
			fun_yl:function(e){
				var _self=e.target;
				if(_self.getAttribute('id')=='red_yl'){
					$('.redarea .yl').toggle();
				}else{
					$('.bluearea .yl').toggle();
				}
			},
			fun_dan:function(e){
				var _self=e.target;
				if(_self.getAttribute('id')=='red_dan'){
					$('.redarea .dan').toggle();
				}else{
					$('.bluearea .dan').toggle();
				}
			},
			fun_select : function (e) {
				var $self = $(e.target);
				if ($self.parents('.redarea').length) {
					$self.toggleClass('red');
				} else {
					$self.toggleClass('blue');
				}
				this.fun_count();
			},
			fun_random : function (e) {
				var $self = $(e.target);
				var val=$self.val();
				var num;
				var i;
				var $area;
				if($self.attr('id')=='red_r_num'){
					num=val>0?this.model.random({size:val})[0]:[];
					len=num.length;
					$area=$('.redarea');
					$area.find('.red.button').removeClass('red');
					for(i=0;i<len;i++){
						$area.find('.button.circular').eq(num[i]-1).addClass('red');
					}
				}else{
					num=val>0?this.model.random({size:val,max:16})[0]:[];
					len=num.length;
					$area=$('.bluearea');
					$area.find('.blue.button').removeClass('blue');
					for(i=0;i<len;i++){
						$area.find('.button.circular').eq(num[i]-1).addClass('blue');
					}
				}
				this.fun_count();
			},
			fun_clear : function (num) {
				var $area = $('.redarea,.bluearea');
				switch (num) {
				case 1:
					$area.find('.red.button').removeClass('red');
					break;
				case 2:
					$area.find('.blue.button').removeClass('blue');
					break;
				default:
					$area.find('.red.button,.blue.button').removeClass('red blue');
				}
				this.fun_count();
			},
			fun_clear_num:function(e){
				e.preventDefault();
				var $self = $(e.target);
				if($self.hasClass('red_clear')){
					this.fun_clear(1);
				}else{
					this.fun_clear(2);
				}
			},
			fun_confirm:function(){
				Vremider.remider('alert','号码少了','至少选择6个红球+1个篮球')
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
				var $bet = $('.betarea');
				var count = this.model.caculate($bet.find('.circular.button.red').length, $bet.find('.circular.button.blue').length);
				$bet.find('.count').text(count).end().find('.money').text(count * 2);
			},
			fun_exit:function(){
				vlogin.exit();
			},
			fun_login:function(){
				vlogin.show();
			}
		});
	return Vssq;
});
