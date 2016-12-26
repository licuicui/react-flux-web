/*****************************************************************
 * 青岛雨人软件有限公司©2016版权所有
 *
 * 本软件之所有（包括但不限于）源代码、设计图、效果图、动画、日志、
 * 脚本、数据库、文档均为青岛雨人软件或其附属子公司所有。任何组织
 * 或者个人，未经青岛雨人软件书面授权，不得复制、使用、修改、分发、
 * 公布本软件的任何部分。青岛雨人软件有限公司保留对任何违反本声明
 * 的组织和个人采取法律手段维护合法权益的权利。
 *****************************************************************/
/**
 * 前端消息的实体
 * @param title  通知提醒标题，必选, 默认为 "提示"
 * @param content 通知提醒内容，必选
 * @param type   //error,info,warning,success
 * @param modelType // notification, message , 默认为 notification
 * @param duration  自动关闭的时间, 默认 4.5 秒后自动关闭, 配置为 null 则不自动关闭
 */
function msg(title, content, type, modelType, duration) {
	var _this = this;
	_this.title = title || '提示';
	_this.content = content || '';
	_this.type = type || 'info';
	_this.modelType = modelType || 'notification';
	_this.duration = duration || 4.5;
}

module.exports = msg;