layui.define(['element', 'common', 'paging', 'form'], function (exports) {
    "use strict";
    var $ = layui.jquery,
        layerTips = parent.layer === undefined ? layui.layer : parent.layer,
        layer = layui.layer,
        element = layui.element(),
        common = layui.common,
        paging = layui.paging(),
        form = layui.form();

    var CouponTable = function () {
		/**
		 *  默认配置 
		 */
        this.config = {
            elem: undefined, //容器
            params: {},
            //data: undefined, //数据源
            openWait: false,
            url: undefined, //数据源地址
            type: 'GET', //读取方式
            skin: undefined, //风格样式 ，可选参数 line/row/nob
            paged: true, //是否显示分页组件
            onSuccess: undefined, //渲染成功后的回调
            panel: ''
        };
        this.v = '1.0.0';
    };
	/**
	 * 配置BTable
	 * @param {Object} options
	 */
    CouponTable.prototype.set = function (options) {
        var that = this;
        $.extend(true, that.config, options);
        return that;
    };
	/**
	 * 渲染table
	 */
    CouponTable.prototype.render = function () {
        var that = this;
        var _config = that.config;

        var tpl = '<div class="btable">';
        tpl += '<div class="ctable-content"></div>';
        if (_config.paged) {
            tpl += '<div data-type="paged" class="btable-paged"></div>';
        }
        tpl += '</div>';
        
        $(_config.elem).html(tpl);

        paging.init({
            url: _config.url, //地址
            elem: '.ctable-content', //内容容器
            type: _config.type,
            openWait: _config.openWait,
            tempType: 1,
            params: _config.params,
            fail: _config.onFail,
            complate: _config.onComplate,
            serverError: _config.onServerError,
            tempElem: getTpl(_config.panel), //模块容器
            paged: _config.paged,
            pageConfig: { //分页参数配置
                skip: true,
                elem: $(_config.elem).find('div[data-type=paged]'), //'#paged', //分页容器
                pageSize: _config.pageSize || 15 //分页大小
            },
            
            success: function () {
                // 完成的回调
                _config.onSuccess();
                console.log('success');
            }
        });
        return that;
    };
	/**
	 * get方法，一般用到添加额外的条件时用到，比如搜索功能
	 */
    CouponTable.prototype.get = function (options) {
        paging.get(options);
    };
	
	/**
	 * 获取模板
	 * @param {Object} options
	 */
    function getTpl(panel) {

        var tpl = panel;
        
        return tpl;
    }

    var couponTable = new CouponTable();

    exports('couponTable', function (options) {
        return couponTable.set(options);
    });
});