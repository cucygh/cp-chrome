define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"ui tiered menu main-menu\">\r\n  <div class=\"menu\">\r\n	<a class=\"item\">&nbsp;&nbsp;&nbsp;&nbsp;</a>\r\n	<a class=\"item active\">选号投注</a>\r\n	<a class=\"item\">参与合买</a>\r\n	<a class=\"item \">单式上传</a>\r\n	<div class=\"right menu\">\r\n	  <div class=\"item\">\r\n		<div class=\"ui icon input\">\r\n		  <input type=\"text\" placeholder=\"Search...\">\r\n		  <i class=\"search icon\"></i>\r\n		</div>\r\n	  </div>\r\n	  <div class=\"ui dropdown item\">\r\n		购彩大厅 <i class=\"icon dropdown\"></i>\r\n		<div class=\"menu ui transition hidden\">\r\n		  <a class=\"item\"><i class=\"edit icon\"></i> 双色球 </a>\r\n		  <a class=\"item active\"><i class=\"globe icon\"></i> 大乐透</a>\r\n		  <a class=\"item\"><i class=\"settings icon\"></i> 11选5 </a>\r\n		</div>\r\n	  </div>\r\n	</div>\r\n  </div>\r\n  <div class=\"ui sub menu\">\r\n	<a class=\"item\">普通投注</a>\r\n	<a class=\"item\">机选套餐</a>\r\n	<a class=\"item\">购彩套餐</a>\r\n  </div>\r\n</div>";
  })

});