var Form = function (params) {
    Form.layui = layui;
    this.str = '';
    return this.init(params);
}

Form.prototype = {
    init: function (params) {
        var dom = null;

        params.type = params.type ? params.type : 'text';
        params.key = params.key ? params.key : '';
        params.label = params.label ? params.label : '';
        params.unit = params.unit ? params.unit : '';
        params.tip = params.tip ? params.tip : '';
        params.regex = params.regex ? params.regex : '';
        params.api = params.api ? params.api : '';

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

var TextInput = function (params) {
    
    return this.init(params);
}

TextInput.prototype = {
    init: function (params) {
        var dom = document.createElement('DIV');
        
        if (params.regex != '') {
            var regexID = 'ID' + Math.random().toString(36).substr(2);
            var tmp = {};
            tmp[regexID] = [params.regex, '请规范您的输入'];
        }
        
        var templete = `
        <div class="layui-form-item">
            <label class="layui-form-label">${ params.label }</label>
            <div class="layui-input-inline">
                <input type="${ params.type }" name="${ params.key }" lay-verify="${ regexID }" class="layui-input">
            </div>
            <div class="layui-form-mid layui-word-aux">${ params.unit }&nbsp;&nbsp;&nbsp;&nbsp;${ params.tip }</div>
        </div>`;

        dom.innerHTML = templete;

        this.bindVerify(tmp);

        return dom;
    },

    bindVerify(obj) {
        var form = Form.layui.form;
        form.verify(obj);
    }
}

var TimeInput = function (params) {

    return this.init(params);
}

TimeInput.prototype = {
    init: function (params) {
        var dom = document.createElement('DIV');
        
        var timeSelectID = 'ID' + Math.random().toString(36).substr(2);

        var templete = `
        <div class="layui-form-item">
            <label class="layui-form-label">${ params.label }</label>
            <div class="layui-input-inline">
                <input type="text" class="layui-input" name="${ params.key }" id="${ timeSelectID }" placeholder="请选择时间">
            </div>
            <div class="layui-form-mid layui-word-aux">${ params.tip }</div>
        </div>`;


        dom.innerHTML = templete;

        this.bindRender(timeSelectID);

        return dom;
    },

    bindRender: function (elemID) {
        var laydate = Form.layui.laydate;
        laydate.render({
            elem: '#' + elemID,
            type: 'time'
        })
    }
}

var SelectInput = function (params) {
    
    return this.init(params);
}

SelectInput.prototype = {
    init: function (params) {
        this.ajax = Form.layui.ajax();

        var dom = document.createElement('DIV');

        var templete = `
        <div class="layui-form-item">
            <label class="layui-form-label">${ params.label }</label>
            <div class="layui-input-inline">
                <select name="${ params.key }" lay-search="" id="sel">
                    <option selected>请选择</option>
                </select>
            </div>
            <div class="layui-form-mid layui-word-aux">${ params.tip }</div>
        </div>`;

        dom.innerHTML = templete;
        dom.dataset.api = params.api;
        this.getData(function (data) {
            sel.innerHTML = `<option>${data[0].name}</option><option>${data[1].name}</option>`;
            console.log(1)
            var form = layui.form;
            form.render();
        });        
        return dom;
    },
    
    getData: function (callback) {
        console.log(this.ajax);
        // this.ajax.post('/',{},function(res){
        //     var data = "<option></option>"
        //     callback(data);
        // })
        var data = [{name: '北京', value: '1'}, {name: '天津', value: '2'}]
        setTimeout(function () {
            callback(data);
        }, 1000)
    }
}
