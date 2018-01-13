
//class 继承
class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(speed: number = 0) {
        console.log(`${this.name} speed ${speed}`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(speed: number = 5) {
        console.log("snake Fn");
        super.move(speed);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(speed: number = 50) {
        console.log("horse Fn");
        super.move(speed);
    }
}

var snake = new Snake("snake");
var horse = new Horse("snake");

snake.move()
horse.move(500);


// public 默认  公共属性
// private 私有的 在类外无法访问
// protected 受保护的 在派生类中仍可以调用

class Peoper {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Peoper {
    private department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getMessage() {
        return `name:${this.name},department:${this.department}`
    };
}

var tom = new Employee("tom", "Sales");
console.log(tom.getMessage());
// console.log(tom.name);  //name 是受保护的，只能在peoper及其子类中访问 实例化对象不能访问

// 存取器  getter，setter

// let password = "secret password";

// class Employee1 {
//     private _fullName: string;

//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (password && password == "secret password") {
//             this._fullName = newName;
//         } else {
//             console.log("dont read private value");
//         }
//     }
// }

// let user1 = new Employee1();
// user1.fullName = "tom";
// if (user1.fullName) {
//     alert(user1.fullName);
// }
// console.log(user1.fullName);
