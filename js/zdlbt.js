/**
 * Created by Administrator on 2017/12/10.
 */
$(function () {
    //页面加载完成之后 先把第0张图克隆并且放在最后一张图的位置

    $('.niutu ul').append($('.niutu ul li').eq(0).clone(true));
    var olKey = 0;//oi的li的索引值
    var ulKey = 0;//ul的li的索引值
    $('.rightBtn').click(function (e) {
        myFn();
    });

//            定时器
    function myFn() {
        //1：ol的li变多 2：ul的li变位置
        olKey++;
        if (olKey > 4) {
            olKey = 0;
        }
        $('.niutu ol li').eq(olKey).addClass('current').siblings().removeClass('current');

        ulKey++;
        if (ulKey > 4) {
            ulKey = 1;//到达极值之后 相当于用户当前看到的是最后一张临时工，但是用户以为当前看到的是第一张图 所以极值的时候我们要把ulKey恢复到索引值为1的位置
            //如果不把当前的ul位置恢复到0点的话，用户看到的效果不是无缝滚动，如果想实现无缝滚动，我们就要把ul一瞬间恢复到0，然后再animate移动，这样才是用户想看到的无缝滚动效果
            $('.niutu ul').css('left', '0px');
        }
        var move = ulKey * -430;
        $('.niutu ul').stop().animate({'left': move + 'px'}, 500);
    }

    var timer = null;
    timer = setInterval(function () {
        myFn();
    },2000);

    //开启定时 关闭定时器
    $('.niutu').hover(function (e) {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            myFn();
        }, 2000);
    });
})