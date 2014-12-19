define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"nav-tip\">\r\n	<img src=\"http://p6.qhimg.com/t01a576243610c17dcd.jpg\" alt=\"双色球logo\" width=\"52\" height=\"52\" class=\"logo\">\r\n	<span class=\"tips\">距 <b>";
  if (helper = helpers.Issue) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Issue); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</b> 期投注截止：</span>\r\n	<h3 class=\"countdown\"></h3>\r\n	<span class=\"warn\">每周二、四、日 <strong class=\"red\">21:35</strong> 开奖</span>\r\n	<span class=\"ui right profile\">\r\n		\r\n	</span>	\r\n</div>\r\n";
  return buffer;
  })

});