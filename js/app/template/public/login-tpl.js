define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += " <div class=\"ui modal form segment\">\r\n      <div class=\"field\">\r\n        <label>用户名</label>\r\n        <div class=\"ui left labeled icon input\">\r\n          <input type=\"text\" placeholder=\"在此输入用户名\" id=\"user\" value=\"";
  if (helper = helpers.user) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\r\n          <i class=\"user icon\"></i>\r\n          <div class=\"ui corner label\">\r\n            <i class=\"icon asterisk\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>密码</label>\r\n        <div class=\"ui left labeled icon input\">\r\n          <input type=\"password\" id=\"pwd\">\r\n          <i class=\"lock icon\"></i>\r\n          <div class=\"ui corner label\">\r\n            <i class=\"icon asterisk\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n	  <div class=\"inline field none auth\">\r\n		<input type=\"text\" placeholder=\"请输入右侧验证码\" id=\"captcha\">\r\n        <div class=\"ui pointing left label\">\r\n          <img height=\"33\" width=\"auto\" src=\"http://captcha.360.cn/image.php?app=caipiao&t=1401263483761\" alt=\"验证码\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"ui error message\">\r\n        <div class=\"header\"></div>\r\n      </div>\r\n	  <div class=\"actions\">\r\n		<div class=\"ui blue cancel button\">取消</div>\r\n		<div class=\"ui blue login button\">登录</div>\r\n	  </div>\r\n </div>\r\n";
  return buffer;
  })

});