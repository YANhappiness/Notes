
// 单例模式

var yan = {
    getId:function(id){
        return document.getElementById(id);
    },
    setCss :function(id,key,value){
        this.getId(id)[key] = value;
    },
    setAttr:function(id,key,value){
        this.getId(id)[key] = value;
    },
    setHtml:function (id,value) {
        this.getId(id).innerHTML = value;
    },
    bindOn:function (id,type,fn) {
      this.getId(id)['on'+type] =fn;  
    }
};

// yan.setCss("id","color","red");

var Conf = (function(){
    //私有变量
    var conf = {
        MAX_NUM :100,
        MIN_NUM : 10,
        COUNT:1000,
    };

    //返回取值器对象   通过存取器对静态私有变量进行存取
    return {
        // 取值器方法
        get:function(name){
            return conf[name]?conf[name]:null;
        },

        //设置器
        set:function(name,value){
            console.log(conf);
            return conf[name]?conf[name] = value: null;
        },
    };
})();

var getconf = Conf.get('COUNT');
console.log(getconf);

var setconf = Conf.set('COUN',2000);

console.log(setconf);