layui.define(['element', 'common', 'laypage', 'CouponItem', 'ajax'], function (exports) {
    var $ = layui.jquery;
    var element = layui.element();
    var CouponItem = layui.CouponItem();
    var laypage = layui.laypage();
    var ajax = layui.ajax();

    var Ctable = function (options) {
        return this.init(options);
    }

    Ctable.prototype = {
        init: function (options) {
            this.set(options);
            var $dom = this.creatHtml();
            this.bindEvent($dom);
            return $dom;
        },
        set: function (options) {
            this.api = options.api;
        },
        getData: function () {
            ajax.post(url, {} , function (data) {
                this.data = data;
            })
        },
        creatHtml: function () {
            for (var i = 0; i < data.length; i ++) {
                 
            }
        }

    }
    
    exports('CouponItem', function () {
        return CouponItem;
    });
});