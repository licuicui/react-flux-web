var RestService = require('Util/restService');

module.exports = {

    login: function (data, callback) {
        var service = new RestService(data.url);
        service.post(data.user, function (feedback) {
            callback(feedback);
        });
    },

    getToken: function () {
        return localStorage.token
    },

    logout: function () {
        localStorage.token = "";
    },

    loggedIn: function () {
        return !!localStorage.token
    },

    postCaptcha: function(data, callback){
        var service = new RestService(data.url);
        service.post(data.value, function (feedback) {
            callback(feedback);
        });
    }
};