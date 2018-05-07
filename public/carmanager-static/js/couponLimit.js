layui.define(['element', 'common'], function (exports) {
    var $ = layui.jquery;
    var element = layui.element();

    var CouponLimit = function () { }

    CouponLimit.prototype = {
        set: function (options) {
            var typeMap = {
                areaLimit: 0,
                timeLimit: 1,
                typeLimit: 2
            }
            this.$areaLimit = $(options.areaLimit);
            this.$timeLimit = $(options.timeLimit);
            this.$typeLimit = $(options.typeLimit);
            for (var i = 0; i < options.data; i ++) {
                if(options.data.type == typeMap.areaLimit) {
                    this.areaData = options.data[i];
                }
                if(options.data.type == typeMap.timeLimit) {
                    this.timeData = options.data[i];
                }
                if(options.data.type == typeMap.typeLimit) {
                    this.typeData = options.data[i];
                }
            }
        },
        creatHtmlArea: function () {
            $dom = $('<div></div>');
            $dom.html('<div id="areaLimitType"></div><div id="areaLimitInput"></div>');
            
        },
        creatHtmlTime: function () {
            $dom = $('<div></div>');
        },
        creatHtmlType: function () {
            $dom = $('<div></div>');
        }
    }
    
    var couponLimit = new CouponLimit();

    exports('couponLimit', function () {
        return couponLimit;
    });
});