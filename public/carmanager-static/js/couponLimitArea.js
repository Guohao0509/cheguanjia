layui.define(['element', 'common'], function (exports) {
    var $ = layui.jquery;
    var element = layui.element();

    var CouponLimitArea = function () { }

    CouponLimitArea.prototype = {
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
            $dom.html('<div id="areaLimitType" style="margin-left:20px;"></div><div style="margin-top: 20px" id="areaLimitInput"></div>');

            var tmpHtml = '<div class="layui-btn layui-btn-primary planBtn" data-params="-1">无限制</div>';
            for (var i = 0; i < data.length; i ++) {
                tmpHtml += '<div class="layui-btn layui-btn-primary planBtn" data-params="' + i +'">' + data[i].name + '</div>';
            }
            this.$container.append($dom);
            $('#areaLimitType').html(tmpHtml);
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
            $('#areaLimitInput').empty();
            if (index == -1) {
                delete Form.templates.area;
                return;
            }
            var data = this.data;
            var params = JSON.parse(data[index].paramDescription);

            for (var i = 0; i < params.length; i ++) {
                $('#areaLimitInput').append(new Form(params[i]));
            }
            Form.templates.area = data[index].template;
            $('#areaLimitInput').append('<input type="hidden" lay-name="tmpInput" name="areaCltId" value="' + data[index].cltId + '">');
        }
        
    }
    
    var couponLimitArea = new CouponLimitArea();

    exports('couponLimitArea', function () {
        return couponLimitArea;
    });
});