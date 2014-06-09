define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n			<li><div class=\"circular ui icon button\">";
  if (helper = helpers.red) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.red); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div><span class=\"yl none\">01</span><input type=\"checkbox\" class=\"none\"/></li>\r\n			";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "";
  buffer += "\r\n			<li><div class=\"circular ui icon button\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</div><span class=\"yl none\">12</span><input type=\"checkbox\" class=\"none\"/></li>\r\n			";
  return buffer;
  }

  buffer += "<article class=\"betarea\">\r\n	<strong style=\"margin-left:2em;\">玩法提示：</strong>至少选6个红球和1个蓝球组合成一注彩票，单注最高奖金<b class=\"red\">1000万</b>元\r\n	<div class=\"redarea select\">\r\n		<p><strong class=\"red\">红球区 </strong>至少选择6个球</p>\r\n		<ul>\r\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.red), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</ul>\r\n	</div>\r\n	<div class=\"bluearea select\">\r\n		<p><strong class=\"blue\">蓝球区 </strong>至少选择1个球</p>\r\n		<ul>\r\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.blue), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</ul>\r\n	</div>\r\n	<p>\r\n			<select name=\"\" id=\"red_r_num\">\r\n				<option value=\"0\">机选红球</option>\r\n				<option value=\"6\">6</option>\r\n				<option value=\"7\">7</option>\r\n				<option value=\"8\">8</option>\r\n				<option value=\"9\">9</option>\r\n				<option value=\"10\">10</option>\r\n				<option value=\"11\">11</option>\r\n				<option value=\"12\">12</option>\r\n			</select>\r\n			<input type=\"checkbox\" name=\"\" id=\"\"/>遗漏\r\n			<input type=\"checkbox\" name=\"\" id=\"\"/>定胆\r\n			<a href=\"\" class=\"clear\">清空</a>\r\n			<select name=\"\" id=\"blue_r_num\">\r\n				<option value=\"0\">机选蓝球</option>\r\n				<option value=\"6\">6</option>\r\n				<option value=\"7\">7</option>\r\n				<option value=\"8\">8</option>\r\n				<option value=\"9\">9</option>\r\n				<option value=\"10\">10</option>\r\n				<option value=\"11\">11</option>\r\n				<option value=\"12\">12</option>\r\n			</select>\r\n			<input type=\"checkbox\" name=\"\" id=\"\"/>遗漏\r\n			<input type=\"checkbox\" name=\"\" id=\"\"/>定胆\r\n			<a href=\"\" class=\"clear\">清空</a>\r\n	</p>\r\n	<p class=\"bet\">\r\n		共选 <b class=\"red\">0</b> 注, <b class=\"red\">0</b> 元\r\n	</p>\r\n	<div class=\"bet\">\r\n		<div class=\"ui youtube button\">确认选号</div>\r\n	</div>\r\n	<div class=\"ui yellow  message\">目前奖池 <b class=\"red\">5553</b> 万 <b class=\"red\">4992</b> 元，至少可以开出 <b class=\"red\">11</b> 注500万大奖\r\n		<div class=\"ui compact menu code_basket\">\r\n		  <a class=\"item\">\r\n			<div class=\"floating ui red label\">￥10</div>\r\n			双色球号码篮\r\n		  </a>\r\n		</div>\r\n	</div>\r\n</article>\r\n";
  return buffer;
  })

});