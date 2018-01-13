var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class 继承
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (speed) {
        if (speed === void 0) { speed = 0; }
        console.log(this.name + " speed " + speed);
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (speed) {
        if (speed === void 0) { speed = 5; }
        console.log("snake Fn");
        _super.prototype.move.call(this, speed);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (speed) {
        if (speed === void 0) { speed = 50; }
        console.log("horse Fn");
        _super.prototype.move.call(this, speed);
    };
    return Horse;
}(Animal));
var snake = new Snake("snake");
var horse = new Horse("snake");
snake.move();
horse.move(500);
// public 默认  公共属性
// private 私有的 在类外无法访问
// protected 受保护的 在派生类中仍可以调用
var Peoper = /** @class */ (function () {
    function Peoper(name) {
        this.name = name;
    }
    return Peoper;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getMessage = function () {
        return "name:" + this.name + ",department:" + this.department;
    };
    ;
    return Employee;
}(Peoper));
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
var passcode = "secret passcode";
var Employee2 = /** @class */ (function () {
    function Employee2() {
    }
    Object.defineProperty(Employee2.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee2;
}());
var employee = new Employee2();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
