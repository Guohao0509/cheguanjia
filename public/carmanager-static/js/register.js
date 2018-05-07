layui.config({
    base : "js/"
}).use(['layer'],function(){
   layer=layui.layer;
    //初始化，隐藏所有提示信息

    $('.p-password1').hide();
    $('.p-password1').html('*请输入6-16位密码');

        //手机号正则
      var isPhone=function(phone){
            var pattern = /^1[34578]\d{9}$/;
            return pattern.test(phone);
        }


    //点击获取验证码
    $('#verification').click(function(){
        var mobile = $('.inp-name').val();
        if(mobile.trim()==''){
            layer.msg('请输入手机号');
            return;
        }else if(!isPhone(mobile.trim())){
            layer.msg('请输入正确的手机号');
            return;
        }
        var time=60;
        $.ajax({
            async : true,
            url : global.host+"api/util/sendMobileCodeForRegister.htm",
            type : "POST",
            dataType : "jsonp", // 返回的数据类型，设置为JSONP方式
            jsonp : 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
            jsonpCallback: 'handleResponse', //设置回调函数名
            data : {
                mobile:mobile.trim()
            },
            success: function(res){
                if(res.data==true){
                    var i=setInterval(function(){
                        time--;
                        if(time==0){
                            $('#verification').removeAttr('disabled');
                            $('#verification').css('opacity','1');
                            $('#verification').html('获取验证码');
                            clearInterval(i);
                        }else{
                            $('#verification').html(time+'s后重新发送');
                            $('#verification').attr('disabled','');
                            $('#verification').css('opacity','0.3');
                        }
                    },1000)
                }
            }
        });

    })

    //实时监听密码框1的 input 值
    $('.password1').bind('input propertychange',function(){
        //密码正则
        var password1 = $('.password1').val();
        function isPassword(password){
            var pattern = /^.{6,16}$/;
            return pattern.test(password);
        }
        if(isPassword($.trim(password1)) == false){
            $('.p-password1').show();
        }
        if(isPassword($.trim(password1)) == true){
            $('.p-password1').hide();
        }
    })
    //点击注册按钮
    $('.btn').click(function(){
        var mobile = $('.inp-name').val();
        var number = $('.number').val();
        var password1 = $('.password1').val();
        var password2 = $('.password2').val();
        //验证手机号
        if(mobile.trim()==''){
            layer.msg('请输入手机号');
            return false;
        }else if(!isPhone(mobile.trim())){
            layer.msg('请输入正确的手机号');
            return false;
        }

        //验证验证码
        if(number.trim()==''){
            layer.msg('请输入验证码');
            return false;
        }

        if(password1.trim()==''){
            layer.msg('请输入密码');
            return false;
        }
        if(password1.trim().length<6||password1.trim().length>16){
            layer.msg('请输入6-16位密码');
            return false;
        }
        if(password2.trim()==''){
            layer.msg('请再次输入密码');
            return false;
        }
        if(password1.trim()== password2.trim()){
            $.ajax({
                async : true,
                url : "http://192.168.5.4:8001/cheguanjia/api/user/addCDUser.htm",
                type : "POST",
                dataType : "jsonp", // 返回的数据类型，设置为JSONP方式
                jsonp : 'callback', //指定一个查询参数名称来覆盖默认的 jsonp 回调参数名 callback
                jsonpCallback: 'handleResponse', //设置回调函数名
                data : {
                    mobile:mobile.trim(),
                    checkCode:number.trim(),
                    loginPwd:hex_md5(password1.trim())
                },
                success: function(res){
                    if(res.data.result=='20203'){
                        layer.msg('验证码错误');
                    }else if(res.data.result=='20204'){
                        layer.msg('该手机号已注册');
                    }else if(res.data.result=='0'){
                        layer.msg('注册成功');
                        $('.inp-name').val('');
                        $('.number').val('');
                        $('.password1').val('');
                        $('.password2').val('');
                    }else{
                        layer.msg('注册失败');
                    }
                }
            });
            return false;
            }else{
                layer.msg('两次密码不一致');
                return false;
            }

        //判断两次密码是否一致
    });

});
