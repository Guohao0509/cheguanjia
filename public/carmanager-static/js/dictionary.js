/**
 * @author zhoukuai
 * @date 2017/5/4
 * @version
 * @description
 */
layui.define([], function(exports) {
    var dictionary = {
        CAR_STATUS:function(value){
            value = parseInt(value);
            switch (value){
                case 0:return "可租用"; break;
                case 1:return "已预订"; break;
                case 2:return "租用中"; break;
                case 3:return "暂停租用"; break;
                default :return "未知状态"
            }
        },
        OBD_IMEI_STATUS:function(value) {
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "未绑定";
                    break;
                case 1:
                    return "已绑定";
                    break;
                case 2:
                    return "故障";
                    break;
                default :
                    return "未知状态"
            }
        },
        OBD_CONN_STATUS:function(value) {
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "正常";
                    break;
                case 1:
                    return "损坏维修中";
                    break;
                case 2:
                    return "暂停运营";
                    break;
                case 3:
                    return "停止运营";
                    break;
                case 4:
                    return "其他";
                    break;
                case 5:
                    return "车机离线";
                    break;
                default :
                    return "未知状态"
            }
        },
        STATION_DUTY_TYPE:function (value) {
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "有人值守";
                    break;
                case 1:
                    return "无人值守";
                    break;
                default :
                    return "未知类型"
            }
        },
        STATION_HOLIDAY:function (value) {
            value = parseInt(value);
            switch (value) {
                case 1:
                    return "正常节假日";
                    break;
                case 2:
                    return "站点轮休";
                    break;
                default :
                    return "未知"
            }
        },
        STATION_STATUS:function(value){
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "建设中";
                    break;
                case 1:
                    return "使用";
                    break;
                case 2:
                    return "停用";
                    break;
                default :
                    return "未知状态"
            }
        },
        REFUND_APPLY_status:function(value){
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "未受理";
                    break;
                case 1:
                    return "已受理";
                    break;
                case 2:
                    return "用户取消";
                    break;
                case 3:
                    return "已结算";
                    break;
                case 4:
                    return "系统取消";
                    break;
                default :
                    return "未知状态"
            }
        },
        CASH_ORDER_STATUS:function (value) {
            value = parseInt(value);
            switch (value) {
                case 1:
                    return "转账成功";
                    break;
                case 2:
                    return "转账失败";
                    break;
                default :
                    return "未知状态"
            }
        },
        CASH_APPLY_STATUS:function (value) {
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "待受理";
                    break;
                case 1:
                    return "受理中";
                    break;
                case 2:
                    return "转账成功";
                    break;
                case 3:
                    return "转账失败";
                    break;
                case 4:
                    return "已取消";
                    break;
                case 5:
                    return "已拒绝";
                    break;
                default :
                    return "未知状态"
            }
        },
        ACCOUNT_STATUS:function (value) {
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "正常";
                    break;
                case 1:
                    return "业务锁定中";
                    break;
                case 2:
                    return "锁定";
                    break;
                default :
                    return "未知"
            }
        },
        PWD_SHOW:function (value) {
          return value.substr(0,6);
        },
        ALARM_TYPE:function(value) {
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "续航报警";
                    break;
                case 1:
                    return "越界报警";
                    break;
                case 2:
                    return "超速报警";
                    break;
                case 3:
                    return "电子围栏报警";
                    break;
                case 4:
                    return "高温报警";
                case 5:
                    return "车机离线报警";
                case 6:
                    return "蓄电池低电量报警";
                default :
                    return "未知类型"
            }
        },
        ALARM_STATUS:function(value) {
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "待激活";
                    break;
                case 1:
                    return "待处理";
                    break;
                case 2:
                    return "处理中";
                    break;
                case 3:
                    return "处理完成";
                    break;
                case 4:
                    return "已关闭";
                    break;
                default :
                    return "未知状态"
            }
        },
        PECCANCY_STATUS:function(value) {
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "未处理";
                    break;
                case 1:
                    return "已受理";
                    break;
                case 2:
                    return "等待结果";
                    break;
                case 3:
                    return "处理完成";
                    break;
                default :
                    return "未知状态"
            }
        },
        FENCE_STATUS:function(value){
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "关闭";
                    break;
                case 1:
                    return "开启";
                    break;
                default :
                    return "未知状态"
            }
        },
        RENT_TYPE:function(value){
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "分时";
                    break;
                case 1:
                    return "日租";
                    break;
                case 2:
                    return "夜租";
                    break;
                case 3:
                    return "长租";
                    break;
                default :
                    return "未知状态"
            }
        },
        PICK_CAR_TYPE:function(value){
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "自取";
                    break;
                case 1:
                    return "送车上门";
                    break;
                case 2:
                    return "其他";
                    break;
                default :
                    return "未知状态"
            }
        },
        CLOSE_TYPE:function(value){
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "用户已取";
                    break;
                case 1:
                    return "超出预订时间";
                    break;
                case 2:
                    return "用户取消";
                    break;
                case 3:
                    return "店主取消";
                    break;
                case 4:
                    return "系统故障";
                    break;
                case 5:
                    return "未关闭";
                    break;
                default :
                    return "未知状态"
            }
        },
        RES_ORD_STATUS:function(value){
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "未确认";
                    break;
                case 1:
                    return "预订中";
                    break;
                case 2:
                    return "已取车";
                    break;
                case 3:
                    return "取消预订";
                    break;
                case 4:
                    return "未关闭";
                    break;
                default :
                    return "未知状态"
            }
        },
        ORDER_STATUS:function(value){
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "预订";
                    break;
                case 1:
                    return "租用中";
                    break;
                case 2:
                    return "还车待支付";
                    break;
                case 3:
                    return "故障未完结";
                    break;
                case 4:
                    return "事故未完结";
                    break;
                case 5:
                    return "正常完结";
                    break;
                case 6:
                    return "订单取消";
                    break;
                default :
                    return "未知状态"
            }
        },
        WORK_STATUS:function(value){
            value = parseInt(value);
            switch (value) {
                case 1:
                    return "已启动";
                    break;
                case 2:
                    return '熄火';
                    break;
                case 3:
                    return "其他";
                    break;
                case 4:
                    return '<input type="button" value="蓄电池电量不足" class="layui-btn  layui-btn-danger layui-btn-mini" />';
                    break;
                case 3:
                    return "设备供电断开(可能被破坏)";
                    break;
                default :
                    return "未知状态"
            }
        },
        CHARGE_STATUS:function(value){
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "未充电";
                    break;
                case 1:
                    return "充电中";
                    break;
                default :
                    return "未知状态"
            }
        },
        APPLY_TYPE:function(value){
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "车辆管理";
                    break;
                case 1:
                    return "位置服务";
                    break;
                case 2:
                    return "车辆运营";
                    break;
                default :
                    return "未知"
            }
        },
        OPERATOR_TYPE:function(value){
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "企业";
                    break;
                case 1:
                    return "个人";
                    break;
                default :
                    return "未知"
            }
        },
        RESOLVE_METHOD:function(value){
        	value = parseInt(value);
            switch (value) {
                case 0:
                    return "本人处理";
                    break;
                case 1:
                    return "代为处理";
                    break;
                default :
                    return "未知"
            }
        },
        CAR_GROUP_LEVEL:function(value){
        	value = parseInt(value);
            switch (value) {
                case 0:
                    return "非默认";
                    break;
                case 1:
                    return "默认";
                    break;
                default :
                    return "未知"
            }
        },
        IMAGE_FOR_CAR:function(value){
            switch (value) {
                case "":
                    return "images/nop.png";
                    break;
                case null:
                    return "images/nop.png";
                    break;
                case "null":
                    return "images/nop.png";
                    break;
                case "IEV5.png":
                    return "images/IEV5.png";
                    break;    
                default :
                    return value
            }
        },
        IMAGE_FOR_USER:function(value){
            switch (value) {
                case "":
                    return "images/nop.png";
                    break;
                case null:
                    return "images/nop.png";
                    break;
                case "null":
                    return "images/nop.png";
                    break;
                default :
                    return "http://s.happyev.com/microcabs/licencephoto/"+value
            }
        },
        IMAGE_FOR_IDENTITY:function(value){
            switch (value) {
                case "":
                    return "images/nop.png";
                    break;
                case null:
                    return "images/nop.png";
                    break;
                case "null":
                    return "images/nop.png";
                    break;
                default :
                    return "http://120.55.242.47/microcabs/identityphoto/"+value
            }
        },
        AREA_TYPE:function (value) {
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "分时租赁";
                    break;
                default :
                    return "未知"
            }
        },
        AREA_STATUS:function (value) {
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "停用";
                    break;
                case 1:
                    return "激活";
                    break;
                default :
                    return "未知"
            }
        },
        TRADE_TYPE:function (value) {
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "订单支付";
                    break;
                case 1:
                    return "提现";
                    break;
                default :
                    return "未知"
            }
        },
        TRADE_METHOD:function (value) {
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "平台结算";
                    break;
                default :
                    return "未知"
            }
        },
        VERIFYSTATUS:function (value) {
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "未提交资料";
                    break;
                case 1:
                    return "待审核";
                    break;
                case 2:
                    return "审核未通过";
                    break;
                case 3:
                    return "审核通过";
                    break;
                default :
                    return "未知"
            }
        },
        OPERATOR_STATUS:function(value){
            value = parseInt(value);
            switch (value) {
                case 0:
                    return "未激活";
                    break;
                case 1:
                    return "已激活";
                    break;
                case 2:
                    return "停用";
                    break;
                default :
                    return "未知"
            }
        }
    }
    exports('dictionary',function(){
        return dictionary;
    });


});
