layui.define(['element', 'common'], function (exports) {
    var $ = layui.jquery;
    var element = layui.element();

    var CouponLimitTime = function () { }

    CouponLimitTime.prototype = {
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
            $dom.html('<div id="timeLimitType" style="margin-left:20px;"></div><div style="margin-top: 20px" id="timeLimitInput"></div>');

            var tmpHtml = '<div class="layui-btn layui-btn-primary planBtn" data-params="-1">无限制</div>';
            for (var i = 0; i < data.length; i ++) {
                tmpHtml += '<div class="layui-btn layui-btn-primary planBtn" data-params="' + i + '">' + data[i].name + '</div>';
            }
            this.$container.append($dom);
            $('#timeLimitType').html(tmpHtml);
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
            $('#timeLimitInput').empty();
            
            if (index == -1) {
                delete Form.templates.time;
                return;
            }
            var data = this.data;
            var params = JSON.parse(data[index].paramDescription);

            for (var i = 0; i < params.length; i ++) {
                $('#timeLimitInput').append(new Form(params[i]));
            }

            Form.templates.time = data[index].template;
            $('#timeLimitInput').append('<input type="hidden" lay-name="tmpInput" name="timeCltId" value="' + data[index].cltId + '">');
        }
        
    }
    
    var couponLimitTime = new CouponLimitTime();

    exports('couponLimitTime', function () {
        return couponLimitTime;
    });
});