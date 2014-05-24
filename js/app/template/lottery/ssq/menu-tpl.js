define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"ui menu\">\r\n	<a class=\"item\" href=\"javascript:void(0);\" style=\"width:60px;\"></a>\r\n	<a class=\"active item\" href=\"#\">普通投注</a>\r\n	<a class=\"item\" href=\"#\">参与合买</a> \r\n	<a class=\"item\" href=\"#\">过关统计</a>\r\n	<a class=\"item\" href=\"#\">定制跟单</a>\r\n	<a class=\"item\" href=\"#\">走势图表</a>\r\n	<div class=\"right menu\" style=\"display:inline-block;\">\r\n		<div class=\"item\">\r\n		  <div class=\"ui icon input\">\r\n			<input type=\"text\" placeholder=\"我要找……\">\r\n			<i class=\"search link icon\"></i>\r\n		  </div>\r\n		</div>\r\n		<div class=\"ui dropdown item\">\r\n		  购彩大厅 <i class=\"dropdown icon\"></i>\r\n		  <div class=\"menu\">\r\n			<a class=\"item\" href=\"#\">大乐透</a>\r\n			<a class=\"item\" href=\"#\">福彩3D</a>\r\n			<a class=\"item\" href=\"#\">七星彩</a>\r\n		  </div>\r\n		</div>\r\n	</div>\r\n</div>";
  })

});