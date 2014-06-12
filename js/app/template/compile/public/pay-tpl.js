define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n<div class=\"ui small modal transition visible active\" style=\"margin-top: -110px;\">\r\n	<i class=\"close icon\"></i>\r\n	<div class=\"header\">\r\n	  确认付款\r\n	</div>\r\n	<div class=\"content\">\r\n	  <ul>\r\n		<li>订单名称：";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\r\n		<li>支付金额：<b class=\"red\">";
  if (helper = helpers.money) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.money); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</b> 元</li>\r\n		<li>现金余额：<b class=\"red\">";
  if (helper = helpers.balance) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.balance); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</b> 元</li>\r\n		<li>支付密码：<input type=\"password\" name=\"pwd\" id=\"pwd\" /></li>\r\n		<li id=\"err_pay\" class=\"none\"></li>\r\n	 </ul>\r\n	</div>\r\n	<div class=\"actions\">\r\n	  <div class=\"ui negative button gopay\">\r\n		立即支付\r\n	  </div>\r\n	</div>\r\n</div>\r\n";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n<div class=\"ui small modal transition visible active\" style=\"margin-top: -110px;\">\r\n	<i class=\"close icon\"></i>\r\n	<div class=\"header\">\r\n	  Changing Your Thing\r\n	</div>\r\n	<div class=\"content\">\r\n	  <p>Do you want to change that thing to something else?</p>\r\n	</div>\r\n	<div class=\"actions\">\r\n	  <div class=\"ui negative button\">\r\n		No\r\n	  </div>\r\n	  <div class=\"ui positive right labeled icon button\">\r\n		Yes\r\n		<i class=\"checkmark icon\"></i>\r\n	  </div>\r\n	</div>\r\n</div>\r\n";
  }

  stack1 = helpers['if'].call(depth0, (depth0 && depth0.pay), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  })

});