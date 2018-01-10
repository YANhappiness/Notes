var Demo = function () {};

Demo.prototype = {
    show: function () {
        console.log("成功获取");
    }
};

var d = new Demo();

d.show(); //成功获取

var t = Demo();

// t.show();   //TypeError:Cannot read property 'show' of undefined


// 安全模式类是可以屏蔽对类的错误使用

var Demo_test = function () {
    if (!(this instanceof Demo_test)) {
        return new Demo();
    }
};

var demoTest = Demo_test();

demoTest.show();

// instanceof : 
// instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。

// 定义构造函数
function C() {}

function D() {}

var o = new C();
console.log(Object.getPrototypeOf(o) == C.prototype);
console.log(o instanceof C); // true，因为 Object.getPrototypeOf(o) === C.prototype

console.log(o instanceof D); // false，因为 D.prototype不在o的原型链上