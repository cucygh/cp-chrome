define(['handlebars'], function (Handlebars) {
	var template = Handlebars.template,
	templates = Handlebars.templates = Handlebars.templates || {};
	return templates['pop'] = template(function (Handlebars, depth0, helpers, partials, data) {
			this.compilerInfo = [4, '>= 1.0.0'];
			helpers = this.merge(helpers, Handlebars.helpers);
			data = data || {};
			var buffer = "",
			stack1,
			helper,
			functionType = "function",
			escapeExpression = this.escapeExpression,
			self = this;

			function program1(depth0, data) {

				var buffer = "",
				stack1,
				helper;
				buffer += "\r\n						<footer class=\"lybt\">\r\n							<div class=\"lyother\">\r\n								<p>";
				if (helper = helpers.info) {
					stack1 = helper.call(depth0, {
							hash : {},
							data : data
						});
				} else {
					helper = (depth0 && depth0.info);
					stack1 = typeof helper === functionType ? helper.call(depth0, {
							hash : {},
							data : data
						}) : helper;
				}
				buffer += escapeExpression(stack1)
				 + "</p>\r\n							</div>\r\n							<div class=\"lybtns\">\r\n								<button type=\"button\" class=\"u-btn confirm\">确定</button>\r\n								";
				stack1 = helpers['if'].call(depth0, (depth0 && depth0.cancel), {
						hash : {},
						inverse : self.noop,
						fn : self.program(2, program2, data),
						data : data
					});
				if (stack1 || stack1 === 0) {
					buffer += stack1;
				}
				buffer += "\r\n							</div>\r\n						</footer>\r\n						";
				return buffer;
			}
			function program2(depth0, data) {

				return "\r\n								<button type=\"button\" class=\"u-btn u-btn-c4 cancel\">取消</button>\r\n								";
			}

			buffer += "<div class=\"m-layer z-show ";
			if (helper = helpers.layer) {
				stack1 = helper.call(depth0, {
						hash : {},
						data : data
					});
			} else {
				helper = (depth0 && depth0.layer);
				stack1 = typeof helper === functionType ? helper.call(depth0, {
						hash : {},
						data : data
					}) : helper;
			}
			buffer += escapeExpression(stack1)
			 + "\">\r\n	<table>\r\n		<tbody>\r\n			<tr>\r\n				<td>\r\n					<article class=\"lywrap\">\r\n						<header class=\"lytt\"><h2 class=\"u-tt\">";
			if (helper = helpers.title) {
				stack1 = helper.call(depth0, {
						hash : {},
						data : data
					});
			} else {
				helper = (depth0 && depth0.title);
				stack1 = typeof helper === functionType ? helper.call(depth0, {
						hash : {},
						data : data
					}) : helper;
			}
			buffer += escapeExpression(stack1)
			 + "</h2><span class=\"lyclose close\">×</span></header>\r\n						<section class=\"lyct\">\r\n							<p>";
			if (helper = helpers.content) {
				stack1 = helper.call(depth0, {
						hash : {},
						data : data
					});
			} else {
				helper = (depth0 && depth0.content);
				stack1 = typeof helper === functionType ? helper.call(depth0, {
						hash : {},
						data : data
					}) : helper;
			}
			if (stack1 || stack1 === 0) {
				buffer += stack1;
			}
			buffer += "</p>\r\n						</section>\r\n						";
			stack1 = helpers['if'].call(depth0, (depth0 && depth0.footer), {
					hash : {},
					inverse : self.noop,
					fn : self.program(1, program1, data),
					data : data
				});
			if (stack1 || stack1 === 0) {
				buffer += stack1;
			}
			buffer += "\r\n					</article>\r\n				</td>\r\n			</tr>\r\n		</tbody>\r\n	</table>\r\n</div>\r\n";
			return buffer;
		});
});
