layui.define(['element', 'common','layer'], function (exports) {
    // 复制指令
    var $ = layui.jquery;
    var element = layui.element();
    var layer = layui.layer;
    var copyText = {
        $dom: null,
        init: function () {
            // 监听 .copyTextBtn钩子的点击事件
            $('.copyTextBtn').on('click', function (e) {
                // 获取被点击的a元素
                var $dom = $(e.target);
                // 读取其中的信息
                var value = $dom.attr('data-text');
                // 生成一个隐藏的input，将值放入其中
                $dom.append('<input type="text" value=' + value + ' style="height:0px;border: 0;">');
                var inputText = $dom.find('input')[0];
                // 获取焦点
                inputText.focus();
                // 选择input的值
                inputText.setSelectionRange(0, inputText.value.length);
                // 执行copy的命令，将内容复制到剪切板
                document.execCommand('copy', true);
                // blur input
                inputText.blur();
                // 将生成的input删除
                $dom.html('复制');
                // 调用layer提醒用户复制成功
                layer.msg('复制成功')
            });
        }
    }

    exports('copyText', function () {
        return copyText;
    });
});