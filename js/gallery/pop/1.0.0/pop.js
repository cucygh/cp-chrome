define(['jquery','pop-tpl'],function($,tpl){
	function pop(give) {
		this.el = give.el || 'body';
		this.layer='layer'+(+new Date);
		this.data = {
			info : give.info || '',
			content : give.content || '',
			title : give.title || '温馨提示',
			cancel : give.cancel || false,
			layer : 'layer' + (+new Date)
		};
		this.init = function () {
			var html = tpl(this.data);
			$(this.el).append(html);
			$(this.el).on('click','.'+this.layer+' .confirm' ,function (e) {
				var ok_fun = give.ok_call || $.noop;
				ok_fun.call(this);
			}.bind(this)).on('click','.'+this.layer+' .cancel' ,function (e) {
				var cancel_fun = give.cancel_call || $.noop;
				cancel_fun.call(this);
			}.bind(this)).on('click','.'+this.layer+' .close' ,function (e) {
				this.close();
			}.bind(this));
		}.bind(this);
		this.close=function(){
			$(this.el).find('.'+this.layer).remove();
		}.bind(this);
	};
	return pop;
});