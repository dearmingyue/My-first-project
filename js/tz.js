/**
 * Created by Administrator on 2017/12/12.
 */
$(function(){

    //1.�������ĵ�ǰ��li��ǩ�����active�࣬������liɾ����active��
    //2.��ǰli��Ӧ���±�� div��ʾ(���selected��)��������div����(�Ƴ���selected��)��
    $('#nav>a').click(function () {

        $(this).addClass('active').siblings('a').removeClass('active');
        var idx = $(this).index();
        console.log(idx);
        //��ȡ��ǰ���±�
        $('#wrap>.article').eq(idx).css('display','block').siblings('.article').css('display','none');
    });
});