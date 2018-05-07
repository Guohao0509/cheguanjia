layui.define(['element', 'common', 'laytpl'], function (exports) {
    var $ = layui.jquery;
    var element = layui.element();
    var laytpl = layui.laytpl;
    var layerTips = parent.layer === undefined ? layui.layer : parent.layer;
    // load一些文档片段，用来渲染
    $('<div><div>').load('./tpl/add_coupon.html', function (html) {
        var AddCoupon = function () {}
        AddCoupon.prototype = {
            html: html,

            set: function (options) {
                this.config = {
                    content: options.content,
                    data: options.data
                }
                this.render();
                this.bindEvent();
            },

            render: function () {
                this.config.content.innerHTML = laytpl(this.html).render(this.config.data);
            },

            bindEvent: function () {
                var that = this;
                var content = this.config.content;

                // 添加兑换码
                $(content).on('click', '.codeAddCoupon', function (e) {
                    var selectedList = [];
                    for (var i = 0; i < that.config.data.rows.length; i ++) {
                        selectedList.push(that.config.data.rows[i].crId);
                    }
                    layerTips.open({
                        type: 2,
                        content: './code_coupon_list.html?selectedList=' + encodeURI(JSON.stringify(selectedList)),
                        area: ['1200px', '700px'],
                        btn: ['确定','取消'],
                        yes: function (index, layero) {
                            var obj = layero.find('iframe')[0].contentWindow.document.title;
                            var tmpArr = JSON.parse(obj);
                            for (var i = 0; i < tmpArr.length; i ++) {
                                tmpArr[i].count = 1;
                            }
                            that.config.data.rows = that.config.data.rows.concat(tmpArr);
                            that.render();
                            layerTips.close(index);
                        }
                    });
                });

                // 删除兑换码
                $(content).on('click', '.deleteCoupon', function (e) {
                    console.log(e)
                    for (var i = 0; i < that.config.data.rows.length; i ++) {
                        if ($(e.target).attr('data-id') == that.config.data.rows[i].crId) {
                            that.config.data.rows.splice(i, 1);
                            $(this).parents('.layui-col-md4').remove();
                        }
                    }
                });

                // 编辑数量
                $(content).on('click', 'a.edit-count', function (e) {
                    console.log(this);
                    $(this).siblings('.count').children().toggleClass('editing');
                    var tmpId = $(e.target).attr('data-id');
                    $(this).addClass('editing').siblings().removeClass('editing');
                    if ($(this).hasClass('ensureEdit')) {
                        var couponCount = $(this).siblings('.count').find('.editCount').val();
                        console.log(couponCount);
                        $(this).siblings('.count').children('.couponCount').text(couponCount);
                        for (var i = 0; i < that.config.data.rows.length; i ++) {
                            if (tmpId == that.config.data.rows[i].crId) {
                                that.config.data.rows[i].count = couponCount;
                                return;
                            }
                        };
                    }else {
                        $(this).siblings('.count').find('.editCount').focus();
                    }
                });
            }
        }
        
        var addCoupon = new AddCoupon();
    
        exports('addCoupon', function () {
            return addCoupon;
        });
    })
});