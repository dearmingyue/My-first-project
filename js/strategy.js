/**
 * Created by Administrator on 2017/12/11.
 */
$(function(){

    //1.�������ĵ�ǰ��li��ǩ�����active�࣬������liɾ����active��
    //2.��ǰli��Ӧ���±�� div��ʾ(���selected��)��������div����(�Ƴ���selected��)��
    $('.strategy_top>.bt').mouseenter(function () {

        $(this).addClass('active').siblings('li').removeClass('active');
        var idx = $(this).index(); //��ȡ��ǰ���±�
        $('.newsList>.newsConlist').eq(idx).css('display','block').siblings().css('display','none');
    });
});