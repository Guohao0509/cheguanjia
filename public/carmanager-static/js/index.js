/** index.js By Beginner Emain:zheng_jinfan@126.com HomePage:http://www.zhengjinfan.cn */

var tab;
var global = window.parent.global;
var menu=[];
layui.config({
    base: 'js/',
    version: new Date().getTime()
}).use(['element','layer','ajax','navbar', 'tab'], function () {
    var element = layui.element(),
        $ = layui.jquery,
        layer = layui.layer,
        ajax=layui.ajax(),
        navbar = layui.navbar();
    tab = layui.tab({
        elem: '.admin-nav-card' //设置选项卡容器
        ,
        //maxSetting: {
        //	max: 5,
        //	tipMsg: '只能开5个哇，不能再开了。真的。'
        //},
        contextMenu: true,
        onSwitch: function (data) {
            /*console.log(data.id); //当前Tab的Id
            console.log(data.index); //得到当前Tab的所在下标
            console.log(data.elem); //得到当前的Tab大容器

            console.log(tab.getCurrentTabId())*/
        }
    });


    //iframe自适应
    $(window).on('resize', function () {
        var $content = $('.admin-nav-card .layui-tab-content');
        $content.height($(this).height() - 127);
        $content.find('iframe').each(function () {
            $(this).height($content.height());
        });
    }).resize();

   /* ajax.post(global.host+"api/system/getUserMenuList.htm",{sysUserId:global.userInfo.sysUserId},function(res){
        var navs=eval(res);
        //设置navbar
        navbar.set({
            spreadOne: true,
            elem: '#admin-navbar-side',
            cached: true,
            data:navs
        });
        //渲染navbar
        navbar.render();
    })*/
    $("#info_show").on("click",function(){
    	$('#admin-navbar-side ul li:last dd:first').click();
    });
    $("#account_info").on("click",function(){
        $('#admin-navbar-side ul li:last dd:last').click();
    });
    $("#exit_login").on("click",function(){
       $.get(global.host+"api/system/loginout.htm",{},function(res){
          window.location.href="login.html";
       })
    })
    //设置navbar
    navbar.set({
        spreadOne: true,
        cached:false,
        elem: '#admin-navbar-side',
        url: global.host+"api/system/getUserMenuList.htm?sysUserId="+global.userInfo.sysUserId
    });
    //渲染navbar
    navbar.render();

    //监听点击事件
    navbar.on('click(side)', function (data) {
        tab.tabAdd(data.field);
    });

    /*if(window.sessionStorage.getItem("menu")!=null){
        var currmenu=JSON.parse(window.sessionStorage.getItem("currmenu"));
        menu=JSON.parse(window.sessionStorage.getItem("menu"));
        var currindex;
        var menutab='<li><i class="fa fa-dashboard" aria-hidden="true"></i>' +
                    '<cite>控制面板</cite></li>';
        for(var i=0;i<menu.length;i++){
           if(currmenu.title==menu[i].title){
               currindex=i;
           }else{
               console.log(menu[i].icon);
               menutab+='<li lay-id="'+new Date().getTime()+'" >' +
                        '<i class="layui-icon" data-icon="'+menu[i].icon+'"></i>' +
                        '<cite>'+menu[i].title+'</cite>' +
                        '<i class="layui-icon layui-unselect layui-tab-close" data-id="'+i+'">&#x1006;</i></li>';
           }
        }
        $('.layui-tab-title').html(menutab);
        //tab.tabAdd(currmenu);
    }*/
    //监听tab-title的点击事件
  /*  $(document).on('click','.layui-tab-title li',function(){
       var title=$(this).find('cite').html();
       for(var i=0;i<menu.length;i++){
           if(menu[i].title==title){
               window.sessionStorage.setItem("currmenu",JSON.stringify(menu[i]));
               return;
           }
       }
    })*/

    /*$('iframe').attr('src','car_manage.html');*/

    //清除缓存
    $('#clearCached').on('click', function () {
        navbar.cleanCached();
        layer.alert('清除完成!', { icon: 1, title: '系统提示' }, function () {
            location.reload();//刷新
        });
    });

    $('.admin-side-toggle').on('click', function () {
        var sideWidth = $('#admin-side').width();
        if (sideWidth === 200) {
            $('#admin-body').animate({
                left: '0'
            }); //admin-footer
            $('#admin-footer').animate({
                left: '0'
            });
            $('#admin-side').animate({
                width: '0'
            });
        } else {
            $('#admin-body').animate({
                left: '200px'
            });
            $('#admin-footer').animate({
                left: '200px'
            });
            $('#admin-side').animate({
                width: '200px'
            });
        }
    });
    $('.admin-side-full').on('click', function () {
        var docElm = document.documentElement;
        //W3C  
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        }
        //FireFox  
        else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        }
        //Chrome等  
        else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        }
        //IE11
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        layer.msg('按Esc即可退出全屏');
    });

    $('#setting').on('click', function () {
        tab.tabAdd({
            href: '/Manage/Account/Setting/',
            icon: 'fa-gear',
            title: '设置'
        });
    });

    //锁屏
    $(document).keydown(function(event){
    	if(event.keyCode == 76 && event.altKey){
           lock($, layer);
    	}
    }); 
    $('#lock').on('click', function () {
        lock($, layer);
    });

    //手机设备的简单适配
    var treeMobile = $('.site-tree-mobile'),
        shadeMobile = $('.site-mobile-shade');
    treeMobile.on('click', function () {
        $('body').addClass('site-mobile');
    });
    shadeMobile.on('click', function () {
        $('body').removeClass('site-mobile');
    });
});

