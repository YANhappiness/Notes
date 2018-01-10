 "use strict";

 //图片轮播类
 var LoopImages = function (imgArr, container) {
     this.imagesArray = imgArr; //轮播图片数组
     this.container = container; //轮播图片容器
 };

 LoopImages.prototype = {
    //创建轮播图片
    createImage : function(){
        console.log("LoopImages createImage function");
    },

    changeImage : function(){
        console.log("LoopImages chageImage function");
    },
 };

 // 上下滑动切换类
 var SlideLoopImg = function (imgArr, container) {
     //构造函数继承图片轮播基类
     LoopImages.call(this, imgArr, container);
 };

 //  call 继承基类 SlideLoopImg 
 SlideLoopImg.prototype = new LoopImages();
 SlideLoopImg.prototype.changeImage = function () {
     console.log("SlideloopImg changeImg function");
 };

 // 渐隐切换类
 var FadeLoopImg = function (imgArr, container, arrow) {
     LoopImages.call(this, imgArr, container);
     //切换箭头私有变量
     this.arrow = arrow;
 };

 FadeLoopImg.prototype = new LoopImages();
 FadeLoopImg.prototype.changeImage = function () {
     console.log("FadeLoopImg changeImg function");
 };

 //测试用例
 var fadeImg = new FadeLoopImg(['01.jpg', '02.jpg','03.jpg'], 'slide', ['left.jpg', 'right.jpg']);

//  console.log(fadeImg.container);
//  fadeImg.changeImage();


 //原型拓展  
 //原型对象是一个共享对象，那么不论是父类的实例对象或者是子类的继承，都是对她的一个指向引用，所以圆形对象才会被共享。既然被共享那么对原型对象的拓展，不论是子类还是父类的实例对象都会继承下来。
 LoopImages.prototype.getImageLength = function(){
    return this.imagesArray.length;
 };

 FadeLoopImg.prototype.getContainer = function(){
     return this.container;
 };

 console.log(fadeImg.getImageLength());
 console.log(fadeImg.getContainer());

 //原型对象的拓展是对地址的引用，无论父类的拓展还是子类的拓展都会被保留。
 console.log(LoopImages);
