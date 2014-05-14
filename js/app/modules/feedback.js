define([], function () {
	/**
	 * 提交投注信息生成订单
	 * @param type {String} 				eg: 'bet' || 'team' || 'join' || 'trace' || 'pteam'
	 * @param options {Object}           eg:	投注参数
	 * @param callback {Function}        eg: 回调函数
	 * @ignore created
	 * @return result {Array}
	 */
	var bet_post = function (type, options, callback) {
		var url = pay_url[type];
		$.ajax({
			url : url,
			type : 'POST',
			data : options,
			dataType : 'json',
			timeout : 180000,
			error : function () {},
			success : function (data) {
				check_status(data, callback);
			}
		});
	};

	/**
	 * 根据购买类型返回需要提供的参数
	 * @param type {Object} 				eg: 'bet' || '代购'
	 * @param data {Object}
	 * @param data {Object}
	 * @ignore created
	 * @return result {Array}
	 */
	var get_bet_param = function (type) {
		var by_name = /^[a-z]+$/gi.test(type);
		if (!by_name) {
			switch (type) {
			case '代购':
				type = 'bet';
				break;
			case '合买':
				type = 'team';
				break;
			case '认购':
				type = 'join';
				break;
			case '追号':
				type = 'trace';
				break;
			case '先发起':
				type = 'pteam';
				break;
			}
		}
		var enum_type = {};
		enum_type['bet'] = {
			buy_type : 'bet',
			LotID : 'lott_type_id',
			PlayID : 'Q.pages.play_id',
			BetCodes : 'BetCodes',
			OneMoney : '单注价格',
			BetPageID : 1010,
			DrawNo : '期数',
			BetMoney : '总金额',
			BetMulti : '倍数'
		};
		enum_type['team'] = {
			LotID : 'lott_type_id',
			PlayID : 'play_code',
			BetCodes : 'post_str',
			OriginCodes : 'code_post_tmp',
			OneMoney : '2',
			BetPageID : 1010,
			DrawNo : '期号',
			BetMoney : '总金额',
			BetMulti : 'mul',
			buy_type : 'team',
			SecrecyFlag : '公开方式',
			LockCount : '保底金额',
			SponsorBuy : '认购金额',
			SponsorDeduck : '中奖佣金',
			PTitle : 'title',
			PMemo : '宣言'
		};
		enum_type['join'] = {
			LotID : 'lott_id',
			ProjID : 'proj_id',
			BuyMoney : 'buy_num',
			BetPageID : 'from' || 0,
			buy_type : 'join'
		};
		enum_type['trace'] = {
			buy_type : 'trace',
			ChipCount : '单期单倍投注注数',
			ChipMoney : '单期单倍投注金额',
			StartDrawNo : '起始期号（最小期号）',
			EndDrawNo : '结束期号（最大期号）',
			TraceCount : '追号总期数',
			TotalMoney : '追号总金额',
			StopBonus : '当中奖奖金大于该值时自动取消后续追号',
			ChipMulStr : '每期追号倍数列表，每期倍数间用逗号分隔，如：2011001=2,2011002=2,2011003=3'
		};
		enum_type['pteam'] = {
			buy_type : 'pteambet',
			LotID : 'jczq',
			PlayID : 'playid',
			BetCodes : 'xfq',
			OneMoney : 2,
			BetPageID : '1010',
			DrawNo : 'issue',
			BetMoney : 'money',
			BetMulti : 'BetMulti',
			Count : 'Count',
			MinCount : 'MinCount',
			MinBetMoney : 'MinBetMoney',
			MaxBetMoney : 'MaxBetMoney',
			SecrecyFlag : '认购可见',
			LockCount : '保底',
			SponsorBuy : '认购',
			SponsorDeduck : '提成',
			PTitle : '标题',
			PMemo : '宣言',
			t : +new Date()
		};
		return enum_type[type];
	};
})
