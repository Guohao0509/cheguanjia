/** common.js By Beginner Emain:zheng_jinfan@126.com HomePage:http://www.zhengjinfan.cn */
layui.define(['layer'], function(exports) {
	"use strict";

	var $ = layui.jquery,
		layer = layui.layer;

	var common = {
		/**
		 * 抛出一个异常错误信息
		 * @param {String} msg
		 */
		throwError: function (msg) {
			throw new Error(msg);
			return;
		},
		/**
		 * 弹出一个错误提示
		 * @param {String} msg
		 */
		msgError: function (msg) {
			layer.msg(msg, {
				icon: 5
			});
			return;
		},
		getParamValueFromSearchStr: function (key) {
			// 获取URL中?之后的字符
			var str = location.search;
			str = str.substring(1, str.length);

			// 以&分隔字符串，获得类似name=xiaoli这样的元素数组
			var arr = str.split("&");
			var obj = new Object();

			// 将每一个数组元素以=分隔并赋给obj对象
			for (var i = 0; i < arr.length; i++) {
				var tmp_arr = arr[i].split("=");
				obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
			}
			return obj[key];
		}
	}
	exports('common', common);
});