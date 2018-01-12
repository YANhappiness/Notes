

//typeScript  的核心原则就是对值所具有的结构进行类型检查

function printLable(labelledObj: { label: string }) {
    console.log("1",labelledObj.label);
}

let myObj = { size: 10, label: "size 10 object" };
printLable(myObj);

// 使用接口描述

interface Label{
    label:string;
}

function printLabel(labelledObj:Label){
    console.log("2",labelledObj.label);
}

printLabel(myObj);

//可选属性