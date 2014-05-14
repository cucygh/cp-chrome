define(['handlebars', 'menu-tpl', 'nav-tpl', 'bet-tpl'], function (handlebars, Menu, Nav, Bet) {
	return {
		menu : function (data) {
			return Menu(data);
		},
		nav:function(data){
			return Nav(data);
		},
		bet:function(data){
			return Bet(data)
		}
	}
})
