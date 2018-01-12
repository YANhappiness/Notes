// # enum 枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var a = Color.Red;
console.log(a);
// 默认是从零开始 但可以手动赋值
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var b = Color2.Green;
console.log(b);
//另外可以全部手动赋值
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 4] = "Red";
    Color3[Color3["Green"] = 7] = "Green";
    Color3[Color3["Blue"] = 12] = "Blue";
})(Color3 || (Color3 = {}));
;
var c = Color3.Blue;
console.log(c);
//另外可以由枚举的值得到名字
var colorName = Color3[7];
console.log(colorName);
