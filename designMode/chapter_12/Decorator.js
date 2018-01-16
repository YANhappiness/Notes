
//装饰者模式 ---在不改变原对象的基础上对其进行包装拓展（添加属性或者方法）使援对象可以满足用户更复杂的需求

//原有提示文案不变，新增提示文案，点击input后消失
var decorator = function(input,fn){
    // 获取事件源
    var input = document.getElementById(input);

    //如果事件源已绑定
    if(typeof(input.onclick) === 'function'){
        //缓存事件原有回调函数
        var oldClickFn = input.onclick;
        //为事件源新定义事件
        input.onclick = function() {
            //事件源原有回调
            olcClickFn();
            //执行事件源新增事件
            fn();
        };
    }else{
        //事件源未绑定事件，直接为事件源增加回调
        input.onclick = fn;
    }

    //做其他事情
};

decorator('input',function(){
    console.log("新增事件");
});