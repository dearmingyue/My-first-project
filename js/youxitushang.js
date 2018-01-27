/**
 * Created by Barnett on 2017/12/10.
 */
//右侧download移入显示
$(function () {
    $('#download').mouseenter(function () {
        $('#qrcode').stop().slideDown(500);
    });
    $('#download').mouseleave(function () {
        $('#qrcode').stop().slideUp(500);
    });

})

//轮播图1
$(function () {
    var idx = 0;
    //克隆第一张图片放到ul最后
    $('.slidePic>ul').append($('.slidePic>ul>li').eq(0).clone(true));
    var timerID = setInterval(function () {
        myFn()
    }, 2000);

    function myFn() {
        idx++;
        if (idx == 4) {
            idx = 0;
        }
        $('.slidePic>ul>li').eq(idx).stop().fadeIn().siblings('li').stop().fadeOut();
    }

    //移入停止计时器
    $('.slide').hover(function () {
        clearInterval(timerID);
    }, function () {
        timerID = setInterval(function () {
            myFn()
        }, 2000)
    })
});
//单击换图1
$(function () {
    var idx = 0;
    $('#moveGo1').append($('#moveGo1>div').eq(0).clone(true))
    $('.moveGo1-Right').click(function () {
        idx++;
        if (idx == 3) {
            idx = 0;
        }
        $('#moveGo1>div').eq(idx).stop().fadeIn(500).siblings('div').stop().fadeOut(500);
    });
    $('.moveGo1-Left').click(function () {
        idx--;
        if (idx == -1) {
            idx = 2;
        }
        $('#moveGo1>div').eq(idx).stop().fadeIn(500).siblings('div').stop().fadeOut(500);
    });
})

//轮播图2
$(function () {
    var idx = 0;
    //克隆第一张图片放到ul最后
    $('.slidePic2>ul').append($('.slidePic2>ul>li').eq(0).clone(true));
    var timerID = setInterval(function () {
        myFn()
    }, 2000);

    function myFn() {
        idx++;
        if (idx == 4) {
            idx = 0;
        }
        $('.slidePic2>ul>li').eq(idx).stop().slideDown().siblings('li').stop().slideUp();
    }

    //移入停止计时器
    $('.slide2').hover(function () {
        clearInterval(timerID);
    }, function () {
        timerID = setInterval(function () {
            myFn()
        }, 2000)
    })
});
//单击换图2
$(function () {
    var idx = 0;
    $('#moveGo2').append($('#moveGo2>div').eq(0).clone(true))
    $('.moveGo2-Right').click(function () {
        idx++;
        if (idx == 3) {
            idx = 0;
        }
        $('#moveGo2>div').eq(idx).stop().fadeIn(500).siblings('div').stop().fadeOut(500);
    });
    $('.moveGo2-Left').click(function () {
        idx--;
        if (idx == -1) {
            idx = 2;
        }
        $('#moveGo2>div').eq(idx).stop().fadeIn(500).siblings('div').stop().fadeOut(500);
    });
})

//轮播图3
$(function () {
    var idx = 0;
    //克隆第一张图片放到ul最后
    $('.slidePic3>ul').append($('.slidePic3>ul>li').eq(0).clone(true));
    var timerID = setInterval(function () {
        myFn()
    }, 2000);

    function myFn() {
        idx++;
        if (idx == 4) {
            idx = 0;
        }
        $('.slidePic3>ul>li').eq(idx).stop().show().siblings('li').stop().hide();
    }

    //移入停止计时器
    $('.slide3').hover(function () {
        clearInterval(timerID);
    }, function () {
        timerID = setInterval(function () {
            myFn()
        }, 2000)
    })
});
//单击换图3
$(function () {
    var idx = 0;
    $('#moveGo3').append($('#moveGo3>div').eq(0).clone(true))
    $('.moveGo3-Right').click(function () {
        idx++;
        if (idx == 3) {
            idx = 0;
        }
        $('#moveGo3>div').eq(idx).stop().fadeIn(500).siblings('div').stop().fadeOut(500);
    });
    $('.moveGo3-Left').click(function () {
        idx--;
        if (idx == -1) {
            idx = 2;
        }
        $('#moveGo3>div').eq(idx).stop().fadeIn(500).siblings('div').stop().fadeOut(500);
    });
})

