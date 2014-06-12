define(['backbone', 'jquery', 'm-ssq', 'm-bet', 'm-pay', 'pop', 'dropdown', 'ssq-tpl', 'timer', 'v-login','v-remider','store','public-tpl'], function (Backbone, $, Mssq, Mbet, Mpay, Pop, Dropdown, Tpl, Timer, Vlogin,Vremider,Store,PublicTpl) {
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
				};
				config_bet.money=this.fun_store_count();
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
				'click #confirm':'fun_confirm',
				'click .code_basket':'fun_basket',
				'click .tabular .item':'fun_tab',
				'click .reback':'fun_reback'
			},
			fun_reback:function(){
				var config_bet = {
					red : [],
					red_random : [],
					blue : [],
					blue_random : []
				};
				for(var i=1;i<34;i++){
					config_bet.red.push({num:i<10?'0'+i:i});
					if(i>5&&i<21){
						config_bet.red_random.push(i);
					}
					if(i<17){
						config_bet.blue.push({num:i<10?'0'+i:i});
						config_bet.blue_random.push(i);
					}
				};
				config_bet.money=this.fun_store_count();
				$('.betarea').html(Tpl.bet(config_bet));
			},
			fun_tab:function(e){
				var $self=$(e.target);
				$self.addClass('active').siblings('.item').removeClass('active');
				$('.buy_tab .ui.item').eq($self.index()).show().siblings('.item').hide();
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
				var $area = $('.redarea');
				var red=[],blue=[];
				var code,money=$('.bet .money').text();
				if(money<2){
					Vremider.remider('alert','号码少了','至少选择6个红球+1个篮球');
					return;
				}
				$area.find('.button.red').each(function(index,item){
					red.push($(item).text());
				});
				$area=$('.bluearea');
				$area.find('.button.blue').each(function(index,item){
					blue.push($(item).text());
				});
				code=red.join(' ')+'+'+blue.join(' ');
				Store.set('ssq_code',code);
				this.fun_clear();
				this.fun_store_count();
				
			},
			fun_store_count:function(){
				var code,count=0,tmp=[];
				code=Store.get('ssq_code')||'';
				if(!code){
					return;
				}
				code=code.split(';');
				for(var i=0,len=code.length;i<len;i++){
					tmp=code[i].split('+');
					count+=this.model.caculate(tmp[0].split(' ').length,tmp[1].split(' ').length);
				}
				$('.code_basket .label').text('￥'+count*2);
				return count*2
			},
			pay_call : function (e) {},
			fun_basket:function(){
				var data={code:[]};
				var code=Store.get('ssq_code');
				var tmp;
				if(code){
					code=code.split(';');
					for(var i=0,len=code.length;i<len;i++){
						tmp=code[i].split('+');
						code[i]={red:tmp[0],blue:tmp[1]};
					}
					data.code=code;
					data.count=this.fun_store_count()/2;
					data.money=data.count*2;
					$('.betarea').html(Tpl.type(data));
				}else{
					Vremider.remider('alert','号码蓝为空','至少添加1注号码');
				}
			},
			fun_ownbuy : function () {
				var money=this.fun_store_count();
				var param = {
					buy_type : 'bet',
					LotID : '220051',
					BetCodes : Store.get('ssq_code'),
					OneMoney : 2,
					BetPageID : '1099',
					DrawNo : mssq.lott_info.Issue,
					BetMoney : money,
					BetMulti : 1
				};
				mbet.post(param, function () {
					var xValue = this.xValue;
					var code = this.xCode;
					var param;
					if (code == 0) {
						param = {
							title : xValue.LotName + xValue.LotID + '期',
							money : xValue.TradeMoney / 100,
							balance : '688898',
							pay : true
						};
						var $pop = $(PublicTpl.pay(param));
						$pop.modal('setting', {
							selector : {
								approve : '.actions .gopay',
								deny : '.close'
							},
							onApprove : function () {
								var d_param = {
									chan : "1",
									from : 3,
									orderamt : xValue.TradeMoney,
									orderid : xValue.OrderID,
									ordername : xValue.LotName,
									ordertime : xValue.OrderTime,
									paypass : $('#pwd').val(),
									paytype : xValue.TypeID
								};
								mpay.post(d_param, function (res) {
									console.debug(res);
									if(res.xCode==0){
										$('#err_pay').html('').hide();
									}else{
										$('#err_pay').html('<b class="red">'+res.message+'</b>').show();
									}
								});
								return false;
							},
							onDeny : function () {
								$pop.remove();
							}
						}).modal('show');
					}else{
						if(code==2){
							Vremider.remider('alert','订单错误',this.xMessage+'<br><a href="/pfpay?oid='+this.xValue.OrderID+'" target="_blank">完善信息</a>');
						}
						
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
