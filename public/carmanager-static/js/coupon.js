
var Form = function (params) {
    Form.layui = layui;
    this.str = '';
    return this.init(params);
}

Form.templates = { };

Form.prototype = {
    // 更具不同的类型来构造不同类型的表单控件
    init: function (params) {
        var dom = null;

        params.type = params.type ? params.type : 'text';
        params.key = params.key ? params.key : '';
        params.label = params.label ? params.label : '';
        params.unit = params.unit ? params.unit : '';
        params.tip = params.tip ? params.tip : '';
        params.regex = params.regex ? params.regex : '';
        params.api = params.api ? params.api : '';
        params.showkey = params.showkey ? params.showkey : '';

        switch (params.type) {
            case 'time':
                dom = new TimeInput(params);
                break;
            case 'text':
                dom = new TextInput(params);
                break;
            case 'select':
                dom = new SelectInput(params);
                break;
            default:
                dom = document.createElement('<div>没有此输入框的类型<div>') 
        }
        return dom;
    }
}
// 基本的文本控件
var TextInput = function (params) {
    return this.init(params);
}

TextInput.prototype = {
    init: function (params) {
        var dom = document.createElement('DIV');
        // 如果正则为空则 为必填
        var regexID = 'required';
        if (params.regex != '') {
            regexID = 'ID' + Math.random().toString(36).substr(2);
            var tmp = {};
            tmp[regexID] = [params.regex, '请规范您的输入'];
        }
        
        // 构造input的模板
        // params.showkey 用于拼接使用说明的字段
        var templete = '' +
        '<div class="layui-form-item">' + 
           '<label class="layui-form-label">' + params.label + '</label>' +
            '<div class="layui-input-inline">' + 
                '<input type="' + params.type + '" name="' + params.key + '" lay-verify="' + regexID + '" class="layui-input">' +
                '<input type="hidden" lay-name="tmpInput" name="' + params.showkey + '">' +
            '</div>' +
            '<div class="layui-form-mid layui-word-aux">' + params.unit + '&nbsp;&nbsp;&nbsp;&nbsp;' + params.tip + '</div>' +
        '</div>';
        // 如果字段为nominal 则为单元
        if (params.key == 'nominal') {
            templete += '<input type="hidden" name="nominalUnit" value="' + params.unit +'"/>';
        }

        dom.innerHTML = templete;

        this.bindVerify(tmp);

        return dom;
    },
    // 绑定正则
    bindVerify: function(obj) {
        var form = Form.layui.form();
        form.verify(obj);
    }
}

var TimeInput = function (params) {

    return this.init(params);
}

