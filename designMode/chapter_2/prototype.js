
//原型继承
// https: //www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014344997013405abfb7f0e1904a04ba6898a384b1e925000

//创建 父类

function SuperClass(name){
    this.name = name;
    this.books = ["javascript","java","go"];
}

SuperClass.prototype.showBooks =function(){
    return this.books;
};

// 创建子类
function SubClass(name,grade) {
    this.grade = grade;
    SuperClass.call(this,name);
}

// 创建空函数
function F(){}

// F原型指向基类
F.prototype = SuperClass.prototype;

// 派生类原型指向F对象 F对象指向基类对象
SubClass.prototype = new F();

// console.log(SubClass.prototype.constructor);    // 派生类原型指向了SuperClass 紊乱！

// 将派生类原型的构造函数修复为派生类本身
SubClass.prototype.constructor = SubClass; 

// console.log(SubClass.prototype.constructor);   // 派生类原型指向派生类本身   正确
SubClass.prototype.showGrade = function(){
    console.log(this.grade);
};

//test

var instance = new SubClass("xiao",2);
var instance1 = new SubClass("xiao",3);

instance.books.push("c++");
instance1.books.push("c#");

console.log(instance.showBooks());
console.log(instance1.showBooks());

// 验证原型
console.log(instance.__proto__ === SubClass.prototype);
console.log(instance.__proto__.__proto__ === SuperClass.prototype);

// 验证继承关系
console.log(instance instanceof SubClass);
console.log(instance instanceof SuperClass);

