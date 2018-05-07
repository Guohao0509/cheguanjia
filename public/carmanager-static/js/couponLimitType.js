layui.define(['element', 'common'], function (exports) {
    var $ = layui.jquery;
    var element = layui.element();

    var CouponLimitType = function () { }

    CouponLimitType.prototype = {
        set: function (options) {
            this.$container = $(options.container);
            this.data = options.data;
            this.init();
        },
        init: function () {
            this.creatHtml();
            this.bindEvent();
        },
        creatHtml: function () {
            var $dom = $('<div></div>');
            var data = this.data;
            $dom.html('<div id="typeLimitType" style="margin-left:20px;"></div><div style="margin-top: 20px" id="typeLimitInput"></div>');

            var tmpHtml = '<div class="layui-btn layui-btn-primary planBtn" data-params="-1">无限制</div>';
            for (var i = 0; i < data.length; i ++) {
                tmpHtml += '<div class="layui-btn layui-btn-primary planBtn" data-params="' + i + '">' + data[i].name + '</div>';
            }
            this.$container.append($dom);
            $('#typeLimitType').html(tmpHtml);
            this.$container.find('.planBtn').first().removeClass('layui-btn-primary');
        },
        bindEvent: function () {
            var that = this;
            this.$container.find('.planBtn').on('click', function (e) {
                 that.input(e.target.getAttribute("data-params"));
                 $(this).siblings().addClass('layui-btn-primary');
                 $(this).removeClass('layui-btn-primary');
             });
        },
        input: function (index) {
            $('#typeLimitInput').empty();
            if (index == -1) {
                delete Form.templates.type;
                return;
            }
            var data = this.data;
            var params = JSON.parse(data[index].paramDescription);
            console.log(params);
            for (var i = 0; i < params.length; i ++) {
                $('#typeLimitInput').append(new Form(params[i]));
            }
            Form.templates.type = data[index].template;
            $('#typeLimitInput').append('<input type="hidden" lay-name="tmpInput" name="typeCltId" value="'+ data[index].cltId + '">');
        }
        
    }
    
    var couponLimitType = new CouponLimitType();

    exports('couponLimitType', function () {
        return couponLimitType;
    });
});