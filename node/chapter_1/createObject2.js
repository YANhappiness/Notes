
//虽然通过创建对象可以完成我们的需求，但并不是真正意义上类的创建方式，创建的对象a和CheckObject没有任何关系（返回出来的对象本身和CheckObject对象无关）

// 类的创建方式
var CheckObject = function(){
    this.checkName = function(){

    };
    this.checkEmail = function(){

    };
    this.checkPassword = function(){

    };
};

var a = new CheckObject();
a.checkName();

//原型方式 创建出的对象共用一个方法
var CheckObject2 = function(){};

CheckObject2.prototype = {
    checkName:function(){

        return this;
    },
    checkEmail:function(){

        return this;
    },
    checkPassword:function(){

        return this;
    }
};

var b = new CheckObject();
b.checkName().checkEmail().checkPassword();