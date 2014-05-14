define(['jquery', 'underscore', 'backbone', 'v-login','v-ssq'], function ($, _, Backbone, loginView,Vssq) {
	var AppRouter = Backbone.Router.extend({
			initialize : function () {
				Backbone.history.start();
			},
			routes : {
				login : 'login',
				nav : 'nav',
				ssq:'ssq'
			},
			login : function () {
				var login_view = new loginView();
			},
			nav : function () {
				var nav_view = new navView();
			},
			ssq:function(){
				var ssq_view=new Vssq();
			}

		});
	return AppRouter;
});
