var Father = function(){
    this.arr = [3,3,3,3];

    console.log(this.arr);
};

Father.prototype.changeArr = function(arr){
    this.arr = arr;
};

var arr = [3,4,4,3];
var Child = new Father();
Child.changeArr(arr);