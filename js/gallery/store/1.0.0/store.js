define([],function(){
	var me=localStorage;
	var store={
		set:function(key,value){
			var src=me.getItem(key)||'';
			me.setItem(key,src?src+';'+value:value);
		},
		get:function(key){
			return me.getItem(key);
		},
		clear:function(){
			me.clear();
		},
		remove:function(key){
			me.removeItem(key);
		}
	};
	return store;
})