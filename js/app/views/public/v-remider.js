define(['modal','remider-tpl'], function (Modal,Tplremider) {
	var $sel;
	var remider = function (type,title,content,confirm) {
		switch (type) {
		case 'alert':
			$sel=$(Tplremider({alert:true,title:title||'温馨提示',content:content||'提示',confirm:confirm||'确定'}));
			$sel.modal('setting', {
				onApprove : function () {
					$sel.remove();
				},
				onDeny:function(){
					$sel.remove();
				}
			}).modal('show');
			break;
		case 'prompt':
			break;
		default:
		}
	};
	return {
		remider:remider
	}
});
