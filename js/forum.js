/**
 * Created by CHANG on 2017/12/4.
 */

$(function () {

    $('#b-weiXin').fadeOut(7000);

    $('#close').click(function () {
        $(this).parent().remove();
    })
    //���div
    var $lrtests = $('#logo-nav>li>a')
    var $div1 = $('<div></div>')
    $div1.css({
        'backgroundColor': 'rgba(193, 164, 100,0.5)',
        'position': 'absolute',
        'width': '78px',
        'bottom': '-8px'
    })
    $lrtests.append($div1);


        $('#logo-nav>li').mouseenter(function () {
            if(!$(this).hasClass('forum')){
                $(this).find('em').css(
                {backgroundColor: '#C1A464',
                    height:3
                });
                $(this).find('div').stop().animate({
                    height: 25
                }, 500)}


        })
        $('#logo-nav>li').mouseleave(function () {
           if(!$(this).hasClass('forum')){
               $(this).find('div').animate({height:"0px"},500);
               $(this).find('em').animate({height:"0px"},510);


           }
        })

    $('.forum div').attr('class','news-d');
    $('.forum em').attr('class','news-em');
    if($('#logo-nav>li').hasClass('forum')){
        $('.forum .news-d').css(
            {height:"25px",

            }
        )
        $('.forum a').css(
            {backgroundPosition: '-370px 0px',
                backgroundImage: 'url(images/nav_news-2_d5c273e.png)'

    }
        )
        $('.forum .news-em').css({
                height:3,
                backgroundColor:'#C1A464'
            }
        )
    }


})