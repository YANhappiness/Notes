
// 构造函数继承  

//声明父类
function SuperClass(id){
    //引用类型共有属性
    this.books = ["javascript","java","go"]; 
    //值类型共有属性
    this.id = id;
}

// 父类声明原型方法
SuperClass.prototype.showBooks = function(){
    return this.books;
};

//声明子类
function SubClass(id){
    // 继承父类
    SuperClass.call(this,id);
}

// 创建第一个子类的实例
var instance1 = new SubClass(2);
var instance2 = new SubClass(3);

instance1.books.push("c++");
console.log(instance1.books,instance1.id);
console.log(instance2.books,instance2.id);

//缺点： 构造函数继承并不涉及原型，prototype，所以父类的原型自然不会被子类集成
// 如果想要被子类继承就必须将方法或属性放在构造函数中，而这种方式创建出来的每个实例都会单独拥有一份而不能共用，违背了代码复用原则。

console.log(instance1.showBooks());  //instance1.showBooks is not a function  -->未能继承父类原型





