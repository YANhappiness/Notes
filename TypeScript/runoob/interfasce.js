function student2(person) {
    var handsome = true || person.handsome;
    return "name," + person.name + "age," + person.age + "handsome," + handsome;
}
console.log(student2({ name: "xiaoming", age: 18, handsome: false }));
console.log(student2({ name: "xiaoming", age: 18 }));
