/**
 * Created by Administrator on 2017/12/10.
 */
$(function () {
    //ҳ��������֮�� �Ȱѵ�0��ͼ��¡���ҷ������һ��ͼ��λ��

    $('.niutu ul').append($('.niutu ul li').eq(0).clone(true));
    var olKey = 0;//oi��li������ֵ
    var ulKey = 0;//ul��li������ֵ
    $('.rightBtn').click(function (e) {
        myFn();
    });

//            ��ʱ��
    function myFn() {
        //1��ol��li��� 2��ul��li��λ��
        olKey++;
        if (olKey > 4) {
            olKey = 0;
        }
        $('.niutu ol li').eq(olKey).addClass('current').siblings().removeClass('current');

        ulKey++;
        if (ulKey > 4) {
            ulKey = 1;//���Ｋֵ֮�� �൱���û���ǰ�����������һ����ʱ���������û���Ϊ��ǰ�������ǵ�һ��ͼ ���Լ�ֵ��ʱ������Ҫ��ulKey�ָ�������ֵΪ1��λ��
            //������ѵ�ǰ��ulλ�ûָ���0��Ļ����û�������Ч�������޷�����������ʵ���޷���������Ǿ�Ҫ��ulһ˲��ָ���0��Ȼ����animate�ƶ������������û��뿴�����޷����Ч��
            $('.niutu ul').css('left', '0px');
        }
        var move = ulKey * -430;
        $('.niutu ul').stop().animate({'left': move + 'px'}, 500);
    }

    var timer = null;
    timer = setInterval(function () {
        myFn();
    },2000);

    //������ʱ �رն�ʱ��
    $('.niutu').hover(function (e) {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            myFn();
        }, 2000);
    });
})