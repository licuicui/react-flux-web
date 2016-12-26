var logger = require('Util/logService');
function Feedback() {
}

/**
 * 处理服务器返回的feedback
 * @param feedback
 * @param callbackSuccess
 * @param callbackFailed1
 * @param callbackFailed2
 */
Feedback.serviceCallback = function (feedback, callbackSuccess, callbackFailed1, callbackFailed2) {
    try {
        var result = '';
        if (typeof feedback === 'string') {
            // preserve newlines, etc - use valid JSON
            feedback = feedback.replace(/\\n/g, "\\n")
                .replace(/\\'/g, "\\'")
                .replace(/\\"/g, '\\"')
                .replace(/\\&/g, "\\&")
                .replace(/\\r/g, "\\r")
                .replace(/\\t/g, "\\t")
                .replace(/\\b/g, "\\b")
                .replace(/\\f/g, "\\f");
            // remove non-printable and other non-valid JSON chars
            feedback = feedback.replace(/[\u0000-\u0019]+/g, "");
            result = Object(JSON.parse(feedback));
        } else {
            result = feedback;
        }
        if (result.status === 200) {
            callbackSuccess(result);
        } else {
            console.log(result.msg);
            callbackFailed1(result.msg);
        }
    } catch (err) {
        console.log(err);
        callbackFailed2 ? callbackFailed2(err) : callbackFailed1(err);
    }
};

/**
 *　判断后端的数据字段是否齐全
 */
Feedback.assert = function (obj, parameters, desc) {
    var flag = true;
    var pa = "";
    _.forEach(parameters, function (item) {
        if (!_.has(obj, item)) {
            pa = item;
            return flag = false;
        }
    });
    if (!flag) {
        alert('当用户' + desc + '后端返回的字段不全或者与前端使用的字段对接不上，后端返回的字段缺少' + pa);
        return false;
    } else {
        return _.pick(obj, parameters);
    }
};

Feedback.zfServiceCallback = function (error, result, response, callbackSuccess, callbackFailed1, callbackFailed2) {
    try {
        if (result.status=="200") {
            callbackSuccess(response,result);
            return;
        }
        else {
            callbackFailed1(result,error);
        }
    }
    catch (err) {
        callbackFailed2 && callbackFailed2(err);
    }
};

module.exports = Feedback;
