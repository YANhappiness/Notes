function greeter(person: string) {
    return "Hello, " + person;
}

let user = "xiao ming";
//let user = [0, 1, 2];   // greeter.ts(7,35): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

document.body.innerHTML = greeter(user);