define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n		<i class=\"icon user\"></i>\r\n		<a href=\"#\" class=\"username\">";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a> | \r\n		<a href=\"#\" class=\"exit\">退出</a>\r\n		";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n		<a href=\"#\" class=\"login\">登录</a> | \r\n		<a href=\"#\" class=\"register\">注册</a>\r\n		";
  }

  buffer += "<div class=\"nav-tip\">\r\n	<img src=\"http://p6.qhimg.com/t01a576243610c17dcd.jpg\" alt=\"双色球logo\" width=\"52\" height=\"52\" class=\"logo\">\r\n	<span class=\"tips\">距 ";
  if (helper = helpers.issue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.issue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " 期投注截止：</span>\r\n	<h3 class=\"countdown\"><b class=\"hour red\">--</b>小时<b class=\"minute red\">--</b>分钟</h3>\r\n	<span class=\"warn\">每周二、四、日 <strong class=\"red\">21:35</strong> 开奖</span>\r\n	<span class=\"ui right profile\">\r\n		";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.logined), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	</span>	\r\n</div>\r\n";
  return buffer;
  })

});