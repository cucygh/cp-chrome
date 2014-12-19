define([], function (str) {
	var hexcase = 0;
	var hex_md5 = function (s) {
		return rstr2hex(rstr_md5(str2rstr_utf8(s)));
	};
	var rstr2hex = function (input) {
		try {
			hexcase
		} catch (e) {
			hexcase = 0;
		}
		var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
		var output = "";
		var x;
		for (var i = 0; i < input.length; i++) {
			x = input.charCodeAt(i);
			output += hex_tab.charAt((x >>> 4) & 0x0F) + hex_tab.charAt(x & 0x0F);
		}
		return output;
	};
	var rstr_md5 = function (s) {
		return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
	};
	var binl2rstr = function (input) {
		var output = "";
		for (var i = 0; i < input.length * 32; i += 8)
			output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
		return output;
	};
	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length.
	 */
	var binl_md5 = function (x, len) {
		/* append padding */
		x[len >> 5] |= 0x80 << ((len) % 32);
		x[(((len + 64) >>> 9) << 4) + 14] = len;

		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;

		for (var i = 0; i < x.length; i += 16) {
			var olda = a;
			var oldb = b;
			var oldc = c;
			var oldd = d;

			a = md5_ff(a, b, c, d, x[i + 0], 7, parseInt('0xd76aa478'));
			d = md5_ff(d, a, b, c, x[i + 1], 12, parseInt('0xe8c7b756'));
			c = md5_ff(c, d, a, b, x[i + 2], 17, parseInt('0x242070db'));
			b = md5_ff(b, c, d, a, x[i + 3], 22, parseInt('0xc1bdceee'));
			a = md5_ff(a, b, c, d, x[i + 4], 7, parseInt('0xf57c0faf'));
			d = md5_ff(d, a, b, c, x[i + 5], 12, parseInt('0x4787c62a'));
			c = md5_ff(c, d, a, b, x[i + 6], 17, parseInt('0xa8304613'));
			b = md5_ff(b, c, d, a, x[i + 7], 22, parseInt('0xfd469501'));
			a = md5_ff(a, b, c, d, x[i + 8], 7, parseInt('0x698098d8'));
			d = md5_ff(d, a, b, c, x[i + 9], 12, parseInt('0x8b44f7af'));
			c = md5_ff(c, d, a, b, x[i + 10], 17, parseInt('0xffff5bb1'));
			b = md5_ff(b, c, d, a, x[i + 11], 22, parseInt('0x895cd7be'));
			a = md5_ff(a, b, c, d, x[i + 12], 7, parseInt('0x6b901122'));
			d = md5_ff(d, a, b, c, x[i + 13], 12, parseInt('0xfd987193'));
			c = md5_ff(c, d, a, b, x[i + 14], 17, parseInt('0xa679438e'));
			b = md5_ff(b, c, d, a, x[i + 15], 22, parseInt('0x49b40821'));

			a = md5_gg(a, b, c, d, x[i + 1], 5, parseInt('0xf61e2562'));
			d = md5_gg(d, a, b, c, x[i + 6], 9, parseInt('0xc040b340'));
			c = md5_gg(c, d, a, b, x[i + 11], 14, parseInt('0x265e5a51'));
			b = md5_gg(b, c, d, a, x[i + 0], 20, parseInt('0xe9b6c7aa'));
			a = md5_gg(a, b, c, d, x[i + 5], 5, parseInt('0xd62f105d'));
			d = md5_gg(d, a, b, c, x[i + 10], 9, parseInt('0x02441453'));
			c = md5_gg(c, d, a, b, x[i + 15], 14, parseInt('0xd8a1e681'));
			b = md5_gg(b, c, d, a, x[i + 4], 20, parseInt('0xe7d3fbc8'));
			a = md5_gg(a, b, c, d, x[i + 9], 5, parseInt('0x21e1cde6'));
			d = md5_gg(d, a, b, c, x[i + 14], 9, parseInt('0xc33707d6'));
			c = md5_gg(c, d, a, b, x[i + 3], 14, parseInt('0xf4d50d87'));
			b = md5_gg(b, c, d, a, x[i + 8], 20, parseInt('0x455a14ed'));
			a = md5_gg(a, b, c, d, x[i + 13], 5, parseInt('0xa9e3e905'));
			d = md5_gg(d, a, b, c, x[i + 2], 9, parseInt('0xfcefa3f8'));
			c = md5_gg(c, d, a, b, x[i + 7], 14, parseInt('0x676f02d9'));
			b = md5_gg(b, c, d, a, x[i + 12], 20, parseInt('0x8d2a4c8a'));

			a = md5_hh(a, b, c, d, x[i + 5], 4, parseInt('0xfffa3942'));
			d = md5_hh(d, a, b, c, x[i + 8], 11, parseInt('0x8771f681'));
			c = md5_hh(c, d, a, b, x[i + 11], 16, parseInt('0x6d9d6122'));
			b = md5_hh(b, c, d, a, x[i + 14], 23, parseInt('0xfde5380c'));
			a = md5_hh(a, b, c, d, x[i + 1], 4, parseInt('0xa4beea44'));
			d = md5_hh(d, a, b, c, x[i + 4], 11, parseInt('0x4bdecfa9'));
			c = md5_hh(c, d, a, b, x[i + 7], 16, parseInt('0xf6bb4b60'));
			b = md5_hh(b, c, d, a, x[i + 10], 23, parseInt('0xbebfbc70'));
			a = md5_hh(a, b, c, d, x[i + 13], 4, parseInt('0x289b7ec6'));
			d = md5_hh(d, a, b, c, x[i + 0], 11, parseInt('0xeaa127fa'));
			c = md5_hh(c, d, a, b, x[i + 3], 16, parseInt('0xd4ef3085'));
			b = md5_hh(b, c, d, a, x[i + 6], 23, parseInt('0x04881d05'));
			a = md5_hh(a, b, c, d, x[i + 9], 4, parseInt('0xd9d4d039'));
			d = md5_hh(d, a, b, c, x[i + 12], 11, parseInt('0xe6db99e5'));
			c = md5_hh(c, d, a, b, x[i + 15], 16, parseInt('0x1fa27cf8'));
			b = md5_hh(b, c, d, a, x[i + 2], 23, parseInt('0xc4ac5665'));

			a = md5_ii(a, b, c, d, x[i + 0], 6, parseInt('0xf4292244'));
			d = md5_ii(d, a, b, c, x[i + 7], 10, parseInt('0x432aff97'));
			c = md5_ii(c, d, a, b, x[i + 14], 15, parseInt('0xab9423a7'));
			b = md5_ii(b, c, d, a, x[i + 5], 21, parseInt('0xfc93a039'));
			a = md5_ii(a, b, c, d, x[i + 12], 6, parseInt('0x655b59c3'));
			d = md5_ii(d, a, b, c, x[i + 3], 10, parseInt('0x8f0ccc92'));
			c = md5_ii(c, d, a, b, x[i + 10], 15, parseInt('0xffeff47d'));
			b = md5_ii(b, c, d, a, x[i + 1], 21, parseInt('0x85845dd1'));
			a = md5_ii(a, b, c, d, x[i + 8], 6, parseInt('0x6fa87e4f'));
			d = md5_ii(d, a, b, c, x[i + 15], 10, parseInt('0xfe2ce6e0'));
			c = md5_ii(c, d, a, b, x[i + 6], 15, parseInt('0xa3014314'));
			b = md5_ii(b, c, d, a, x[i + 13], 21, parseInt('0x4e0811a1'));
			a = md5_ii(a, b, c, d, x[i + 4], 6, parseInt('0xf7537e82'));
			d = md5_ii(d, a, b, c, x[i + 11], 10, parseInt('0xbd3af235'));
			c = md5_ii(c, d, a, b, x[i + 2], 15, parseInt('0x2ad7d2bb'));
			b = md5_ii(b, c, d, a, x[i + 9], 21, parseInt('0xeb86d391'));

			a = safe_add(a, olda);
			b = safe_add(b, oldb);
			c = safe_add(c, oldc);
			d = safe_add(d, oldd);
		}
		return Array(a, b, c, d);
	};
	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	var md5_cmn = function (q, a, b, x, s, t) {
		return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
	}
	var md5_ff = function (a, b, c, d, x, s, t) {
		return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}
	var md5_gg = function (a, b, c, d, x, s, t) {
		return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}
	var md5_hh = function (a, b, c, d, x, s, t) {
		return md5_cmn(b^c^d, a, b, x, s, t);
	}
	var md5_ii = function (a, b, c, d, x, s, t) {
		return md5_cmn(c^(b | (~d)), a, b, x, s, t);
	}
	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	var safe_add = function (x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xFFFF);
	};
	/*
	 * Convert a raw string to an array of little-endian words
	 * Characters >255 have their high-byte silently ignored.
	 */
	var rstr2binl = function (input) {
		var output = Array(input.length >> 2);
		for (var i = 0; i < output.length; i++)
			output[i] = 0;
		for (var i = 0; i < input.length * 8; i += 8)
			output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
		return output;
	};
	/*
	 * Encode a string as utf-8.
	 * For efficiency, this assumes the input is valid utf-16.
	 */
	var str2rstr_utf8 = function (input) {
		var output = "";
		var i = -1;
		var x,
		y;
		while (++i < input.length) {
			/* Decode utf-16 surrogate pairs */
			x = input.charCodeAt(i);
			y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
			if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
				x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
				i++;
			}

			/* Encode output as utf-8 */
			if (x <= 0x7F)
				output += String.fromCharCode(x);
			else if (x <= 0x7FF)
				output += String.fromCharCode(0xC0 | ((x >>> 6) & 0x1F), 0x80 | (x & 0x3F));
			else if (x <= 0xFFFF)
				output += String.fromCharCode(0xE0 | ((x >>> 12) & 0x0F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
			else if (x <= 0x1FFFFF)
				output += String.fromCharCode(0xF0 | ((x >>> 18) & 0x07), 0x80 | ((x >>> 12) & 0x3F), 0x80 | ((x >>> 6) & 0x3F), 0x80 | (x & 0x3F));
		}
		return output;
	};
	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	var bit_rol=function (num, cnt) {
		return (num << cnt) | (num >>> (32 - cnt));
	}
	
	return hex_md5;
});
