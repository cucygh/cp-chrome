define(['handlebars', 'menu-tpl', 'nav-tpl', 'bet-tpl','buytype-tpl'], function (handlebars, Menu, Nav, Bet,BuyType) {
	return {
		menu : function (data) {
			return Menu(data);
		},
		nav:function(data){
			return Nav(data);
		},
		bet:function(data){
			return Bet(data)
		},
		type:function(data){
			return BuyType(data)
		}
	}
});
