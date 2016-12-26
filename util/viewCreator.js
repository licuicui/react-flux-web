/*****************************************************************
 * 青岛雨人软件有限公司©2015版权所有
 *
 * 本软件之所有（包括但不限于）源代码、设计图、效果图、动画、日志、
 * 脚本、数据库、文档均为青岛雨人软件或其附属子公司所有。任何组织
 * 或者个人，未经青岛雨人软件书面授权，不得复制、使用、修改、分发、
 * 公布本软件的任何部分。青岛雨人软件有限公司保留对任何违反本声明
 * 的组织和个人采取法律手段维护合法权益的权利。
 *****************************************************************/

var fs = require('fs');
var path = require('path');

//store英文名称
var storeName = "test";
//store中文名称
var storeCNName = "测试";
//是否拓展store
var whetherExtendStore = true;
//拓展store的父级路径
var extendStoreAddress = "../store";
//store列表地址
var storeListUrl = "../store/basic/allStoreList.js";

//读取store列表数据 data start
var data = fs.readFileSync(storeListUrl, 'UTF-8');
var firstPart = data.split("//-------newStore start")[0];
var secondPart = data.split("//-------newStore start")[1];
var thirdPart = secondPart.split("//-------newStore end")[1];
secondPart = secondPart.split("//-------newStore end")[0];
var forthPart = thirdPart.split("//-------storeList end")[1];
thirdPart = thirdPart.split("//-------storeList end")[0];
//读取store列表数据 end


//生成新的store列表数据 newData start
var newData = firstPart;
if (whetherExtendStore) {
	newData += "//" + storeName + "Store参数\n";
	newData += "var " + storeName + "StoreParams = require('" + extendStoreAddress.split('../')[1] + "/" + storeName + "Store');\n";
}
newData += "//-------newStore start\n";
newData += secondPart;
newData += ("//" + storeCNName + "\n");
if (whetherExtendStore) {
	newData += "var " + storeName + "Store=UniversalStoreHelper('" + storeCNName + "数据', '" + storeName + "',"
		+ storeName + "StoreParams.specialData, " + storeName + "StoreParams.specialFunc, " + storeName + "StoreParams.specialCase);";
} else {
	newData += "var " + storeName + "Store=UniversalStoreHelper('" + storeCNName + "数据', '" + storeName + "');";
}
newData += "\n//-------newStore end";
newData += thirdPart;
newData += newData[newData.length - 2] == ',' ? '' : ',';
newData += '\n"' + storeName + 'Store": ' + storeName + 'Store';
newData += "\n//-------storeList end";
newData += forthPart;
console.log("生成新的store列表数据");
//生成新的store列表数据 end


//store列表写入新的数据 start
fs.unlink(storeListUrl, function (e) {
	if (e) {
		console.log('删除store列表失败');

	} else {
		console.log("删除store列表成功");
		fs.open(storeListUrl, "a", function (e, fd) {
			if (e) throw e;
			fs.write(fd, newData, 0, 'utf8', function (e) {
				if (e) throw e;
				fs.closeSync(fd);
				console.log("写入新的store列表成功");
			})
		});
	}
});
//store列表写入新的数据 end


//store拓展 start
if (whetherExtendStore) {
	var storeExtend =
		"/*****************************************************************\n"
		+ "* 青岛雨人软件有限公司©2016版权所有\n"
		+ "*\n"
		+ "* 本软件之所有（包括但不限于）源代码、设计图、效果图、动画、日志、\n"
		+ "* 脚本、数据库、文档均为青岛雨人软件或其附属子公司所有。任何组织\n"
		+ "* 或者个人，未经青岛雨人软件书面授权，不得复制、使用、修改、分发、\n"
		+ "* 公布本软件的任何部分。青岛雨人软件有限公司保留对任何违反本声明\n"
		+ "* 的组织和个人采取法律手段维护合法权益的权利。\n"
		+ "*****************************************************************/\n"
		+ "/**\n"
		+ "* " + storeCNName + "数据Store\n"
		+ "*/\n"

		+ " var actionConstants = require('actionConstants');\n"

		+ " module.exports = {\n"
		+ "     specialData: {\n"
		+ "     },\n"
		+ "     specialFunc: function (data) {\n"
		+ "         return {\n"
		+ "         }\n"
		+ "     },\n"
		+ "     specialCase: function (storeData, store) {\n"
		+ "         return function (action) {\n"
		+ "             var data = action.data;\n"
		+ "             switch (action.type) {\n"
		+ "                 default:\n"
		+ "                 return true;\n"
		+ "             }"
		+ "             store.emitChange();\n"
		+ "             return true;\n"
		+ "        }\n"
		+ "     }\n"
		+ " };\n";
	console.log(storeExtend);
	mkdirSync(extendStoreAddress, 0, function (e) {
		if (e) {
			console.log('store路径已存在');
		} else {
			console.log("创建成功")
		}
	});

	fs.open(extendStoreAddress + "/" + storeName + ".js", "a", function (e, fd) {
		if (e) throw e;
		fs.write(fd, storeExtend, 0, 'utf8', function (e) {
			if (e) throw e;
			fs.closeSync(fd);
		})
	});
}
//store拓展 end

//生成action start


function mkdirSync(dirpath, mode, callback) {
	fs.exists(dirpath, function (exists) {
		console.log(exists);

		if (exists) {
			callback(dirpath);
		} else {
			//尝试创建父目录，然后再创建当前目录
			mkdirs(path.dirname(dirpath), mode, function () {
				fs.mkdir(dirpath, mode, callback);
			});
		}
	});
}
