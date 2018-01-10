
//工厂模式
function createBook(name,time,type){
    //创建一个对象，并对对象拓展属性和方法
    var o = new Object();
    o.name = name;
    o.time = time;
    o.type = type;
    o.getName = function(){
        console.log(this.name);
    };
    o.show =function(){

    };

    //判别差异
    if(type == "差异"){
        // 根据差异分别执行
    }

    return o;
}

var book1 = createBook("js","2012","code");
var book2 = createBook("math","2017","edu");

book1.getName();
book2.getName();