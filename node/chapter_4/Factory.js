"use strict";

//安全模式创建的工厂类
var Factory = function (type, content) {
    if (this instanceof Factory) {
        var s = new this[type](content);
        return s;
    } else {
        return new Factory(type, content);
    }
};

//工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
    Java: function (content) {
        // ...
    },
    JavaScript: function (content) {
        // ...
    },
    UI: function (content) {
        this.content = content;
        (function () {
            var div = document.getElementById("div");
            div.innerHTML = content;
            div.style.border = '1px solid red';
            document.getElementById('container').appendChild(div);
        })(content);
    },
    php: function (container) {
        // ...
    }
};


var data = [{
        type: 'JavaScript',
        content: 'JavaScript'
    },
    {
        type: 'Java',
        content: 'Java'
    },
    {
        type: 'php',
        content: 'php'
    },
    {
        type: 'ui',
        content: 'ui'
    },
];



for (var i = 3; i >= 0; i--) {
    Factory(data[i].type, data[i].content);
}