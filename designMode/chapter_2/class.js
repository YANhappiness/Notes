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
var Ball = /** @class */ (function () {
    function Ball(shape) {
        this.shape = shape;
    }
    Ball.prototype.showShape = function () {
        console.log(this.shape);
    };
    return Ball;
}());
var Basketball = /** @class */ (function (_super) {
    __extends(Basketball, _super);
    function Basketball(shape, color) {
        var _this = _super.call(this, shape) || this;
        _this.color = color;
        return _this;
    }
    Basketball.prototype.showColor = function () {
        console.log(this.color);
    };
    return Basketball;
}(Ball));
var basketball1 = new Basketball("ball1", "yellow");
var basketball2 = new Basketball("ball2", "red");
//验证继承关系
console.log(basketball1 instanceof Ball);
console.log(basketball1 instanceof Basketball);
// 验证原型链
console.log(basketball1.__proto__ === Basketball);
console.log(basketball1.__proto__.__proto__ === Ball);
basketball1.showColor();
basketball1.showShape();
