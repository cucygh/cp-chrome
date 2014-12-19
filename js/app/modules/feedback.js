define([], function () {
	/**
	 * �ύͶע��Ϣ���ɶ���
	 * @param type {String} 				eg: 'bet' || 'team' || 'join' || 'trace' || 'pteam'
	 * @param options {Object}           eg:	Ͷע����
	 * @param callback {Function}        eg: �ص�����
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
	 * ���ݹ������ͷ�����Ҫ�ṩ�Ĳ���
	 * @param type {Object} 				eg: 'bet' || '����'
	 * @param data {Object}
	 * @param data {Object}
	 * @ignore created
	 * @return result {Array}
	 */
	var get_bet_param = function (type) {
		var by_name = /^[a-z]+$/gi.test(type);
		if (!by_name) {
			switch (type) {
			case '����':
				type = 'bet';
				break;
			case '����':
				type = 'team';
				break;
			case '�Ϲ�':
				type = 'join';
				break;
			case '׷��':
				type = 'trace';
				break;
			case '�ȷ���':
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
			OneMoney : '��ע�۸�',
			BetPageID : 1010,
			DrawNo : '����',
			BetMoney : '�ܽ��',
			BetMulti : '����'
		};
		enum_type['team'] = {
			LotID : 'lott_type_id',
			PlayID : 'play_code',
			BetCodes : 'post_str',
			OriginCodes : 'code_post_tmp',
			OneMoney : '2',
			BetPageID : 1010,
			DrawNo : '�ں�',
			BetMoney : '�ܽ��',
			BetMulti : 'mul',
			buy_type : 'team',
			SecrecyFlag : '������ʽ',
			LockCount : '���׽��',
			SponsorBuy : '�Ϲ����',
			SponsorDeduck : '�н�Ӷ��',
			PTitle : 'title',
			PMemo : '����'
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
			ChipCount : '���ڵ���Ͷעע��',
			ChipMoney : '���ڵ���Ͷע���',
			StartDrawNo : '��ʼ�ںţ���С�ںţ�',
			EndDrawNo : '�����ںţ�����ںţ�',
			TraceCount : '׷��������',
			TotalMoney : '׷���ܽ��',
			StopBonus : '���н�������ڸ�ֵʱ�Զ�ȡ������׷��',
			ChipMulStr : 'ÿ��׷�ű����б�ÿ�ڱ������ö��ŷָ����磺2011001=2,2011002=2,2011003=3'
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
			SecrecyFlag : '�Ϲ��ɼ�',
			LockCount : '����',
			SponsorBuy : '�Ϲ�',
			SponsorDeduck : '���',
			PTitle : '����',
			PMemo : '����',
			t : +new Date()
		};
		return enum_type[type];
	};
})
