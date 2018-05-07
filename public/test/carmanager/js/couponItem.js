layui.define(['element', 'common'], function (exports) {
    var $ = layui.jquery;
    var element = layui.element();

    var CouponItem = function (data) {
        return this.init(data);
    };

    CouponItem.prototype = {
        init: function () {
            this.set(data);
            return this.createHtml();
        }, 
        set: function (data) {
            this.couponId = data.couponId;
            this.title = data.title;
            this.nominal = data.nominal;
            this.unit = data.unit;
            this.instructions = data.instructions;
        },
        createHtml: function () {
            var $dom = $('div');
            var template = `
            <div class="coupon-wrapper">
                <div class="coupon-price">
                    <span class="coupon-value">${ this.nominal }</span>
                    <span class="coupon-unit">${ this.unit }</span>
                </div>
                <div class="coupon-name">${ this.title }</div>
                <div class="coupon-rule">
                    ${ this.instructions }
                </div>
                <i class="dline"></i>
                <div class="coupon-id">
                    <span>券ID</span>
                    ${ this.couponId }
                    <u class="coupon-copy">复制</u>
                </div>
                <div class="couponDelete">删除</div>
            </div>
            `;
            $dom.html(template);
            this.bindEvent($dom);
            return $dom;
        },
        bindEvent: function ($dom) {
            $dom.find('.coupon-copy').on('click', function (e) {
                // 复制
            });
        }

    }

    
    exports('CouponItem', function () {
        return CouponItem;
    });
});