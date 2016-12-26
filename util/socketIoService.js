var RestService = require('Util/restService');

module.exports = function () {

	var socket = "";

	return {

		connectSocket: function (url, saveSocketKeyUrl) {
			socket = io.connect(url, {
				'reconnection': true,
				'reconnectionDelay': 1000,
				'reconnectionDelayMax': 5000,
				'reconnectionAttempts': 5
			});
			socket.on('connect', function () {
				var service = new RestService(saveSocketKeyUrl);
				service.post({socketId: socket.id}, function (feedback) {
					"use strict";
					console.log('send socket id success, socketID=' + socket.id);
				});
			});
			socket.on('connect_failed', function () {
				console.log("connect_failed");
			});
			socket.on('close', function () {
				console.log("close");
			});
			socket.on('reconnect', function (a, b) {
				console.log("reconnect", a, b);
			});
			socket.on('reconnecting', function (a, b) {
				console.log("reconnecting", a, b);
			});
			socket.on('reconnect_failed', function () {
				console.log("reconnect_failed");
			});
			socket.on('reconnect_error', function () {
				console.log("reconnect_error");
			});
			socket.on('disconnect', function () {
				console.log("disconnect");
			});
		},

		watchSocket: function (task, callback) {
			socket.on(task, function (msg) {
				callback(msg);
			});
		},

		removeSocketListener: function (task) {
			socket.removeListener(task);
		},

		disconnectSocket: function () {
			if (socket) socket.disconnect();
		}
	};
}();