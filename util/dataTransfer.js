/*****************************************************************
 * 青岛雨人软件有限公司©2015版权所有
 *
 * 本软件之所有（包括但不限于）源代码、设计图、效果图、动画、日志、
 * 脚本、数据库、文档均为青岛雨人软件或其附属子公司所有。任何组织
 * 或者个人，未经青岛雨人软件书面授权，不得复制、使用、修改、分发、
 * 公布本软件的任何部分。青岛雨人软件有限公司保留对任何违反本声明
 * 的组织和个人采取法律手段维护合法权益的权利。
 *****************************************************************/

//前后端映射的数据字典
var Dictionary = {
    //order
    "id": "id",
    "key": "key",
    "orderId": "orderId",    //订单号
    "createOn": "createOn",   //订单生成时间
    "buyer": "buyer",       //买家
    "seller": "seller",     //卖家
    "status": "status",     //状态
    "total": "total",       //商品总价
    "detailUrl": "detailUrl",
    "goods": "goods",       //商品信息
    "goodsId": "goodsId",    //商品Id
    "number": "number",     //商品数量
    "price": "price",      //商品价格
    "commonName": "commonName",   //商品名称
    "imageUrl": "imageUrl",
    "supplier": "supplier",     //供应商
    "area": "area",             //所属区域
    "offer": "offer",            //报价数量


    //manageSupplier
    "client": "client",
    "phone": "phone",
    "clientAreas": "clientAreas",
    "value": "value",
    "gspImages": "gspImages",
    "registerStatus": "registerStatus",  //审核状态
    "clientName": "clientName",  //供应商名称
    "mobile": "mobile",      //联系方式
    "clientCode": "clientCode",   //供应商编码
    "readOnly": "readOnly",
    "enabled": "enabled",
    "reson": "reson",            //原因

    //商品管理
    "productInfo": "productInfo",   //产品信息
    "productImgArr": "productImgArr",    //产品图片列表
    "inventory": "inventory",    //存量
    "reviewsCount": "reviewsCount",      //
    "tradeCount": "tradeCount",       //
    "birthPlace": "birthPlace",      //商品产地
    "licenseNo": "licenseNo",     //
    "goodsNo": "goodsNo",     //
    "amount": "amount",     //
    "supplierInfo": "supplierInfo",      //
    "title": "title",     //
    "company": "company",    //
    "star": "star",     //
    "mainProduct": "mainProduct",     //
    "currentOfferScheme": "currentOfferScheme",     //
    "timeLimit": "timeLimit",     //
    "payMode": "payMode",    //
    "remark": "remark",     //
    "category": "category",   //
    "goodsDetails":"goodsDetails",   //
    "gmpNumber":"gmpNumber",    //


    //平台客户管理
    "clientCategoryId": "clientCategoryId",     //
    "dataTransfer": "dataTransfer",      //
    "pricePlan": "pricePlan",    //
    "email": "email",     //
    "registeredCapital": "registeredCapital",     //
    "businessAddress": "businessAddress",     //
    "defaultAddress": "defaultAddress",     //
    "stampLink": "stampLink",     //
    "legalRepresentative": "legalRepresentative",     //
    "businessLicense": "businessLicense",     //
    "orgCode": "orgCode",     //
    "orgCodeValidateDate": "orgCodeValidateDate",     //
    "taxRegistrationLicenseNum": "taxRegistrationLicenseNum",     //
    "taxRegistrationLicenseNumValidateDate": "taxRegistrationLicenseNumValidateDate",     //
    "gmpOrGspLicenseNum": "gmpOrGspLicenseNum",     //
    "gmpOrGspLicenseNumValidateDate": "gmpOrGspLicenseNumValidateDate",     //
    "medicalInstitutionLicenseNum": "medicalInstitutionLicenseNum",     //
    "medicalInstitutionLicenseNumValidateDate": "medicalInstitutionLicenseNumValidateDate",     //
    "institutionLegalPersonCert": "institutionLegalPersonCert",     //
    "institutionLegalPersonCertValidateDate": "institutionLegalPersonCertValidateDate",     //
    "productionAndBusinessLicenseNum": "productionAndBusinessLicenseNum",     //
    "productionAndBusinessLicenseNumValidateDate": "productionAndBusinessLicenseNumValidateDate",     //
    "foodCirculationLicenseNum": "foodCirculationLicenseNum",     //
    "foodCirculationLicenseNumValidateDate": "foodCirculationLicenseNumValidateDate",     //
    "medicalApparatusLicenseNum": "medicalApparatusLicenseNum",     //
    "medicalApparatusLicenseNumValidateDate": "medicalApparatusLicenseNumValidateDate",     //
    "healthProductsLicenseNum": "healthProductsLicenseNum",     //
    "healthProductsLicenseNumValidateDate": "healthProductsLicenseNumValidateDate",     //
    "mentaanesthesiaLicenseNum": "mentaanesthesiaLicenseNum",     //
    "mentalanesthesiaLicenseNumValidateDate": "mentalanesthesiaLicenseNumValidateDate",     //
    "hazardousChemicalsLicenseNum": "hazardousChemicalsLicenseNum",     //
    "hazardousChemicalsLicenseNumValidateDate": "hazardousChemicalsLicenseNumValidateDate",     //
    "maternalLicenseNum": "maternalLicenseNum",     //
    "maternalLicenseNumValidateDate": "maternalLicenseNumValidateDate",     //
    "limitedBusinessRange": "limitedBusinessRange",     //
    "clientArea": "clientArea",   //

    "clientInfo": "clientInfo",     //
    "clientCredits": "clientCredits",   //
    "oldCredits": "oldCredits",     //
    "clientGspTypes": "clientGspTypes",     //
    "clientSaleScope": "clientSaleScope",   //
    "approveReason": "approveReason",     //
    "clientGsp": "clientGsp",   //
    "paymentType": "paymentType",     //
    "hospitalLevel": "hospitalLevel",   //
    "hospitalGrades": "hospitalGrades",     //
    "businessLicenseValidateDate": "businessLicenseValidateDate",   //
    "goodsQuotationInfo": "goodsQuotationInfo",     //
    "defaultQuotationInfo": "defaultQuotationInfo",   //
    "baseGoodsInfo": "baseGoodsInfo",     //
    "gspInfo": "gspInfo",   //
    "productListData": "productListData",     //

    //managerCenter
    "name": "name",
    "account": "account",
    "pwd": "pwd",
    "src": "src",

    //消息中心
    "msg": "msg",
    "info": "info",
    "url": "url",
    "flag": "flag",

    //订单统计
    "time": "time",
    "orderNum": "orderNum",     //订单数量
    "orderTotal": "orderTotal",   //订单金额
    "returnNum": "returnNum",    //退货单数量
    "returnTotal": "returnTotal",   //退货单金额
    "sum": "sum",                   //收入金额


    //OrderGoods
    "orderInfo": "orderInfo",
    "logistics": "logistics",
    "logisticsNo": "logisticsNo",
    "attachment": "attachment",

    //OrderStatus
    "orderStatus": "orderStatus",
    "orderSteps": "orderSteps",
    "step": "step",
    "orderHistory": "orderHistory",
    "operatorName": "operatorName",
    "createdOn": "createdOn"

};
var Transfer = {
    //后端数据转换成前段数据
    //dateType  S_T_D将字符串型转换成Date型    D_T_S将Date型转换成字符串型
    dataSourceToDisplay: function (Obj, dateType) {
        var dic = _.invert(Dictionary);
        return changeFields(Obj, dic, dateType);
    },
    //前端数据转换成后端数据
    dataDisplayToSource: function (Obj, dateType) {
        return changeFields(Obj, Dictionary, dateType);
    }
};

