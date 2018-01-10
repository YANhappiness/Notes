//基于类的面向对象编程

class Student {
    fullName : string;
    constructor(public firstName ,public middleInitial,public lastName ) {
        this.fullName = firstName + " " +middleInitial + " "+lastName;
    }
}

interface Person{
    firstName : string;
    lastName : string;
    year: number;
}

function greeter(person:Person){
    return "hello," + person.firstName + " "+ person.lastName + " "+person.year;
}

const user = {firstName : "xiao" ,lastName:"ming",year:2000};

document.body.innerHTML= greeter(user);