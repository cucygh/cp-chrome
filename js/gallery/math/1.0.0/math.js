define([], function () {
	// 私有函数，阶乘运算
	var tank = function (n) {
		if (n == 0)
			return 1;
		else
			return tank(n - 1) * n;
	}
	// 组合函数
	var combo = function (m, n) {
		if (n <= m) {
			var result = tank(m - n) * tank(n);
			result = tank(m) / result;
			return result;
		} else
			return 0;
	}
	/**
	 * 递归组合算法
	 * 从 arr[1...n] 中任选 num(0 < num <= n) 个数的所有组合
	 */
	function combine(arr, num) {
		var r = [];
		(function f(t, a, n) {
			if (n == 0)
				return r.push(t);
			for (var i = 0, l = a.length; i <= l - n; i++) {
				f(t.concat(a[i]), a.slice(i + 1), n - 1);
			}
		})([], arr, num);
		return r;
	}
	/**
	 * @description 从自然数n-m的范围随机选出k组z个数，主要用于彩票中的随机选号
	 * @param {Object} options 对象参数
	 * @param {Number} options.min 范围最小值
	 * @param {Number} options.max 范围最大值
	 * @param {Array} options.share 胆码，如果指定，随机每一组里都包含该数组内的元素【可选】
	 * @param {Array} options.shahao 杀号，如果指定，随机每一组里都不会包含该数组内的元素【可选】
	 * @param {Number} options.size 随机的个数
	 * @param {Number} options.count 随机的组数，一组是options.size个默认为一组【可选】
	 * @param {Boolean} options.repeat 是否可以重复 默认不重复【可选】
	 * @param {Boolean} options.sort 是否排序 默认不排序【可选】
	 * @param {Boolean} options.repeat_team 如果是一组时，组内是否可以重复，默认可以【可选】
	 * @return {Array} 如：[[1,3,4],[3,4,6]]
	 */
	var random = function (options_p) {
		var options = {
			min : 0,
			max : 9,
			share : [],
			shahao : [],
			size : 1
		};
		$.extend(options, options_p);
		options.count = options.count || 1;
		var one_random = function (options) {
			var ar,
			tmp,
			k = 0,
			ml,
			l;
			var pre_str = '0000000000000000';
			ml = (options.max + '').length;
			ar = (options.share || []).toString();
			ar = ar === '' ? [] : ar.split(/[,\-_=+\|]/);
			l = ar.length;
			if (l > 0 && options.max > 9) { //有胆且为两位数以上，前面补零
				for (var i = 0; i < l; i++) {
					if (ar[i].length < ml) {
						ar[i] = pre_str.substr(0, ml - ar[i].length) + ar[i];
					}
				}
			}
			while (k < options.size) {
				tmp = (Math.floor(Math.random() * (options.max - options.min + 1)) + options.min) + '';
				tmp = pre_str.substr(0, ml - tmp.length) + tmp;
				if (options.repeat || (!options.repeat) && $.inArray(tmp, ar) == -1 && $.inArray(tmp, options.shahao || []) == -1) {
					ar.push(tmp);
					k++;
				}
			}
			if (!!options.sort) {
				ar.sort();
			}
			return typeof options.split_str !== 'undefined' ? ar.join(options.split_str) : ar;
		};
		var result = [];
		var count = combo(options.max - options.min + 1 - options.share.length - options.shahao.length, options.size);
		if (count < options.count) {
			options.repeat_team = 1;
		}
		for (var i = 0; i < options.count; i++) {
			var re_tmp = one_random(options);
			if (!options.repeat_team) {
				var re_len = result.length;
				var flag = 0;
				for (var j = 0; j < re_len; j++) {
					if (result[j].toString() == re_tmp.toString()) {
						flag = 1;
						break;
					}
				}
				if (flag) {
					i--;
				} else {
					result.push(re_tmp);
				}
			} else {
				result.push(re_tmp);
			}
		}
		return result;
	};
	// 接口对外
	return {
		combo : combo,
		comboArr : combine,
		random:random
	}
});
