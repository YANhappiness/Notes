"use strict";

function prototypeExted(){
    var F = function(){},   //缓存类，为实例化返回对象临时创建
    args = arguments,       //模版对象参数序列
    i = 0,
    len = args.length;

    for(; i <len;i++){
        //遍历模版对象中的属性
        for(var j in args[i]){
            //将这些属性复制到缓存类中
            F.prototype[j] = args[i][j];
        }
    }
    //返回缓存类的一个实例
    return new F();
}


//没有基类只提供一些动作的模版对象，通过对模版对象的继承来创建一个企鹅实例对象
var penguin = prototypeExted({
    speed : 20,
    swim:function(){
        console.log("游泳速度："+this.speed);
    },
    run : function(speed) {
        console.log("奔跑速度：" + speed);
    },
    jump : function(){
        console.log("跳跃");
    }
});

// 测试  

console.log(penguin.speed);
penguin.swim();
penguin.run(100);
penguin.jump();