var isShowLock = false;
function lock($, layer) {
    if (isShowLock)
        return;
    //自定页
    layer.open({
        title: false,
        type: 1,
        closeBtn: 0,
        anim: 6,
        content: $('#lock-temp').html(),
        shade: [0.9, '#393D49'],
        success: function (layero, lockIndex) {
            isShowLock = true;
            //给显示用户名赋值
            //layero.find('div#lockUserName').text('admin');
            //layero.find('input[name=username]').val('admin');
            layero.find('input[type=text]').on('focus', function () {
                var $this = $(this);
                if ($this.val() === '输入密码解锁..') {
                    $this.val('').attr('type', 'password');
                }
            })
                .on('blur', function () {
                    var $this = $(this);
                    if ($this.val() === '' || $this.length === 0) {
                        $this.attr('type', 'text').val('输入密码解锁..');
                    }
                });
            //在此处可以写一个请求到服务端删除相关身份认证，因为考虑到如果浏览器被强制刷新的时候，身份验证还存在的情况			
            //do something...
            //e.g. 

            $.getJSON('/Account/Logout', null, function (res) {
                if (!res.rel) {
                    layer.msg(res.msg);
                }
            }, 'json');

            //绑定解锁按钮的点击事件
            layero.find('button#unlock').on('click', function () {
                var $lockBox = $('div#lock-box');
                var operatorId=global.userInfo.operatorId;
                var pwd= $lockBox.find('input[name=lockPwd]').val();
                if (pwd === '输入密码解锁..' || pwd.length === 0) {
                    layer.msg('请输入密码..', {
                        icon: 2,
                        time: 1000
                    });
                    return;
                }
                unlock(operatorId, pwd);
            });



            /**
			 * 解锁操作方法
			 * @param {String} 用户名
			 * @param {String} 密码
			 */
            var unlock = function (un, pwd) {
                console.log(un, pwd);
                //这里可以使用ajax方法解锁
                $.post('/Account/UnLock', { operatorId: un, password: pwd }, function (res) {
                    //验证成功
                    if (res.rel) {
                        //关闭锁屏层
                        layer.close(lockIndex);
                        isShowLock = false;
                    } else {
                        layer.msg(res.msg, { icon: 2, time: 1000 });
                    }
                }, 'json');
                //isShowLock = false;
                //演示：默认输入密码都算成功
                //关闭锁屏层
                //layer.close(lockIndex);
            };
        }
    });
};

