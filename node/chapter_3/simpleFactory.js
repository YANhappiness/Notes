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

