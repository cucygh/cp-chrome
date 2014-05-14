define(['handlebars','betarea-tpl','nav-tpl','menu-tpl'],function(handlebars,betArea,nav,menu){
	var nav_tpl=function(data){
		return nav(data);
	};
	var bet_tpl=function(data){
		return betArea(data);
	}
	var menu_tpl=function(data){
		return menu(data);
	};
	return {
		nav:nav_tpl,
		bet:bet_tpl,
		menu:menu_tpl
	}
});