define(['handlebars'], function(Handlebars) {

this["ygh"] = this["ygh"] || {};

this["ygh"]["js/app/template/lottery/ssq/betarea.handlebars"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n	<li>\r\n		<button class=\"circular ui icon button\">";
  if (helper = helpers.num) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.num); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</button>\r\n		<em class=\"yl\">";
  if (helper = helpers.yl) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.yl); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</em>\r\n	</li>\r\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "";
  buffer += "\r\n			<div class=\"item\" data-value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "个</div>\r\n			";
  return buffer;
  }

  buffer += "<ul class=\"redselect clearfix\">\r\n	";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.red) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.red); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.red) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n	<li class=\"set\">\r\n		<div class=\"ui selection dropdown\">\r\n		  <input type=\"hidden\" name=\"gender\">\r\n		  <div class=\"default text\">机选红球</div>\r\n		  <i class=\"dropdown icon\"></i>\r\n		  <div class=\"menu\">\r\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.code), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		  </div>\r\n		</div>\r\n	</li>\r\n	<li class=\"clear\">\r\n		<div class=\"mini ui button\"> 清空 </div>\r\n	</li>\r\n</ul>\r\n<ul class=\"blueselect clearfix\">\r\n	<li>\r\n		<button class=\"circular ui icon button\">01</button>\r\n		<em class=\"yl\">3</em>\r\n	</li>\r\n	<li class=\"set\">\r\n		<div class=\"ui selection dropdown\">\r\n		  <input type=\"hidden\" name=\"gender\">\r\n		  <div class=\"default text\">机选蓝球</div>\r\n		  <i class=\"dropdown icon\"></i>\r\n		  <div class=\"menu\">\r\n			<div class=\"item\" data-value=\"1\">1个</div>\r\n			<div class=\"item\" data-value=\"0\">2个</div>\r\n		  </div>\r\n		</div>\r\n	</li>\r\n	<li class=\"clear\">\r\n		<div class=\"mini ui button\"> 清空 </div>\r\n	</li>\r\n</ul>\r\n<p class=\"count\">\r\n	您选了 <b class=\"red\">6</b> 个红球，<b class=\"blue\">3</b> 个篮球，共 <b class=\"red\">3</b> 注，<b class=\"red\">6</b> 元\r\n</p>\r\n<div class=\"count\">\r\n	<p class=\"ui tiny button\">确认选号</p>\r\n</div>\r\n<div class=\"ui link list code_list\">\r\n  <a class=\"item\">[单式] <b class=\"red\">01 03 04 05 23 31 + 06</b>[1注，2元]  <span href=\"#\" class=\"del\">删除</span></a>\r\n \r\n</div>\r\n<p class=\"result\">您总共选择了 <b class=\"red\">6</b> 注，<b class=\"red\">12</b> 元</p>\r\n<div class=\"ui tiny buttons\">\r\n  <div class=\"ui red button ownbuy\">我要自购</div>\r\n  <div class=\"or\"></div>\r\n  <div class=\"ui red button coopbuy\">发起合买</div>\r\n  <div class=\"or\"></div>\r\n  <div class=\"ui red button tracebuy\">我要追号</div>\r\n</div>";
  return buffer;
  });

return this["ygh"];

});