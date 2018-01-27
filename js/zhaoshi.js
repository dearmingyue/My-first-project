/**
 * Created by Administrator on 2017/12/10.
 */
$(function () {
    //1.tab栏切换
    $('.t-head > li').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active').parent().parent().children('.t-body').eq($(this).index()).addClass('active').siblings('.t-body').removeClass('active');
    });

    //2.点击招式传记全文按钮，出现遮罩弹窗
    $('.panel-zhuanji .more').click(function () {
        var bodyHeight = parseInt($(document).height());//获取页面的文档高
        $('#mask').css('height', bodyHeight);
        $('#mask,#popupPage').fadeIn(500);
    })
    $('#btn-close').click(function () {
        $('#mask,#popupPage').fadeOut(500);
    });

    //3.点击上下按钮，移动招式列表
    var index = 4;
    $('.flip-ctrl .btn-prev ').click(function () {
        index --;
        if(index <= 0){
            index = 0;
        }
        $('.book-navs-list').css('transform','translateY(-'+index*300+'px)');
    });
    $('.flip-ctrl .btn-next').click(function () {
        index ++;
        if(index >= 4){
            index = 4
        }
        $('.book-navs-list').css('transform','translateY(-'+index*300+'px)');
    });


    //4.加载页面先翻页，再出现内容

    //$('.page-content .con-inner').hide();
    $('#video-flip').bind('error ended', function(){
        console.log("视频播放结束");
        $('.video-flip').hide();
        $('.page-content .con-inner').show();
    });

    //5.点击不同招式出现翻页效果
    $('.book-navs-list > li').click(function () {
        $('.video-flip').show();
        var video = $("#video-flip");
        if(video.length>0){
            video[0].play();
        }
    });


})