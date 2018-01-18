

class Ball{
    constructor(shape){
        this.shape = shape;
    }

    showShape(){
        console.log(this.shape);
    }
}

class Basketball extends Ball{
    constructor(shape,color){
        super(shape);
        this.color = color;
    }

    showColor(){
        console.log(this.color);
    }
}

var basketball1 = new Basketball("ball1","yellow");
var basketball2 = new Basketball("ball2","red");

//验证继承关系
console.log(basketball1 instanceof Ball);
console.log(basketball1 instanceof Basketball);

// 验证原型链
console.log(basketball1.__proto__ === Basketball);
console.log(basketball1.__proto__.__proto__ === Ball);

basketball1.showColor();
basketball1.showShape();