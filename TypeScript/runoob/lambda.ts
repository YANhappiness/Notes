
// 省略返回 自动将函数中的this添加到上下文中

var testDemo = {
    message : "greeter",
    show:function(){
        console.log("out",this.message);

        setTimeout(() => {
            console.log("timeout",this.message)
        }, 300);
    }
}

testDemo.show();