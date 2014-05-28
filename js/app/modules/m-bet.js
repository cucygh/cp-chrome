define(['lottery','backbone','m-pay','./feedback'],function(lottery,Backbone,Pay,Feedback){
	var Bet=Backbone.Model.extend({
		initailize:function(){
			this.param={};//投注参数
			this.reffer='';//投注来源
			this.action='';//投注回调地址
			this.code='';//投注接口状态码
			this.msg='';//投注接口状态描述
			this.type='';//投注类型，代购、合买、追号等
			this.res={};//投注响应
		},
		post:function(param,callback){
			this.reset();
			var data=param||this.param;
			var url,_self=this;
			if(!data){
				this.code='-2';
			}
			this.type=data.buy_type;
			url=lottery.get_pay_url(this.type);
			$.ajax({
				url:url,
				data:data,
				dataType:'json',
				timeout:10000,
				success:function(res){
					_self.code=res.xCode;
					_self.get_msg();
					_self.res=res;
					if(callback&&typeof callback=='function'){
						callback.call(res);
					}
				},
				error:function(err){
					new Feedback().send(err);
				}
			});
		},
		get_msg:function(){
			switch(this.msg){
            	case '-2':
					this.msg='投注参数不完整';
					break;
            	case '0':
					this.msg='下单成功';
					break;
            	case '1':
					this.msg='余额不足';
					break;
				case '2':
					this.msg='未填写支付密码或实名';
					break;
				case '100':
					this.msg='未登录';
					break;
            	default:
					this.msg='未知错误';
            }
			return this.msg;
		},
		reset:function(){
			this.code='';
			this.res={};
		}
	});
	return Bet;
});