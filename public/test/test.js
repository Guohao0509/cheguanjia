/**
 * @class Input
 * @param {object 构造Input类的参数} params 
 */

var Input = function (dom, params) {
    if (typeof dom == 'string') {
        this.dom = document.getElementById(dom);
    }
    this.dom = dom;
    this.init(params);
    
}

// Input类的静态属性 存放所有Input类实例的校验规则
Input.verify = {};

Input.prototype = {
    // 初始化参数和模板
    init: function (params) {
        var type = params.type ? params.type : 'text';
        var key = params.key ? params.key : '';
        var label = params.label ? params.label : '';
        var unit = params.unit ? params.unit : '';
        var tip = params.tip ? params.tip : '';
        var regex = params.regex ? params.regex : '';

        // 如果存在检验规则 则添加校验规则，为 layui 的 form.verify() 方法的参数
        if (regex != '') {
            var regexID = Math.random().toString(36).substr(2);
            Input.verify[regexID] = [regex, '请规范您的输入'];
        }

        this.templete = `
        <div class="layui-form-item">
            <label class="layui-form-label">${ label }</label>
            <div class="layui-input-inline">
                <input type="${ type }" name="${ key }" lay-verify="${ regexID }" class="layui-input">
            </div>
            <div class="layui-form-mid layui-word-aux">${ unit }&nbsp;&nbsp;&nbsp;&nbsp;${ tip }</div>
        </div>`;

        this.render(this.dom);
    },
    
    // 将字符串渲染到指定 dom 的 指定 position 上
    render: function(dom, position) {
        var pos = {
            beforeend: "beforeend",
            beforebegin: "beforebegin",
            afterbegin: "afterbegin",
            afterend: "afterend"
        }

        if (pos[position] == null) {
            position = "beforeend";
        }

        dom.insertAdjacentHTML(position, this.templete);
    }
}

/**
 * @class Select
 * @param {object 构造Input类的参数} params
 */

var Select = function (dom, params) {
    this.dom = dom;
    this.init(params);
}

Select.laydate = [];

Select.prototype = {
    init: function (params) {
        switch (params.type) {
            case 'time':
                this.timeSelect(params);
                break;
            case 'api':
                this.apiSelect(params);
                break;
            case 'base':
                this.baseSelect(params);
                break;
        }
    },

    baseSelect: function (params) {
        var label = params.label ? params.label : '';
        var key = params.key ? params.key : '';
        var tip = params.tip ? params.tip : '';
        var options = params.options ? params.options : [];
        var optionsStr = '';
        for (var i = 0; i < options.length; i ++) {
            optionsStr += `<option value="${ options[i].value }">${ options[i].name }</option>`;
        }
        this.templete = `
        <div class="layui-form-item">
            <label class="layui-form-label">${ label }</label>
            <div class="layui-input-inline">
            <select name="${ key }">
                <option selected>请选择</option>
                ${ optionsStr }
            </select>
            </div>
            <div class="layui-form-mid layui-word-aux">${ tip }</div>
        </div>
        `;

        this.render(this.dom);
        console.log(1);
    },

    timeSelect: function (params) {
        
        var label = params.label ? params.label : '';
        var key = params.key ? params.key : '';
        var tip = params.tip ? params.tip : '';
        var timeSelectID = '#' + Math.random().toString(36).substr(2);
        Select.laydate.push(timeSelectID);

        this.templete = `
        <div class="layui-form-item">
            <label class="layui-form-label">${ label }</label>
            <div class="layui-input-inline">
                <input type="text" class="layui-input" name="${ key }" id="${ timeSelectID }" placeholder="请选择时间">
            </div>
            <div class="layui-form-mid layui-word-aux">${ tip }</div>
        </div>
        `;

        this.render(this.dom);
        console.log(2);
    },

    apiSelect: function (params) {
        var label = params.label ? params.label : '';
        var key = params.key ? params.key : '';
        var tip = params.tip ? params.tip : '';
        var api = params.api ? params.api : '';

        this.templete = `
        <div class="layui-form-item">
            <label class="layui-form-label">${ label }</label>
            <div class="layui-input-inline">
                <select name="${ key }" lay-search>
                    <option selected>请选择</option>
                    <option value="">${ api }</option>
                </select>
            </div>
            <div class="layui-form-mid layui-word-aux">${ tip }</div>
        </div>
        `;

        this.render(this.dom);
        console.log(3);
    },
    

    // 将字符串渲染到指定 dom 的 指定 position 上
    render: function(dom, position) {
        var pos = {
            beforeend: "beforeend",
            beforebegin: "beforebegin",
            afterbegin: "afterbegin",
            afterend: "afterend"
        }

        if (pos[position] == null) {
            position = "beforeend";
        }

        dom.insertAdjacentHTML(position, this.templete);
    }
}