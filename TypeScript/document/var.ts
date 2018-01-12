
function f() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
        return a;
    }
}

f(); // returns 2

function foo() {
    // okay to capture 'a'
    return ab;
}

// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();

let ab;