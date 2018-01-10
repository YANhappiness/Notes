"use strict";

//抽象工厂方法
var VehicleFactory = function (subType,superType) {
    // 判断抽象工厂中是否有该抽象类
    if(typeof VehicleFactory[superType] === 'function'){
        //缓存类
        var F = function(){};
        //继承父类的属性和方法
        F.prototype = new VehicleFactory[superType]();
        //将子类的constructor指向之类
        subType.constructor = subType;
        //子类原型继承父类
        subType.prototype = new F();
    }else{
        //不存在改抽样类抛出错误
        throw new Error("未能创建改抽样类");
    }
};

// 小汽车抽象类
VehicleFactory.Car = function(){
    this.type = 'car'; 
};

VehicleFactory.Car.prototype = {
    getPrice : function(){
        return new Error("抽象方法不可调用");
    },
    getSpeed : function(){
        return new Error("抽象方法不能调用");
    }
};

//抽象与实现
// 宝马汽车子类
var BMW = function(price,speed){
    this.price = price;
    this.speed = speed;
};

//抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW,'Car');
BMW.prototype.getPrice = function(){
    return this.price;
};

var bmw = new BMW(1000000,1000);

console.log(bmw.getPrice());
console.log(bmw.type);