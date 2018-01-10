function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + " " + person.year;
}
var user = { firstName: "xiao", lastName: "ming", year: 2000 };
document.body.innerHTML = greeter(user);
