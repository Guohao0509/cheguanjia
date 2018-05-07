layui.define(['element', 'common'], function (exports) {
    var $ = layui.jquery;
    var element = layui.element();

    var CouponPlan = function () { }

    CouponPlan.prototype = {
        /**
         * @param {Object} options {data: 构造此模块所需要的数据, container: 渲染的容器}
         */
        set: function (options) {
            if (typeof options.container == 'string') {
                options.container = document.getElementById(options.container);
            }
            this.data = options.data;
            this.container = options.container;
            this.init();
        },
        // 初始化 创建dom 并为其绑定事件
        init: function () {
            this.creatHtml();
            this.bindEvent();
        },
        // 创建html
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

        // 绑定事件
        bindEvent: function () {
           var that = this;
            // 添加一些样式，并渲染相应的input
            $(this.container).find('.planBtn').on('click', function (e) {
                // 更具不同的数据来渲染不同的input
                that.input(e.target.getAttribute("data-params"));
                $(this).siblings().addClass('layui-btn-primary');
                $(this).removeClass('layui-btn-primary');
            });
        },
        // 更具不同的数据来渲染不同的input
        input: function (index) {
            var data = this.data;
            var paramDescription = JSON.parse(data[index].paramDescription);
            $('#planInput').empty();
            for (var i = 0; i < paramDescription.length; i ++) {
                // 构造input
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