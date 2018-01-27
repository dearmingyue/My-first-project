/**
 * Created by LLY on 2017/12/6.
 */
//
//隐藏表格显示js
$(document).ready(function () {
    $('#game').mouseenter(function () {
        $('#table').stop().slideDown(500);
    })
    $('#table').mouseleave(function () {
        $('#table').stop().slideUp(500);
    });

    //左边#left
    $('#left').click(function () {
        if ($('#left').hasClass('opened')) {
            $(this).removeClass('opened').text('更多热门端游');
            $('#athletics').stop().animate({left: 135}, 1000, 'linear');
        } else {
            $(this).addClass('opened').text('<<');
            $('#athletics').stop().animate({left: 270}, 1000, 'linear');
        }
    });
    $('#right').click(function () {
        if ($('#right').hasClass('opened')) {
            $(this).removeClass('opened').text('更多热门手游');
            $('#news').stop().animate({left: 446, width: 408}, 1000, 'linear');
        } else {
            $(this).addClass('opened').text('>>');
            $('#news').stop().animate({left: 200, width: 720}, 1000, 'linear');
        }
    });

//左边栏js
    var J_slide = $('#J_slide');
    J_slide.on('click', '.slide-trigger', function () {
        var self = $(this);
        var right = 0;
        J_slide[J_slide.hasClass('opened') ? 'removeClass' : 'addClass']('opened');
        J_slide.find('.slide-trigger span').text(J_slide.hasClass('opened') ? '收起' : '展开');
        J_slide.animate({left: (!J_slide.hasClass('opened') ? '-200px' : '0')}, "slow");
    });
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
//    微信二维码隐藏
    $(function () {
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
    });
    //图片flash
    $('')
})