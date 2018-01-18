
// 类式继承方法 创建两个类 SubClass.prototype = new SuperClass();
// 缺点：--> 子类继承中引用类型的改动会影响父类

//构造函数的继承 子类中通过call SuperClass.call(this,params); 
// 子类无法继承父类的prototype中的属性或者方法


// 组合式继承    在子类的构造函数中继承父类构造函数（call）,在子类原型中继承父类原型 SubClass.prototype = new SuperClass();
// 声明父类
function SuperClass(name){
    // 值类型的引用
    this.name = name;
    //引用类型的引用
    this.books = ["javascript","java","go"];
}

// 父类原型共有方法
SuperClass.prototype.getName= function(){
    console.log(this.name);
};

//声明子类
function SubClass(name,time){
    // 构造函数继承父类的name属性
    SuperClass.call(this,name);
    // 子类中新增属性
    this.time = time;
}

// 类式继承 子类原型继承父类
SubClass.prototype = new SuperClass();

// 子类原型方法
SubClass.prototype.getTime = function(){
    console.log(this.time);
};

//TEST
var instance = new SubClass("yan",2017);
var instance2 = new SubClass("yyy",2018);

instance.books.push("c++");
console.log(instance.books);
console.log(instance2.books);
instance.getName();
instance2.getName();
instance.getTime();
instance2.getTime();

console.log(instance instanceof SuperClass);  //true
console.log(instance instanceof SubClass);    //true

// 在构造函数继承时调用了一次父类构造函数，通过子类原型的继承时又调用了一次父类构造函数