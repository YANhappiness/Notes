//私有属性和私有方法，特权方法，对象公有属性和对象共有方法，构造器

var Book = function (id, name, price) {
    //私有属性
    var num = 1;
    //私有方法
    function checkId() {

    }

    //特权方法 
    //不仅可以访问共有属性和方法（prototype）
    //还可以访问对象自身的私有属性和方法
    this.getName = function () {};
    this.getPrice = function () {};
    this.setName = function () {};
    this.setPrice = function () {};
    //对象公有属性和方法
    this.id = id;
    this.name = name;
    this.price = price;
    //对象公有方法
    this.copy = function () {};
    //构造器 调用特权方法
    this.setName = function(name){};
    this.setPrice = function(price){};
};

// 类静态共有属性 （对象不能访问）
Book.isChinese = true;
// 类静态共有方法
Book.resetTime = function(){
    console.log("new time");
};

Book.prototype = {
    //公有属性
    isJSBook:false,
    display:function(){
        console.log("show");
    }
};

//调用
var b = new Book(12,'javascript',59);
console.log(b.num);      //undefined   类的私有属性
console.log(b.isJSBook); //false
console.log(b.id);       //12
console.log(b.isChinese); //undefined  类的静态公有属性


//类的静态公有属性和方法，可以通过类本身访问 Book
console.log(Book.isChinese);
Book.resetTime();



