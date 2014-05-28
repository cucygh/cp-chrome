define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n					<li>\r\n						<button class=\"circular ui icon button\">";
  if (helper = helpers.num) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.num); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</button>\r\n						<em class=\"yl\"></em>\r\n					</li>\r\n					";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "";
  buffer += "\r\n							<div class=\"item\" data-value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "个</div>\r\n							";
  return buffer;
  }

  buffer += "<div class=\"ui stacked segment ssq-area\">\r\n		<div class=\"ui vertical icon menu subnav\">\r\n		  <a class=\"item\">常规选号</a>\r\n		  <a class=\"red item active\">胆拖选号</a>\r\n		  <a class=\"item\">单式上传</a>\r\n		  <a class=\"item\">粘贴选号</a>\r\n		  <a class=\"item\">机选投注</a>\r\n		  <a class=\"item\">购彩套餐</a>\r\n		</div>\r\n		<aside class=\"panel\">\r\n			<b>上期开奖：<b class=\"red\">01 04 11 15 21 33</b> + <b class=\"blue\">06</b></b>\r\n			<article class=\"select bet-area\">\r\n				<ul class=\"redselect clearfix\">\r\n					";
  options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}
  if (helper = helpers.red) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.red); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.red) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n					<li class=\"set\">\r\n						<div class=\"ui selection dropdown\">\r\n						  <input type=\"hidden\" name=\"gender\">\r\n						  <div class=\"default text\">机选红球</div>\r\n						  <i class=\"dropdown icon\"></i>\r\n						  <div class=\"menu\">\r\n							";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.code), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n						  </div>\r\n						</div>\r\n					</li>\r\n					<li class=\"clear\">\r\n						<div class=\"mini ui button\"> 清空 </div>\r\n					</li>\r\n				</ul>\r\n				<ul class=\"blueselect clearfix\">\r\n					<li>\r\n						<button class=\"circular ui icon button\">01</button>\r\n						<em class=\"yl\">3</em>\r\n					</li>\r\n					<li class=\"set\">\r\n						<div class=\"ui selection dropdown\">\r\n						  <input type=\"hidden\" name=\"gender\">\r\n						  <div class=\"default text\">机选蓝球</div>\r\n						  <i class=\"dropdown icon\"></i>\r\n						  <div class=\"menu\">\r\n							<div class=\"item\" data-value=\"1\">1个</div>\r\n							<div class=\"item\" data-value=\"0\">2个</div>\r\n						  </div>\r\n						</div>\r\n					</li>\r\n					<li class=\"clear\">\r\n						<div class=\"mini ui button\"> 清空 </div>\r\n					</li>\r\n				</ul>\r\n				<p class=\"count\">\r\n					您选了 <b class=\"red\">6</b> 个红球，<b class=\"blue\">3</b> 个篮球，共 <b class=\"red\">3</b> 注，<b class=\"red\">6</b> 元\r\n				</p>\r\n				<div class=\"count\">\r\n					<p class=\"ui tiny button\">确认选号</p>\r\n				</div>\r\n				<div class=\"ui link list code_list\">\r\n				  <a class=\"item\">[单式] <b class=\"red\">01 03 04 05 23 31 + 06</b>[1注，2元]  <span href=\"#\" class=\"del\">删除</span></a>\r\n				 \r\n				</div>\r\n				<p class=\"result\">您总共选择了 <b class=\"red\">6</b> 注，<b class=\"red\">12</b> 元</p>\r\n				<div class=\"ui tiny buttons\">\r\n				  <div class=\"ui red button ownbuy\">我要自购</div>\r\n				  <div class=\"or\"></div>\r\n				  <div class=\"ui red button coopbuy\">发起合买</div>\r\n				  <div class=\"or\"></div>\r\n				  <div class=\"ui red button tracebuy\">我要追号</div>\r\n				</div>\r\n			</article>\r\n			<div class=\"ui raised segment reporter\">\r\n				<div class=\"ui red ribbon label\" style=\"width: 173px;left: -1.2rem;\">投注情报站</div>\r\n				<p>奖池：<b class=\"red\">1</b>亿<b class=\"red\">9013</b>万<b class=\"red\">2569</b>元</p>\r\n				<dl>\r\n					<dt><p>统计：第201448期</p></dt>\r\n					<dd><p>一等：<b class=\"red\">23</b>注</p></dd>\r\n					<dd><p>每注：<b class=\"red\">500</b>,<b class=\"red\">2347</b>元</p></dd>\r\n					<dd><p>二等：<b class=\"red\">567</b>注</p></dd>\r\n					<dd><p>每注：<b class=\"red\">500</b>,<b class=\"red\">2347</b>元</p></dd>\r\n				</dl>\r\n				<p>红球热码：<b class=\"red\">01 04 11 22</b></p>\r\n				<p>红球推荐：<b class=\"red\">01 04 11 22</b></p>\r\n				<p>蓝球热码：<b class=\"blue\">03 04 11 12</b></p>\r\n				<p>蓝球推荐：<b class=\"blue\">07 09 11 13</b></p>\r\n				<dl>\r\n					<dt><p>论坛热帖：</p></dt>\r\n					<dd><a href=\"#\" class=\"hot\">双色球杀号开始</a></dd>\r\n					<dd><a href=\"#\" class=\"hot\">双色球杀号开始</a></dd>\r\n					<dd><a href=\"#\" class=\"hot\">双色球杀号开始</a></dd>\r\n					<dd><a href=\"#\" class=\"hot\">双色球杀号开始</a></dd>\r\n					<dd><a href=\"#\" class=\"hot\">双色球杀号开始</a></dd>\r\n					<dd><a href=\"#\" class=\"hot\">双色球杀号开始</a></dd>\r\n					<dd><a href=\"#\" class=\"hot\">双色球杀号开始</a></dd>\r\n					<dd><a href=\"#\" class=\"hot\">双色球杀号开始</a></dd>\r\n				</dl>\r\n			</div>\r\n		</aside>\r\n</div>\r\n";
  return buffer;
  })

});