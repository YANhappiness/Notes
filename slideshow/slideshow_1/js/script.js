jQuery(document).ready(function($) {
	// alert("message")
	
	var num = 1; 
	var count = $('.banner_box .imgs img').length;  //图片的数量
	var width = $('.banner_box .imgs img').width();	//图片的宽度
	var timer = null;//计时器
	points(0);  // 调用改变圆点方法 默认状态为零
	timer = setInterval(startMove, 2000);	

	//点击右按钮  
	$('.right_btn').click(function(){
		if(!$('.banner_box .imgs').is(":animated")){
			if(num == count){
				// 当点击第四张时返回第一张 margin-left =0
				$('.banner_box .imgs').animate({"margin-left":0});
				num = 1;
			}else{
				// 其他情况 margin-left 逐渐减少width
				$('.banner_box .imgs').animate({"margin-left":"-="+width+"px"},'slow');
				num++;
			}
			points(num-1);
		}
	})

	//点击左按钮  
	$('.left_btn').click(function(){
		if(!$(".banner_box .imgs").is(":animated")){
			if (num == 1) {
				// 当点击时是第一张图片时 margin-left ：-3*width
				$('.banner_box .imgs').animate({"margin-left":"-"+(count-1)*width+'px'});
				num = 4;
			}else{
				//其他情况 margin-left : 逐渐增加width
				$('.banner_box .imgs').animate({"margin-left":"+="+width+"px"},'slow');
				num--;
			}
			points(num-1);
		}
	})

	//鼠标经过圆点显示响应的图片
	$('.banner_box .points span').mouseover(function(){
		//如果没有正在执行动画则执行方法体
		if(!$(".banner_box .imgs").is(":animated")){
			var index = $(this).index();
			// alert(index)
			num = index+1;
			$('.banner_box .imgs').animate({'margin-left':'-'+index*width+"px"},'slow');
			points(index);
		}
	})


	// 自动播放  自动播放index是增加的相当于右按钮
	function startMove(){
		if(!$('.banner_box .imgs').is(":animated")){
			if(num == count){
				$('.banner_box .imgs').animate({"margin-left":0});
				num = 1;
			}else{
				$('.banner_box .imgs').animate({"margin-left":"-="+width+"px"},'slow');
				num++;
			}
			points(num-1);
		}
	}	

	//进入盒子停止轮播 移出继续轮播
	$(".banner_box").mouseover(function(){
		clearTimeout(timer);
	}).mouseout(function(){
		timer = setInterval(startMove,2000);
	});

	//圆点效果
	function points(index){
		// 当前对象添加类，siblings() 其他兄弟节点减少类
		$('.banner_box .points span').eq(index).addClass('current').siblings().removeClass('current');
	}

});