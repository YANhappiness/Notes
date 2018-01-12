

//any类型表示可以表示为任何类型
//void类型与any类型相反，表示没有任何类型

function wranUser() :void{
    console.log("void");
    // return "void++";   //void不可以有任何返回值
}

wranUser();


// 声明viod类型，只能赋值null、undefined
let unusable:void = undefined;