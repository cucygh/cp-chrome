define(['lottery','backbone','./feedback','md5'],function(lottery,Backbone,feedback,md5){
	var Pay=Backbone.Model.extend({
		initialize:function(){
			this.ssl=false;//是否启用SSL安全链接
			this.code='';//支付接口状态码
			this.msg='';//支付接口状态描述
			this.domain=this.ssl?'https://ygh.cp.360.cn':'http://ygh.cp.360.cn';//支付接口所在域名
			this.url='/qbapissl/payment/';//支付接口
			this.url_bak='/qbapissl/pgw';//备用支付接口
			this.count=0;//支付次数
			this.limit=2;//支付失败限制次数，超过此设置启用备用支付接口
		},
		post:function(data,callback){
			this.count++;
			var _self=this;
			data.paypass=_self.pwd_md5(data.paypass);
			data['sign']=_self.sign_md5(data);
			$.ajax({
				url:_self.domain+_self.url,
				data:data,
				dataType:'json',
				timeout:10000,
				success:function(res){
					_self.count=0;
					if(res&&typeof res=='object'){
						// 用户信息、签名认证
						if(res.errno){
							_self.code=res.errno;
							return;
						}
						// 钱包验证
						if(res.result_code){
							_self.code=res.result_code;
							return;
						}
						// 投注验证
						if(res.xCode){
							_self.code=res.xCode;
						}
						if (callback && typeof callback == 'function') {
							callback.call(res);
						}
					}else{
						_self.code='-1';
					}
					_self.get_msg();
				},
				error:function(){
					if(_self.count<_self.limit){
						_self.post.call(_self,data);
					}else{
						new feedback().send();
					}
				}
			});
		},
		get_msg:function(){
			switch(this.code){
            	case '0':
					this.msg='购买成功';
					break;
				case '-1':
					this.msg='未知错误';
					break;
            	case '9998':
					this.msg='网络错误';
					break;
            	case '9001':
					this.msg='用户信息错误';
					break;
            	case '1619':
					this.msg='签名错误';
					break;
            	case '1612':
					this.msg='网络劫持';
					break;
            	case '1613':
					this.msg='订单超时，需要重新支付';
					break;
            	case '1618':
					this.msg='余额不足';
					break;
            	case '9003':
					this.msg='尚未登录';
					break;
            	case '9004':
					this.msg='账户异常';
					break;
            	case '1607':
					this.msg='网络不稳定，支付结果未知';
					break;
            	default:
					new feedback().send();
            }
			return this.msg;
		},
		pwd_md5:function(txt){
			return md5('fcfa5d2e|'+txt+'|fcfa5d2e');
		},
		sign_md5:function(data){
			var arr=[];
			for(var p in data){
				arr.push(p+'='+data[p]);
			}
			arr.push('key=353f32ef57aceb1b90ea4cf2afacb595');
			return md5(arr.join('&'));
		}
	});
	return Pay;
});