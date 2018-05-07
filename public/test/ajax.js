/**
 * @author zhoukuai
 * @date 2017/5/4
 * @version
 * @description
 */
layui.define(['layer'], function(exports) {
    var $ = layui.jquery;
    var layer = layui.layer;
    var ajax = {
        post:function(url,param,successCallback,errorCallback){
            var  loadIndex = layer.load(2);
            $.ajax({
                url:url,
                data:param,
                type:"POST",
                success:function(data){
                    layer.close(loadIndex);
                    if(data.code===0){
                        successCallback(data.data);
                    }
                    if(data.code!=0){
                        if(errorCallback){
                            errorCallback(data);
                        }else{
                            layer.alert(JSON.stringify(data.data));
                        }
                    }
                },
                error:function(error){
                    layer.close(loadIndex);
                    if(errorCallback){
                        errorCallback(error);
                    }else{
                        layer.alert(JSON.stringify(error));
                    }
                }
            });
        }
    }
    exports('ajax',function(){
        return ajax;
    });
});
