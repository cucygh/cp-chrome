define([], function () {
	var domain = 'http://ygh.cp.360.cn';
	// 彩种简称、ID、全称
	var lottery = {
		ssq : [220051, '双色球'],
		slt : [120029, '超级大乐透'],
		p3 : [110033, '排列三'],
		p5 : [110035, '排列五'],
		qxc : [110022, '七星彩'],
		sd : [210053, '福彩3D'],
		sdbj : [215152, '北京3D'],
		qlc : [220028, '七乐彩'],
		xw : [223515, '东方15选5'],
		xwtj : [225303, '天津15选5'],
		jczq : [130042, '竞彩足球'],
		jclq : [130043, '竞彩篮球'],
		dc : [130041, '北京单场'],
		sfc : [130011, '胜负彩'],
		rj : [130019, '任选九'],
		kl8 : [265108, '北京快乐8'],
		syxwsd : [166406, '山东11选5'],
		syxwjx : [168009, '新11选5'],
		syxwgd : [165707, '广东11选5'],
		syxwsh : [165207, '上海11选5'],
		syxwhlj : [166507, '幸运11选5'],
		sscjx : [258001, '江西时时彩'],
		ssccq : [255401, '重庆时时彩'],
		k3js : [255903, '江苏快3'],
		k3hb : [257703, '湖北快3'],
		k3nm : [257503, '内蒙快3'],
		k3jl : [258203, '吉林快3'],
		pk3 : [166407, '山东快乐扑克3'],
		jq4 : [130018, '四场进球'],
		zc6 : [130016, '6场半全场']
	};
	/**
	 * 获取彩种信息，含简写、id、全称
	 * @param name {String} 					eg:'130016' || 'zc6' || '6场半全场' || '6场' || '半全场'
	 * @ignore created
	 * @return result {Array}				eg:['zc6',130016, '6场半全场']
	 */
	var get_lot_name = function (name) {
		var by_name = /^[a-z\d]+$/gi.test(name);
		var by_id = /^\d+$/.test(name);
		var index = 0;
		if (!by_name) {
			index = by_id ? 1 : 2;
		}
		var p_arr = [];
		for (var p in lottery) {
			p_arr = [p].concat(lottery[p]);
			if (lottery[p][index].indexOf(name) > -1) {
				break;
			}
		}
		return p_arr;
	};
	// 支付URL
	var pay_url = {
		bet : domain + '/int/bet/',
		team : domain + '/int/teambet/',
		join : domain + '/int/join/',
		trace : domain + '/int/trace/',
		pteam : domain + '/int/pteambet/'
	};
	/**
	 * 获取支付URL
	 * @param con {String}
	 * @ignore created
	 * @return result {Array}
	 */
	var get_pay_url = function (con) {
		var refer = {
			bet : '代购',
			team : '合买',
			join : '认购',
			trace : '追号',
			pteam : '先发起'
		};
		var p,
		url;
		for (p in refer) {
			if (con.indexOf(p) > -1 || con.indexOf(refer[p]) > -1) {
				url = pay_url[p];
				break;
			}
		}
		return url || false;
	};
	/**
	 * 获取彩种基本信息
	 * @param id {String}
	 * @ignore created
	 * @return result {Object}
	 */
	var get_cur_issue = function (id, cur_issue, freq) {
		var url = domain + '/int/qcurissue';
		$.ajax({
			url : url,
			type : 'GET',
			data : {
				LotID : id
			},
			dataType : 'json',
			async : cur_issue ? true : false,
			success : function (data) {
				if (data) {
					console.log(cur_issue);
					if (cur_issue != undefined && cur_issue == data.issue) {
						console.log(cur_issue, data.issue);
						setTimeout(function () {
							get_cur_issue.call(null, id, cur_issue);
						}, freq || 30000);
					} else {
						return data;
					}
				} else {
					return data;
				}
				console.log(data);
			},
			error : function () {
				return false;
			},
			timeout : 10000
		})
	};
	/**
	 * 获取开奖号
	 * @param data {Object}
	 * @param data {Object}
	 * @param data {Object}
	 * @ignore created
	 * @return result {Array}
	 */
	var get_kj = function (id, cur_issue, freq) {};
	/**
	 * 获取遗漏
	 * @param data {Object}
	 * @param data {Object}
	 * @param data {Object}
	 * @ignore created
	 * @return result {Array}
	 */
	var get_yl = function (id, cur_issue, freq) {
		var url = domain + '/i/lotapi.html?do=qTopLotStat&lotID=' + id;
	};

	// 模块对外接口
	return {
		get_lot_name : get_lot_name,
		get_pay_url : get_pay_url,
		get_cur_issue : get_cur_issue,
		domain : domain
	}
});
