layui.define(['element', 'common', 'laytpl'], function (exports) {
    var $ = layui.jquery;
    var element = layui.element();
    var laytpl = layui.laytpl;
    var layerTips = parent.layer === undefined ? layui.layer : parent.layer;
    $('<div><div>').load('./tpl/bind_car.html', function (html) {
        var BindCar = function () {  }

        BindCar.prototype = {
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
                $(content).on('click', '.carAddCoupon', function (e) {
                    var selectedList = [];
                    for (var i = 0; i < that.config.data.rows.length; i ++) {
                        selectedList.push(that.config.data.rows[i].carId);
                    }
                    layerTips.open({
                        type: 2,
                        content: './car_coupon_list.html?selectedList=' + encodeURI(JSON.stringify(selectedList)),
                        area: ['1000px', '620px'],
                        btn: ['确定','取消'],
                        yes: function (index, layero) {
                            var obj = layero.find('iframe')[0].contentWindow.document.title;
                            var tmpArr = JSON.parse(obj);
                            
                            that.config.data.rows = that.config.data.rows.concat(tmpArr);
                            that.render();
                            layerTips.close(index);
                        }
                    });
                });

                $(content).on('click','.deleteCar' , function (e) {
                    for (var i = 0; i < that.config.data.rows.length; i ++) {
                        if ($(e.target).attr('data-id') == that.config.data.rows[i].carId) {
                            that.config.data.rows.splice(i, 1);
                            $(this).parents('.layui-col-md4').remove();
                        }
                    }
                });
            }
        }
        
        var bindCar = new BindCar();
    
        exports('bindCar', function () {
            return bindCar;
        });
    })
    
});