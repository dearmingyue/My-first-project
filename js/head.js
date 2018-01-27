/**
 * Created by Administrator on 2017/12/10.
 */
$(function () {

    //鼠标移入显示列表，移出隐藏列表
    $('#NIE-topBar-menu').mouseenter(function () {
        $(this).addClass('NIE-topBar-menu-hover');
    });
    $('#NIE-topBar-menu').mouseleave(function () {
        $(this).removeClass('NIE-topBar-menu-hover');
    });


    //“更多热门端游”点击事件
    $('#NIE-topBar-more-pc').click(function () {
        if ($('#NIE-topBar-more-pc').hasClass('open')) {
            $(this).removeClass('open').text("更多热门端游");
            $('#js_NIE_topbar_xiu').animate({left: '135px', 'z-index': 3}, 'fast');
        } else {
            $(this).addClass('open').text("<<");
            $('#js_NIE_topbar_xiu').animate({left: '276px', 'z-index': 4}, 'fast');

        }
    })

    //“更多热门手游”点击事件
    $('#NIE-topBar-more-mobi').click(function () {
        if ($('#NIE-table').hasClass('moreAni')) {
            $('#NIE-table').removeClass('moreAni');
            $(this).text('更多热门手游');
        } else {
            $('#NIE-table').addClass('moreAni');
            $(this).text('<<');
        }
    })

    //头部跑马灯效果
    function b(){
        t = parseInt(x.css('top'));
        y.css('top','52px');
        x.animate({top: t - 52 + 'px'},'slow');
        if(Math.abs(t) == h-52){
            y.animate({top:'0px'},'slow');
            z=x;
            x=y;
            y=z;
        }
        setTimeout(b,3000);
    }
    $(document).ready(function(){
        $('.swap').html($('.news_li').html());
        x = $('.news_li');
        y = $('.swap');
        h = $('.news_li li').length * 52;
        setTimeout(b,3000);
    })

})