
//外观模式
function addEvent(dom,type,fn){
    //对于支持DOM2级事件处理程序addEventListener方法的浏览器
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false);  //阻止事件冒泡

        //对于不支持addEventListener方法但支持attachEvent方法的浏览器
    }else if(dom.attachEvent){
        dom.addEvent("on"+type,fn);

        //对于不支持addEventListener和attachEvent但支持on+type的浏览器
    }else{
        dom["on"+type] = fn;
    }
}

//获取事件对象
var getEvent = function(event){
    //标准浏览器返回 event ，ie下返回 window.event
    return event||window.event;
};

// 获取元素
var getTarget = function(event){
    var event = getEvent(event);
    //标准浏览器下 event.target,IE下event.srcElement
    return event.target || event.srcElement;
};

//阻止默认行为
 var preventDefault = function(evnt){
     var event = getEvent(event);
     // 标准浏览器
     if(event.preventDefault){
         event.preventDefault();
         //IE 浏览器
     }else{
         event.returnValue = false;
     }
 };

 
 
