/**
 * Created by Administrator on 2017/12/11.
 */

$(function () {

    //1.获取到li标签
    $('.wrap>li ').mouseenter(function () {
        //$(this).css('opacity',1);  //调用css方法，会有返回值，这个返回值就是这个对象本身。
        //$(this).siblings().css('opacity','0.4');
        $(this).css('opacity',1).siblings().css('opacity','0.4'); //链式编程。
    });



    //2.给div设置一个鼠标移出事件。
    $('.wrap').mouseleave(function () {
        $(this).find('li').css('opacity',1);
    });


});
