
//洁净的构造方式 -- 原型式继承

// 原型式继承
function inheritObject(o) {
    // 声明一个过渡函数
    function F(){}

    // 过度对象的原型继承父对象
    F.prototype= o;
    
    // 返回过渡对象的一个实例，该实例的原型继承了父对象

    return new F();
}