var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    //name width height 为构造函数局部变量  
    //public public成员可以在任何地方访问，private成员只允许在类中访问
    function Shape(name, width, height) {
        this.name = name;
        this.area = width * height;
        this.color = "pink";
    }
    Shape.prototype.shoutout = function () {
        return "I'm " + this.color + " " + this.name + ",with an area of," + this.area + "cm aquared.";
    };
    return Shape;
}());
var square = new Shape("square", 30, 30);
console.log(square.shoutout());
//继承  extends
//extends 可以继承一个已存在的类并创建一个派生类，继承使用关键字extends
var Shape3D = /** @class */ (function (_super) {
    __extends(Shape3D, _super);
    function Shape3D(name, width, height, length) {
        var _this = _super.call(this, name, width, height) || this;
        _this.name = name;
        _this.volume = length * _this.area;
        return _this;
    }
    Shape3D.prototype.shoutout = function () {
        return "I'm" + this.name + ",with a volume of," + this.volume + "cm cube.";
    };
    Shape3D.prototype.superShout = function () {
        //继承基类的shouout()
        return _super.prototype.shoutout.call(this);
    };
    return Shape3D;
}(Shape));
var cube = new Shape3D("cube", 30, 30, 30);
console.log(cube.shoutout());
console.log(cube.superShout());
//Shape3D 继承了Shape类，也继承了Shape类的color属性
//构造函数中squer方法调用了基类Shape的构造函数Shape，传递了参数name,width,和height值。继承允许我们复用Shape类的代码，
//所以我们可以通过继承area属性来计算this.volume
// Shape3D的shoutout()方法重写基类的实现，superShout()方法通过使用super关键字直接返回了基类的shoutout()方法
