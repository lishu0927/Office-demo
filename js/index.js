/**
 * Created by ls on 2016/3/25.
 */
$(function(){
    $('.text').on('webkitAnimationEnd', function (){
        $(this).css('opacity','1');
        $(this).removeClass('animate');
    }).on('animationend', function (){
        $(this).css('opacity','1');
        $(this).removeClass('animate');
    });
    $('a.circle').click(function(){
        $('.text').css('opacity','0');
        $('.text').addClass('animate');
    });
    var documentwidth=$(window).width();
    var documentheight=$(window).height();
    var wrapperheight=$('#wrapper').height();
    console.log(documentheight);
    //console.log(wrapperheight);
    $('#wrapper').css('top',(documentheight-wrapperheight)/2);

})
