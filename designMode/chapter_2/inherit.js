

// 类的继承  声明两个类，将第一个类的实例复制给第二个类的原型
//声明父类
function SuperClass(id){
    this.id = id;
    this.superValue = true;
}

//为父类添加共有方法
SuperClass.prototype.getSuperValue = function(){
    return this.superValue;
};

//声明子类
function SubClass(id){
    this.id = id;
    this.SubValue = false;
}

// 继承父类
SubClass.prototype = new SuperClass(2);

//为子类添加共有方法
SubClass.prototype.getSubValue = function(){
    return this.SubValue;
};


var instance = new SubClass(2);
console.log(instance.getSuperValue());
console.log(instance.getSubValue());
console.log(instance.id);

//instanceof 可以用来检测某个对象是否是某个类的实例
console.log(instance instanceof SubClass);
console.log(instance instanceof SuperClass);

console.log(SubClass instanceof SuperClass);  //false
console.log(SubClass.prototype instanceof SuperClass);  //true   
console.log(instance instanceof Object);  //true  Object是所有对象的实例   

//缺点： 类式继承，子类通过其prototype对父类实例化，继承了父类，所以说父类中的共有属性是引用类型的话，将在子类中被多有实例共有
function SuperClass1(){
    this.book= ['javascript','html','css'];
}

function SubClass1(){}

SubClass1.prototype = new SuperClass1();
var instance1 = new SubClass1();
var instance2 = new SubClass1();

console.log(instance1.book);
instance2.book.push("c++");
console.log(instance1.book);

