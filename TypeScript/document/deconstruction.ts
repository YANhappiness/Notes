
// 解构

// 1. 数组的解构赋值

let input = [0, 1, 2];

// let [first, second] = input;

// console.log(first);
// console.log(second);

// 2. 作用于函数参数

function f([first, second, ...rest]) {
    console.log(first);
    console.log(second);
    console.log(rest);
}
f(input);


// 3. 对象解构

let o = {
    a: "foo",
    b: 12,
    c: "car"
};

let { a, b } = o;

console.log(a);

// 对象像数组一样解构赋值，没有声明的赋值

({ x, y } = { x: "hello", y: "12" });
console.log(x);

// 4. 属性重命名
let { a: newName1, b: newName2 } = o;

console.log(newName1);

// 5. 函数声明

function fn({ a,b=3 } = { a: "", b: 0 }){
    console.log("a:%s,b:%s",a,b);
}   

fn()  // a:"" ,b:0
fn({a:"haha"})  // a:haha , b=3


// 展开   解构逆操作 展开操作创建了arr1，arr2的一份浅拷贝，基数据不会被改变

let arr1 = [1,2,3];

let arr2 = [5,6,7];

let array1 = [0,...arr1,4,...arr2];

console.log(array1);

let [a1,a2,a3] = arr1; // 解构

console.log(a3);

// 析构   在浅拷贝之后复写了name属性

let default1 = {name:"apple",price:12,color:"yellow"};

let seach = {...default1,name:"ipad"}

console.log(seach);


// 展开操作的限制  --》 仅支持展开对象自身的可枚举属性

class  C{
    id = "0001";
    show(){
        return this.show;
    }
}

let c0 = new C();

let c1 = {...c0};   //仅展开了id

console.log(c1.id);
// console.log(c1.show());   show 不存在

