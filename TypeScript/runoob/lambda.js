// 省略返回 自动将函数中的this添加到上下文中
var testDemo = {
    message: "greeter",
    show: function () {
        var _this = this;
        console.log("out", this.message);
        setTimeout(function () {
            console.log("timeout", _this.message);
        }, 300);
    }
};
testDemo.show();
