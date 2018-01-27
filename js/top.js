/**
 * Created by Administrator on 2017/12/11.
 */
$(function(){
    var i = $("#top");
    $(window).resize(function () {
        $(window).width() > 1200 ? i.css("right", ($(window).width() - 1200) / 3) : i.css("right", 0)
    }), i.bind("click", function () {
        $("body,html").animate({scrollTop: 0}, 100)
    }), $(window).bind("scroll", function () {
        var n = $(window).scrollTop();
        n >= 400 ? i.fadeIn() : i.fadeOut()
    })
})

$(function(){
    $('.figure').addClass('wow animated fadeInRightBig ');
    $('.title').addClass('wow animated fadeInLeftBig');
    $('.content').addClass('wow animated fadeInUpBig');
});