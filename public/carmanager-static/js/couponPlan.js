layui.define(['element', 'common'], function (exports) {
    var $ = layui.jquery;
    var element = layui.element();

    var CouponPlan = function () { }

    CouponPlan.prototype = {
        set: function (options) {
            if (typeof options.container == 'string') {
                options.container = document.getElementById(options.container);
            }

            this.data = options.data;
            this.container = options.container;
            this.init();
        },

        init: function () {
            this.creatHtml();
            this.bindEvent();
        },

        creatHtml: function () {
            var dom = document.createElement('div');
            $(dom).html('<div id="planType" style="margin-left:20px;"></div><div style="margin-top: 20px" id="planInput"></div>');
            var data = this.data;
            var tmpHtml = '';
            for (var i = 0; i < data.length; i ++) {

                tmpHtml += '<div class="layui-btn layui-btn-primary planBtn" data-params="' + i + '">' + data[i].name + '</div>';
            }
            $(this.container).append(dom);
            $('#planType').html(tmpHtml);
            $('.planBtn').first().removeClass('layui-btn-primary');
            this.input(0);
        },

        bindEvent: function () {
           var that = this;
            $(this.container).find('.planBtn').on('click', function (e) {
                that.input(e.target.getAttribute("data-params"));
                $(this).siblings().addClass('layui-btn-primary');
                $(this).removeClass('layui-btn-primary');
            });
        },

        input: function (index) {
            var data = this.data;
            var paramDescription = JSON.parse(data[index].paramDescription);
            $('#planInput').empty();
            for (var i = 0; i < paramDescription.length; i ++) {
                $('#planInput').append(new Form(paramDescription[i]));
            }
            Form.templates.plan = data[index].template;
            $('#planInput').append('<input type="hidden" lay-name="tmpInput" name="cptId" value="' + data[index].cptId + '">');
        }
    }
    
    var couponPlan = new CouponPlan();

    exports('couponPlan', function () {
        return couponPlan;
    });
});