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
    function b() {
        t = parseInt(x.css('top'));
        y.css('top', '52px');
        x.animate({top: t - 52 + 'px'}, 'slow');
        if (Math.abs(t) == h - 52) {
            y.animate({top: '0px'}, 'slow');
            z = x;
            x = y;
            y = z;
        }
        setTimeout(b, 3000);
    }

    $(document).ready(function () {
        $('.swap').html($('.news_li').html());
        x = $('.news_li');
        y = $('.swap');
        h = $('.news_li li').length * 52;
        setTimeout(b, 3000);
    })

});

$(function () {
    //    微信二维码隐藏
    for (var s = $("body").attr("class"), n = $("nav a"), t = 0; t < n.length; t++) {
        var a = s.indexOf($(n[t]).attr("name"));
        a >= 0 && (n.removeClass("active"), $(n[t]).addClass("active"))
    }
    setTimeout(function () {
        $(".bbs2").trigger("click")
    }, 8e3), $("nav").addClass("show"), $(".bbs2").on("click", function () {
        $(".bbs").slideUp()
    }), $(".nav7").on("click", function () {
        $(".bbs").slideDown()
    })
    //    滑动效果js
    var i = $("#drop");
    $(window).resize(function () {
        $(window).width() > 1200 ? i.css("right", ($(window).width() - 1200) / 3) : i.css("right", 0)
    }), i.bind("click", function () {
        $("body,html").animate({scrollTop: 0}, 500)
    }), $(window).bind("scroll", function () {
        var n = $(window).scrollTop();
        n >= 400 ? i.fadeIn() : i.fadeOut()
    })
});
$(function () {
    //左边栏js
    setTimeout(function () {
        $('#J_slide').animate({left: 0}, 1000);
        $('#J_slide').animate({left: -200}, 1000);
    }, 10)
    var J_slide = $('#J_slide');
    J_slide.on('click', '.slide-trigger', function () {
        var self = $(this);
        var right = 0;
        J_slide[J_slide.hasClass('opened') ? 'removeClass' : 'addClass']('opened');
        J_slide.find('.slide-trigger span').text(J_slide.hasClass('opened') ? '展开' : '收起');
        J_slide.animate({left: (!J_slide.hasClass('opened') ? '0' : '-200px')}, "slow");
    });
})
//em
//$('.J_ac').mouseenter(function () {
//    $(this).addClass('tive');
//    $('em').fadeIn(100);
//    $('.J_ac').mouseleave(function () {
//        $(this).removeClass('tive');
//        $('em').fadeOut(100);
//    })
//})

//头部跑马灯效果
//function b() {
//    t = parseInt(x.css('top'));
//    y.css('top', '52px');
//    x.animate({top: t - 52 + 'px'}, 'slow');
//    if (Math.abs(t) == h - 52) {
//        y.animate({top: '0px'}, 'slow');
//        z = x;
//        x = y;
//        y = z;
//    }
//    setTimeout(b, 3000);
//}
//$(document).ready(function () {
//    $('.swap').html($('.new_li').html());
//    x = $('.new_li');
//    y = $('.swap');
//    h = $('.new_li li').length * 52;
//    setTimeout(b, 3000);
//
//})
