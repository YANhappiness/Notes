"use strict"

//创建一位人类
var Human = function (param) {
    //技能
    this.skill = param && param.skill || "保密";
    //兴趣爱好
    this.hobby = param && param.hobby || "保密";
};

//类人原型的方法
Human.prototype = {
    getSkill: function () {
        return this.kill;
    },
    getHobby: function () {
        return this.hobby;
    }
};

//实例化姓名类
var Named = function (name) {
    var that = this;
    //构造器
    //构造函数解析姓名的姓与名
    (function (name, that) {
        that.wholeName = name;
        if (name.indexOf(' ') > -1) {
            that.FirstName = name.slice(0, name.indexOf(' '));
            that.SecondName = name.slice(name.indexOf(' '));
        }
    })(name, that);
};

//实例化职位类
var Work = function(work){
    var that = this;
    //构造器
    //构造器函数中传入的职位特征来设置相应职位以及描述
    (function(work,that){
        switch(work){
            case "code" :that.work = '工程师';that.workDescript='每天沉浸于编程';break; 
            case "UI" :
            case "UE" :
            that.work = '设计师';that.workDescript='设计更似一种艺术';break; 
            case "teach" :that.work = '教室';that.workDescript='分享是一种快乐';break; 
            default:that.work = work;
                that.workDescript = "对不起，不清楚你的职位";
        }
    })(work,that);
};
//更换期望的工作
Work.prototype.changeWork = function(work){
    this.work = work;
};

//更换工作描述
Work.prototype.changeDecsript = function(setence){
    this.workDescript = setence;
};


/*
* 在创建者类中对之前三个类进行调用，就可以创建出一个完整的应聘者对象
*应聘者创建者
*  参数  name : 姓名（英文全名）
*  参数  work : 期望工作
*/

var Person = function(name,work){
    //创建应聘者缓存对象
    var _person = new Human(); 
    //创建应聘者姓名解析对象
    _person.name = new Named(name);
    //创建应聘者期望职位
    _person.work = new Work(work);
    //讲应聘者对象返回
    return _person;
};



/* 
    测试 
*/
// 4.应聘者对象测试
var person = new Person("xiao ming","code");

console.log(person.skill);  
console.log(person.name.FirstName);  
console.log(person.work.work);  
console.log(person.work.workDescript);  
person.work.changeDecsript("use code chang world!");
console.log(person.work.workDescript);


// 3. work类测试
// var person = new Work("code");
// Person.changeWork = "play";
// console.log(person.work);

// 2. 姓名类测试
// var person = new Named("xiao ming");
// console.log(person.FirstName);

// 1.  Human类测试
// var person = new Human({
//     kill: "code",
//     hobby: "game"
// });

// console.log(person.kill);