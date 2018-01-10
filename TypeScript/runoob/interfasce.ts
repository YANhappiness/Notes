
interface Person2{
    name : string;
    // sex: string;
    age : number;
    handsome? : boolean;   //该参数可以省略
}

function student2(person:Person2){ //类型注解 编译时进行静态检测
    // var handsome = true || person.handsome; 
    return "name,"+person.name +"age,"+person.age+"handsome,"+person.handsome; 
}

console.log(student2({name:"xiaoming",age:18,handsome:false}));
console.log(student2({name:"xiaoming",age:18}));