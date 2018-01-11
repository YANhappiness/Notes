class Shape {


    area: number;
    private color: string;

    //name width height 为构造函数局部变量  
    //public public成员可以在任何地方访问，private成员只允许在类中访问
    constructor(public name: string, width: number, height: number) {
        this.area = width * height;
        this.color = "pink";
    }

    shoutout() {
        return "I'm " + this.color + " " + this.name + ",with an area of," + this.area + "cm aquared.";
    }
}

var square = new Shape("square", 30, 30);
console.log(square.shoutout());


//继承  extends
//extends 可以继承一个已存在的类并创建一个派生类，继承使用关键字extends

class Shape3D extends Shape{
    volume : number;
    constructor( public name:string,width:number,height:number,length:number){
        super(name,width,height);
        this.volume = length*this.area;
    }

    shoutout(){
        return "I'm"+this.name+",with a volume of,"+this.volume+"cm cube.";
    }

    superShout(){
        //继承基类的shouout()
        return super.shoutout();
    }
}

var cube = new Shape3D("cube",30,30,30);
console.log(cube.shoutout());
console.log(cube.superShout());

//Shape3D 继承了Shape类，也继承了Shape类的color属性

//构造函数中squer方法调用了基类Shape的构造函数Shape，传递了参数name,width,和height值。继承允许我们复用Shape类的代码，
//所以我们可以通过继承area属性来计算this.volume

// Shape3D的shoutout()方法重写基类的实现，superShout()方法通过使用super关键字直接返回了基类的shoutout()方法



