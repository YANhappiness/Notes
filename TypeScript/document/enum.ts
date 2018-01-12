
// # enum 枚举类型
enum Color {Red,Green,Blue};

let a :Color = Color.Red;

console.log(a);

// 默认是从零开始 但可以手动赋值

enum Color2 {Red = 1,Green,Blue};

let b :Color2 = Color2.Green;

console.log(b);

//另外可以全部手动赋值
enum Color3 {Red = 4,Green = 7,Blue = 12};

let c :Color3 = Color3.Blue;

console.log(c);

//另外可以由枚举的值得到名字

let colorName :string = Color3[2];

console.log(colorName);