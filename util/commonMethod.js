/*************************************************************
 * 青岛雨人软件有限公司©2016版权所有
 *
 * 本软件之所有（包括但不限于）源代码、设计图、效果图、动画、日志、
 * 脚本、数据库、文档均为青岛雨人软件或其附属子公司所有。任何组织
 * 或者个人，未经青岛雨人软件书面授权，不得复制、使用、修改、分发、
 * 公布本软件的任何部分。青岛雨人软件有限公司保留对任何违反本声明
 * 的组织和个人采取法律手段维护合法权益的权利。
 *************************************************************/

var cookieUtil = require('Util/cookieUtil');

var KeyMaker = function (myArray) {
    var newArray = _.map(myArray, function (item) {
        item.key = UidMaker();
        return item;
    });
    return newArray;
};
var UidMaker = function () {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
};
/**
 * 判断是否登录
 * @returns {boolean}
 */
var isLogin = function () {
    return !!cookieUtil.getItem('token');
};
/**
 * 动态修改iOS微信浏览器的标题
 */
var weChatTitle = function () {
    var $body = $('body');
    var $iframe = $('<iframe src="/favicon.ico"></iframe>');
    $iframe.on('load', function () {
        setTimeout(function () {
            $iframe.off('load').remove();
        }, 0);
    }).appendTo($body);
};
/**
 * 获取enterpriseId
 * @returns {*}
 */
var getEnterpriseId = function () {
    var operaterInfo = JSON.parse(cookieUtil.getItem("operaterInfo") || "{}");
    return operaterInfo && operaterInfo.customerId;
};

module.exports = {
    KeyMaker: KeyMaker,
    UidMaker: UidMaker,
    isLogin: isLogin,
    weChatTitle: weChatTitle,
    getEnterpriseId: getEnterpriseId
};