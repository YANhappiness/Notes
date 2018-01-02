 "use strict";

 //图片轮播类
 var LoopImages = function (imgArr, container) {
     this.imagesArray = imgArr; //轮播图片数组
     this.container = container; //轮播图片容器
     this.createImage = function () {}; 
     this.changeImage = function () {
     }; //切换下一张图片
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
     this.arrow = arrow;
     LoopImages.call(this, imgArr, container);
 };

 FadeLoopImg.prototype = new LoopImages();
 FadeLoopImg.prototype.changeImage = function () {
     console.log("FadeLoopImg changeImg function");
 };

 //测试用例
 var fadeImg = new FadeLoopImg(['01.jpg', '02.jpg','03.jpg'], 'slide', ['left.jpg', 'right.jpg']);

 console.log(fadeImg.container);
 fadeImg.changeImage();