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
                case 1:
                    return "已连接";
                    break;
                case 0:
                    return "离线";
                    break;
                default :
                    return "未知状态"
            }
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
                    return "越界报警";
                    break;
                case 3:
                    return "电子围栏报警";
                    break;
                case 4:
                    return "高温报警";
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
                    return "已处理";
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
                    return "还车带支付";
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
                case 0:
                    return "熄火";
                    break;
                case 1:
                    return "已启动";
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
        }
    }
    exports('dictionary',function(){
        return dictionary;
    });
});
