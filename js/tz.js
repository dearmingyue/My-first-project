/**
 * Created by Administrator on 2017/12/12.
 */
$(function(){

    //1.鼠标移入的当前的li标签添加上active类，其他的li删除掉active。
    //2.当前li对应的下标的 div显示(添加selected类)，其他的div隐藏(移除掉selected类)。
    $('#nav>a').click(function () {

        $(this).addClass('active').siblings('a').removeClass('active');
        var idx = $(this).index();
        console.log(idx);
        //获取当前的下标
        $('#wrap>.article').eq(idx).css('display','block').siblings('.article').css('display','none');
    });
});