// 时间选择器
TimeInput.prototype = {
    init: function (params) {
        var dom = document.createElement('DIV');
        this.$ = layui.jquery;
        this.$(dom).attr({'hh': '00', 'mm': '00', 'ss': '00'});
        // params.showkey 用于拼接使用说明的字段
        var templete = 
        '<div class="layui-form-item ">' +
            '<label class="layui-form-label">' + params.label + '</label>' +
            '<div class="layui-input-inline time-pick-box">' +
                '<input type="text" name="' + params.key + '" class="layui-input" value="00:00:00" lay-verify="required">' +
                '<input type="hidden" name="' + params.showkey + '" lay-name="tmpInput">' +
                '<div class="layui-my-laydate" style="left: 0px; top: 33px; display: none;"><div class="layui-my-laydate-main my-laydate-main-list-0 my-laydate-time-show"><div class="layui-my-laydate-header"><i class="layui-icon my-laydate-icon my-laydate-prev-y"></i><i class="layui-icon my-laydate-icon my-laydate-prev-m"></i><div class="my-laydate-set-ym"><span lay-ym="2018-3" lay-type="year">2018年</span><span lay-ym="2018-3" lay-type="month">3月</span><span class="my-laydate-time-text">选择时间</span></div><i class="layui-icon my-laydate-icon my-laydate-next-m"></i><i class="layui-icon my-laydate-icon my-laydate-next-y"></i></div><div class="layui-my-laydate-content"><table><thead><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr></thead><tbody><tr><td class="my-laydate-day-prev" lay-ymd="2018-2-25">25</td><td class="my-laydate-day-prev" lay-ymd="2018-2-26">26</td><td class="my-laydate-day-prev" lay-ymd="2018-2-27">27</td><td class="my-laydate-day-prev" lay-ymd="2018-2-28">28</td><td lay-ymd="2018-3-1" class="">1</td><td lay-ymd="2018-3-2" class="">2</td><td lay-ymd="2018-3-3" class="">3</td></tr><tr><td lay-ymd="2018-3-4" class="">4</td><td lay-ymd="2018-3-5" class="">5</td><td lay-ymd="2018-3-6" class="">6</td><td lay-ymd="2018-3-7" class="">7</td><td lay-ymd="2018-3-8" class="">8</td><td lay-ymd="2018-3-9" class="">9</td><td lay-ymd="2018-3-10" class="">10</td></tr><tr><td lay-ymd="2018-3-11" class="">11</td><td lay-ymd="2018-3-12" class="">12</td><td lay-ymd="2018-3-13" class="">13</td><td lay-ymd="2018-3-14" class="">14</td><td class="layui-this" lay-ymd="2018-3-15">15</td><td lay-ymd="2018-3-16" class="">16</td><td lay-ymd="2018-3-17" class="">17</td></tr><tr><td lay-ymd="2018-3-18" class="">18</td><td lay-ymd="2018-3-19" class="">19</td><td lay-ymd="2018-3-20" class="">20</td><td lay-ymd="2018-3-21" class="">21</td><td lay-ymd="2018-3-22" class="">22</td><td lay-ymd="2018-3-23" class="">23</td><td lay-ymd="2018-3-24" class="">24</td></tr><tr><td lay-ymd="2018-3-25" class="">25</td><td lay-ymd="2018-3-26" class="">26</td><td lay-ymd="2018-3-27" class="">27</td><td lay-ymd="2018-3-28" class="">28</td><td lay-ymd="2018-3-29" class="">29</td><td lay-ymd="2018-3-30" class="">30</td><td lay-ymd="2018-3-31" class="">31</td></tr><tr><td class="my-laydate-day-next" lay-ymd="2018-4-1">1</td><td class="my-laydate-day-next" lay-ymd="2018-4-2">2</td><td class="my-laydate-day-next" lay-ymd="2018-4-3">3</td><td class="my-laydate-day-next" lay-ymd="2018-4-4">4</td><td class="my-laydate-day-next" lay-ymd="2018-4-5">5</td><td class="my-laydate-day-next" lay-ymd="2018-4-6">6</td><td class="my-laydate-day-next" lay-ymd="2018-4-7">7</td></tr></tbody></table>' +
                '<ul class="layui-my-laydate-list my-laydate-time-list">' +
                    '<li>' +
                        '<p>时</p>' +
                        '<ol>' +
                            '<li class="layui-this">00</li>' +
                '<li class="">01</li><li class="">02</li><li class="">03</li><li class="">04</li><li class="">05</li><li class="">06</li><li class="">07</li><li class="">08</li><li class="">09</li><li class="">10</li><li class="">11</li><li class="">12</li><li class="">13</li><li class="">14</li><li class="">15</li><li class="">16</li><li class="">17</li><li class="">18</li><li class="">19</li><li class="">20</li><li class="">21</li><li class="">22</li><li class="">23</li></ol></li><li><p>分</p><ol><li class="layui-this">00</li><li class="">01</li><li class="">02</li><li class="">03</li><li class="">04</li><li class="">05</li><li class="">06</li><li class="">07</li><li class="">08</li><li class="">09</li><li class="">10</li><li class="">11</li><li class="">12</li><li class="">13</li><li class="">14</li><li class="">15</li><li class="">16</li><li class="">17</li><li class="">18</li><li class="">19</li><li class="">20</li><li class="">21</li><li class="">22</li><li class="">23</li><li class="">24</li><li class="">25</li><li class="">26</li><li class="">27</li><li class="">28</li><li class="">29</li><li class="">30</li><li class="">31</li><li class="">32</li><li class="">33</li><li class="">34</li><li class="">35</li><li class="">36</li><li class="">37</li><li class="">38</li><li class="">39</li><li class="">40</li><li class="">41</li><li class="">42</li><li class="">43</li><li class="">44</li><li class="">45</li><li class="">46</li><li class="">47</li><li class="">48</li><li class="">49</li><li class="">50</li><li class="">51</li><li class="">52</li><li class="">53</li><li class="">54</li><li class="">55</li><li class="">56</li><li class="">57</li><li class="">58</li><li class="">59</li></ol></li><li><p>秒</p><ol><li class="layui-this">00</li><li class="">01</li><li class="">02</li><li class="">03</li><li class="">04</li><li class="">05</li><li class="">06</li><li class="">07</li><li class="">08</li><li class="">09</li><li class="">10</li><li class="">11</li><li class="">12</li><li class="">13</li><li class="">14</li><li class="">15</li><li class="">16</li><li class="">17</li><li class="">18</li><li class="">19</li><li class="">20</li><li class="">21</li><li class="">22</li><li class="">23</li><li class="">24</li><li class="">25</li><li class="">26</li><li class="">27</li><li class="">28</li><li class="">29</li><li class="">30</li><li class="">31</li><li class="">32</li><li class="">33</li><li class="">34</li><li class="">35</li><li class="">36</li><li class="">37</li><li class="">38</li><li class="">39</li><li class="">40</li><li class="">41</li><li class="">42</li><li class="">43</li><li class="">44</li><li class="">45</li><li class="">46</li><li class="">47</li><li class="">48</li><li class="">49</li><li class="">50</li><li class="">51</li><li class="">52</li><li class="">53</li><li class="">54</li><li class="">55</li><li class="">56</li><li class="">57</li><li class="">58</li><li class="">59</li></ol></li></ul></div></div><div class="layui-my-laydate-footer"><div class="my-laydate-footer-btns"><span lay-type="clear" class="my-laydate-btns-clear">清空</span><span lay-type="now" class="my-laydate-btns-now">现在</span><span lay-type="confirm" class="my-laydate-btns-confirm">确定</span></div></div></div>' +
            '</div>' +
            '<div class="layui-form-mid layui-word-aux">' + params.tip + '</div>' +
        '</div>';

        dom.innerHTML = templete;
        this.$(dom).find('input[lay-name="tmpInput"]').val('00:00:00');
        this.bindEvent(dom);

        return dom;
    },

    bindEvent: function (dom) {
        var that = this;
        // 选择小时
        this.$(dom).find('.my-laydate-time-list > li').eq(0).find('ol > li').on("click", function(e) {
            // 时
            that.$(this).addClass('layui-this').siblings().removeClass('layui-this');
            that.$(dom).attr({'hh': that.$(this).text()});
        });
        // 选择分钟
        this.$(dom).find('.my-laydate-time-list > li').eq(1).find('ol > li').on("click", function(e) {
            // 分
            that.$(this).addClass('layui-this').siblings().removeClass('layui-this');
            that.$(dom).attr({'mm': that.$(this).text()});
        });

        // 选择秒
        this.$(dom).find('.my-laydate-time-list > li').eq(2).find('ol > li').on("click", function(e) {
            // 秒
            that.$(this).addClass('layui-this').siblings().removeClass('layui-this');
            that.$(dom).attr({'ss': that.$(this).text()});
        });
        // 点击清除
        this.$(dom).find('.my-laydate-btns-clear').on('click', function () {
            // reset
            that.$(dom).find('.my-laydate-time-list > li').eq(0).find('ol > li').removeClass('layui-this').first().addClass('layui-this');
            that.$(dom).find('.my-laydate-time-list > li').eq(1).find('ol > li').removeClass('layui-this').first().addClass('layui-this');
            that.$(dom).find('.my-laydate-time-list > li').eq(2).find('ol > li').removeClass('layui-this').first().addClass('layui-this');
            that.$(dom).attr({'hh': '00', 'mm': '00', 'ss': '00'});
           
            that.$(dom).find('input').val('00:00:00');
            that.$(dom).find('input[lay-name="tmpInput"]').val('00:00:00');
            
        });
        // 获取先在时间
        this.$(dom).find('.my-laydate-btns-now').on('click', function () {
            // now
            var date = new Date();
            var hh = date.getHours(); //获取系统时，
            var mm = date.getMinutes(); //分
            var ss = date.getSeconds(); //秒
            that.$(dom).find('.my-laydate-time-list > li').eq(0).find('ol > li').eq(hh).addClass('layui-this').siblings().removeClass('layui-this');
            var timeH = that.$(dom).find('.my-laydate-time-list > li').eq(0).find('ol > li').eq(hh).text();
            that.$(dom).find('.my-laydate-time-list > li').eq(1).find('ol > li').eq(mm).addClass('layui-this').siblings().removeClass('layui-this');
            var timeM = that.$(dom).find('.my-laydate-time-list > li').eq(1).find('ol > li').eq(mm).text();
            that.$(dom).find('.my-laydate-time-list > li').eq(2).find('ol > li').eq(ss).addClass('layui-this').siblings().removeClass('layui-this');
            var timeS = that.$(dom).find('.my-laydate-time-list > li').eq(2).find('ol > li').eq(ss).text();

            that.$(dom).attr({'hh': timeH, 'mm': timeM, 'ss': timeS});
            that.$(dom).find('input').val(timeH + ':' + timeM + ':' + timeS);
            that.$(dom).find('input[lay-name="tmpInput"]').val(timeH + ':' + timeM + ':' + timeS);
            that.$(dom).find('.layui-my-laydate').toggle();
        });
        // 确定选择好的时间
        this.$(dom).find('.my-laydate-btns-confirm').on('click', function () {
            // confirm
            var time = '';
            time = that.$(dom).attr('hh') + ':' + that.$(dom).attr('mm') + ':' + that.$(dom).attr('ss');
            that.$(dom).find('input').val(time);
            that.$(dom).find('input[lay-name="tmpInput"]').val(time);
            that.$(dom).find('.layui-my-laydate').toggle();
        });
        // 控制选择时间的面板
        this.$(dom).find('input').on('click', function () {
            that.$(dom).find('.layui-my-laydate').toggle();
        });
    }
   
}

