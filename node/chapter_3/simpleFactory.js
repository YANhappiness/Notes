"use strict";

var Basketball = function(){
    this.intro = "篮球盛行于美国";
};

Basketball.prototype = {
    getMember : function(){
        console.log("每个队伍需要5名队名");
    },
    getBallSize : function(){
        console.log("篮球size");
    }
};

var Football = function(){
    this.intro = "足球很流行";
};

Football.prototype = {
    getMember : function(){
        console.log("每个队伍需要11名队名");
    },
    getBallSize : function(){
        console.log("足球size");
    }
};

var SportsFactory = function(name){
    switch(name){
        case 'NBA': return new Basketball();
        case 'worldCup': return new Football();
    }
};

// 借助工厂模式调用
var footnall = SportsFactory("worldCup");
console.log(footnall);