var changeFields = function (Obj, Dictionary, dateType) {
    var newObj;
    if (Obj instanceof Array) {
        newObj = _.map(Obj, function (item) {
            return changeFields(item, Dictionary, dateType);
        })
    }
    else if (typeof Obj == "object") {
        newObj = {};
        _.each(Obj, function (value, key) {
            var keyDisp = Dictionary[key];
            if (typeof keyDisp == "undefined") {
                console.log(key + '找不到该数据字典字段');
                return;
            }
            if (value instanceof Object && !(value instanceof Date)) {
                newObj[keyDisp] = changeFields(value, Dictionary, dateType);
            } else {
                var newValue = value;
                //前台只接收Date类型的时间数据
                if (dateType === "S_T_D" && /^[0-9]{4}[-/][0-9]{1,2}[-/][0-9]{1,2}/.test(value)) {
                    newValue = new Date(value);
                }
                //传回后台的时间数据进行字符串化
                if (dateType === "D_T_S" && (value instanceof Date)) {
                    newValue = value.toLocaleDateString();
                }
                //传到前台的"null"数据转换成null
                if (value === "null" || value == null) {
                    newValue = ""
                }
                newObj[keyDisp] = newValue;
            }
        })
    } else
        newObj = Obj;
    return newObj;
};
module.exports = Transfer;