//基于类的面向对象编程
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello," + person.firstName + " " + person.lastName + " " + person.year;
}
var user = { firstName: "xiao", lastName: "ming", year: 2000 };
document.body.innerHTML = greeter(user);
