//typeScript  的核心原则就是对值所具有的结构进行类型检查
function printLable(labelledObj) {
    console.log("1", labelledObj.label);
}
var myObj = { size: 10, label: "size 10 object" };
printLable(myObj);
function printLabel(labelledObj) {
    console.log("2", labelledObj.label);
}
printLabel(myObj);
