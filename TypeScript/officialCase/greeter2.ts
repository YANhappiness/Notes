//ts 使用接口进行变量类型的声明

//只在两个类型内部的结构兼容那么这两个类型就是兼容的

interface Person {
    firstName: string;
    lastName: string;
    year:number;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName +" "+person.year;
}

let user = { firstName: "xiao", lastName: "ming" ,year:2000};

document.body.innerHTML = greeter(user);