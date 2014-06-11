define(['handlebars','pay-tpl'],function(handlebars,Pay){
	return {
		pay:function(data){
			return Pay(data);
		}
	}
});