var SelectInput = function (params) {
    this.$ = layui.jquery;
    this.ajax = Form.layui.ajax();
    return this.init(params);
}
// 下拉框
SelectInput.prototype = {
    init: function (params) {
        // 构造渲染模板
        var dom = document.createElement('DIV');
        var str = '<dd class="" lay-type="nothing" style="color:#ddd;"><i>请您输入要查找的信息</i></dd>';
        if (!params.datasourceUrl) {
            str = 
            '<dd class="" data-value="0">分时</dd>' +
            '<dd class="" data-value="1">长租</dd>' +
            '<dd class="" data-value="2">夜租</dd>' +
            '<dd class="" data-value="3">运维</dd>';
        }
        var templete = 
        '<div class="layui-form-item">' +
            '<label class="layui-form-label">' + params.label + '</label>' +
            '<div class="layui-inline" style="float: left;">' +
                '<div class="layui-unselect layui-form-select">' +
                    '<div class="layui-select-title">' +
                        '<input type="text" name="' + params.key + '" value="" class="layui-input layui-unselect" lay-verify="required" autocomplete="off">' +
                        '<input type="hidden" name="' + 'Val' + params.key + '" value="">' +
                        '<input type="hidden" lay-type="showkey" lay-name="tmpInput" name="' + params.showkey + '">' +
                        '<i class="layui-edge"></i>' +
                    '</div>' +
                    '<dl class="layui-anim layui-anim-upbit">' + str + '</dl>' +
                '</div>' +
            '</div>' +
            '<div class="layui-form-mid layui-word-aux">' + params.tip + '</div>' +
        '</div>';
        dom.innerHTML = templete;
        dom.dataset.api = params.datasourceUrl;
        this.bindEvent(dom);
        return dom;
    },
    bindEvent: function (dom) {
        var that = this;
        // this.$(dom).find('.layui-edge').on('click', function () {
        //     that.$(dom).find('.layui-form-select').toggleClass('layui-form-selected');
        // });
        this.$(dom).find('input').focus(function () {
            if (!that.$(dom).find('.layui-form-select').hasClass('layui-form-selected')) {
                that.$(dom).find('.layui-form-select').addClass('layui-form-selected');
            }
        });

        this.$(dom).find('input').blur(function () {
            if (that.$(dom).find('.layui-form-select').hasClass('layui-form-selected')) {
                that.$(dom).find('.layui-form-select').removeClass('layui-form-selected');
            }

            that.$(dom).find('input[type="text"]').val(that.$(dom).attr('tmp-data'));
            that.$(dom).find('input[type="hidden"]').val(that.$(dom).attr('tmp-id'));
            that.$(dom).find('input[type="hidden"][lay-type="showkey"]').val(that.$(dom).attr('tmp-data'));
        });


        this.$(dom).on('mouseenter', 'dd' ,function (e) {
            if (that.$(e.target).attr('lay-type') == 'nothing') {
                return;
            }
            that.$(dom).find('input[type="text"]').val(that.$(e.target).text());
            that.$(dom).find('input[type="hidden"]').val(that.$(e.target).attr('data-value'));
            that.$(dom).find('input[type="hidden"][lay-type="showkey"]').val(that.$(e.target).text());
            that.$(dom).attr({'tmp-id':that.$(e.target).attr('data-value'), 'tmp-data': that.$(e.target).text()});
        });

        this.$(dom).find('input').on('keyup', function () {
           that.getDate(dom);
        });
    },
    getDate: function (dom) {
        // 更具api来获取下拉框中的数据
        if (this.$(dom).attr('data-api') == 'undefined') {
            return;
        }
        var url = global.host + this.$(dom).attr('data-api');
        var name = this.$(dom).find('input').val();
        var that = this;
        if (name == '') {
            this.$(dom).find('dl').html('<dd class="" lay-type="nothing" style="color:#ddd;"><i>请您输入要查找的信息</i></dd>');
            return;
        }
        this.ajax.post(url, {name: name, operatorId: global.userInfo.operatorId}, function (data) {
            if (data.length == 0) {
                that.$(dom).find('dl').html('<dd class="" lay-type="nothing" style="color:#ddd;"><i>无匹配项</i></dd>');
                return;
            }
            var tmpHtml = that.creatOptions(data);
            that.$(dom).find('dl').html(tmpHtml);
            
        }, function (err) {
            console.log(err)
        })
    },
    // 更具获取到的数据来生成html
    creatOptions: function(data) {
        var tmp = '';
        for (var i = 0; i < data.length; i ++) {
            tmp += '<dd class="" data-value="' + data[i].id + '">' + data[i].name + '</dd>';
        }
        return tmp;
    }
}
