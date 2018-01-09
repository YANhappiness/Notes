// 变量的多种声明方式

// 将创建的函数保存在变量中 --全局变量
var checkEmail = function () {

};

// 将同一功能方法保存在同一变量中
var createObject = {
    checkEmail: function () {

    },
    checkName: function () {

    },
    checkPassword: function () {

    },
};
//调用
createObject.checkName();


// 2.
// 复制调用方法

var CheckObject = function () {
    return {
        checkEmail: function () {

        },
        checkName: function () {

        },
        checkPassword: function () {

        },
    };
};

//每次调用时将方法返回给新对象，对象之间互不影响
var a = CheckObject();
a.checkName();

