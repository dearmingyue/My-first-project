/**
 * Created by Administrator on 2017/12/11.
 */
$(function(){



$("body").delegate(".tuku li", "mouseover", function () {

    $(this).find(".card_border").addClass("animate"),
        $(this).find(".desc").stop(!0).fadeOut(),
        $(this).find(".tuku_mask").stop(!0).delay(600).fadeIn(300)
});
    $("body").delegate(".tuku li", "mouseout", function () {
        $(this).find(".card_border").removeClass("animate"),
            $(this).find(".desc").stop(!0).fadeIn(),
            $(this).find(".tuku_mask").stop(!0).fadeOut(300)
    });


});