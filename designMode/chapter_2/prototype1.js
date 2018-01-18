

//对原型继承方法封装
function inherit(parent,child){
    var F = function(){};
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
}

function Person(name){
    this.name = name;
    this.info = ["brith","tel","addr"];
}

Person.prototype.getName = function(){
    console.log(this.name);
};

function Student(name,grade){
    Person.call(this);
    this.grade = grade;
}

inherit(Person,Student);

Student.prototype.getGrade = function(){
    console.log(this.grade);
};

var student1 = new Student("xiaoming",2);
var student2 = new Student("xiaohong",3);

student1.info.push("bf");

//验证原型
console.log(student1.__proto__ === Student.prototype);
console.log(student1.__proto__.__proto__ === Person.prototype);
// 验证继承关系
console.log(student1 instanceof Person);
console.log(student1 instanceof Student);

//
console.log(student1.info);
console.log(student2.info);