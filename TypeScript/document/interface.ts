

//typeScript  的核心原则就是对值所具有的结构进行类型检查

function printLable(labelledObj: { label: string }) {
    console.log("1", labelledObj.label);
}

let myObj = { size: 10, label: "size 10 object" };
printLable(myObj);

// 使用接口描述

interface Label {
    label: string;
}

function printLabel(labelledObj: Label) {
    console.log("2", labelledObj.label);
}

printLabel(myObj);

//可选属性  
// 颜色和高度可选，当输入width，length时输出面积，当输入height,width,length输出面积

interface squareConfig {
    color?: string;
    width: number;
    height?: number;
    length: number;
}

function MathFn(param: squareConfig) {
    if (param.color) {
        console.log("color", param.color);
    } else {
        console.log("color error");
    }

    if (!param.height) {
        return "面积为：" + (param.width * param.length);
    } else {
        return "体积为：" + (param.width * param.length * param.height);
    }


}

var num = { color: "yellow", height: 100, length: 20, width: 30 };
var num2 = { color: "red", width: 100, length: 3 };

console.log(MathFn(num));
console.log(MathFn(num2));


// readonly 只读属性

interface Pointer{
    readonly x:number;
    readonly y:number;
}

let p1:Pointer = {x:10,y:6};

// p1.x = 5;   只读属性只能在刚创建的时候赋值，赋值后值不可以再被改变

//ReadonlyArray<T> 和 Array<T> 把所有可变方法去掉，确保方法在创建后不被修改
let a:number[] = [1,2,3,4];
let ro :ReadonlyArray<number> = a;
let newro =  ro;
// newro[0] = 12;   //拷贝后仍只可读

a = ro as number[];  //可以断言重写，复制给普通数组

console.log("newro",newro,a);


