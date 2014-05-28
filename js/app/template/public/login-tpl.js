define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return " <div class=\"ui modal form segment\">\r\n      <div class=\"field\">\r\n        <label>Username</label>\r\n        <div class=\"ui left labeled icon input\">\r\n          <input type=\"text\" placeholder=\"Username\">\r\n          <i class=\"user icon\"></i>\r\n          <div class=\"ui corner label\">\r\n            <i class=\"icon asterisk\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"field\">\r\n        <label>Password</label>\r\n        <div class=\"ui left labeled icon input\">\r\n          <input type=\"password\">\r\n          <i class=\"lock icon\"></i>\r\n          <div class=\"ui corner label\">\r\n            <i class=\"icon asterisk\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui error message\">\r\n        <div class=\"header\">We noticed some issues</div>\r\n      </div>\r\n	  <div class=\"act\">\r\n		<div class=\"ui blue submit test button\">Login</div>\r\n	  </div>\r\n     \r\n </div>\r\n";
  })

});