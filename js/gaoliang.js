/**
 * Created by Administrator on 2017/12/11.
 */

$(function () {

    //1.��ȡ��li��ǩ
    $('.wrap>li ').mouseenter(function () {
        //$(this).css('opacity',1);  //����css���������з���ֵ���������ֵ�������������
        //$(this).siblings().css('opacity','0.4');
        $(this).css('opacity',1).siblings().css('opacity','0.4'); //��ʽ��̡�
    });



    //2.��div����һ������Ƴ��¼���
    $('.wrap').mouseleave(function () {
        $(this).find('li').css('opacity',1);
    });


});
