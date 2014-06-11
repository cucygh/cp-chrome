define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<a class=\"item\"><b class=\"red\">";
  if (helper = helpers.red) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.red); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</b> + <b class=\"blue\">";
  if (helper = helpers.blue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.blue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</b> <span class=\"del\"></span></a>\r\n	";
  return buffer;
  }

  buffer += "<div class=\"ui link list code_list\">\r\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.code), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n<div class=\"ui vertical buttons random_list\">\r\n  <div class=\"ui button\">机选1注</div>\r\n  <div class=\"ui button\">机选5注</div>\r\n  <div class=\"ui button\">清空号码</div>\r\n  <div class=\"ui button reback\">返回选号</div>\r\n</div>\r\n<div class=\"ui tabular menu\">\r\n  <a class=\"active item\">\r\n	代购\r\n  </a>\r\n  <a class=\"item\">\r\n	发起合买\r\n  </a>\r\n  <a class=\"item\">\r\n	追号\r\n  </a>\r\n</div>\r\n<div class=\"buy_tab\">\r\n	<div class=\"ui form item\">\r\n		<div class=\"inline field\">\r\n			<label>购买倍数</label>\r\n			<input type=\"number\" placeholder=\"至少1倍\" min=\"1\" value=\"1\">\r\n		</div>\r\n		<div class=\"inline field\">\r\n			<label>购买注数</label>\r\n			<label><b class=\"red\">";
  if (helper = helpers.count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</b> 注</label>\r\n		</div>\r\n		<div class=\"inline field\">\r\n			<label>购买金额</label>\r\n			<label><b class=\"red\">";
  if (helper = helpers.money) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.money); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</b> 元</label>\r\n		</div>\r\n		<div class=\"ui primary button ownbuy\">立即支付</div>\r\n	</div>\r\n	<div class=\"ui form item none\">\r\n		<div class=\"inline field\">\r\n			<label>购买倍数</label>\r\n			<input type=\"text\" placeholder=\"至少1倍\">\r\n		</div>\r\n		<div class=\"inline field\">\r\n			<label>方案金额</label>\r\n			<label><b class=\"red\">";
  if (helper = helpers.count) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.count); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</b> 注，<b class=\"red\">";
  if (helper = helpers.money) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.money); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</b> 元</label>\r\n		</div>\r\n		<div class=\"inline field\">\r\n			<label>盈利提成</label>\r\n			<label class=\"ui blue label\">无</label>\r\n			<label class=\"ui label\">1%</label>\r\n			<label class=\"ui label\">2%</label>\r\n			<label class=\"ui label\">3%</label>\r\n			<label class=\"ui label\">4%</label>\r\n			<label class=\"ui label\">5%</label>\r\n			<label class=\"ui label\">6%</label>\r\n			<label class=\"ui label\">7%</label>\r\n			<label class=\"ui label\">8%</label>\r\n			<label class=\"ui label\">9%</label>\r\n			<label class=\"ui label\">10%</label>\r\n		</div>\r\n		<div class=\"inline field\">\r\n			<label>我要认购</label>\r\n			<input type=\"text\" placeholder=\"至少5%\">\r\n			<label>已认购6%</label>\r\n		</div>\r\n		<div class=\"inline field\">\r\n			<label>我要保底</label>\r\n			<input type=\"text\" placeholder=\"\">\r\n			<label>最多可保底12元</label>\r\n		</div>\r\n		<div class=\"inline field\">\r\n			<label>是否公开</label>\r\n			<div class=\"ui selection dropdown\">\r\n			  <input type=\"hidden\" name=\"gender\">\r\n			  <div class=\"default text\">公开</div>\r\n			  <i class=\"dropdown icon\"></i>\r\n			  <div class=\"menu\">\r\n				<div class=\"item\" data-value=\"0\">公开</div>\r\n				<div class=\"item\" data-value=\"1\">销售截止后公开</div>\r\n				<div class=\"item\" data-value=\"3\">仅对认购用户公开</div>\r\n			  </div>\r\n			</div>\r\n		</div>\r\n		<div class=\"inline field\">\r\n			<label>方案标题</label>\r\n			<input type=\"text\" placeholder=\"双色球第20130404期\">\r\n		</div>\r\n		<div class=\"inline field\">\r\n			<label>合买宣言</label>\r\n			<input type=\"text\" placeholder=\"这个家伙很懒，只想中大奖\">\r\n		</div>\r\n		<div class=\"ui primary button\">立即支付</div>\r\n	</div>\r\n	<!-- hemai end -->\r\n	<div class=\"ui form item none\">\r\n		<div class=\"inline field\">\r\n			<label>购买倍数</label>\r\n		</div>\r\n		<div class=\"inline field\">\r\n			<label>追号期数</label>\r\n			<input type=\"text\" placeholder=\"至少1期\" value=\"10\">\r\n			<label>期</label>\r\n		</div>\r\n		<div class=\"inline field\">\r\n			<label>投注金额</label>\r\n			<label><b class=\"red\">";
  if (helper = helpers.money) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.money); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</b> 元</label>\r\n		</div>\r\n		<div class=\"inline field\">\r\n			<input type=\"checkbox\" name=\"\" id=\"\"/>\r\n			<label>当中奖金额></label>\r\n			<input type=\"text\" value=\"5000\">\r\n			<label>元时，停止追号</label>\r\n		</div>\r\n		\r\n		<div class=\"ui primary button\">立即支付</div>\r\n	</div>\r\n	<!-- zhuihao end -->\r\n</div>";
  return buffer;
  })

});