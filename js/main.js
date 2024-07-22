$(function(){
    $(".main>li").hover(function(){
        $(this).find(".sub").stop().slideDown()
    },function(){
        $(".sub").stop().slideUp()
    })//hover

    //이미지 슬라이드
    $(".fade li").hide()
    $(".fade li").eq(0).show()
    var n = 0;

    setInterval(function(){
        if(n == 2){

        }else{ n++}
        $(".fade li").eq(n).fadeIn().siblings().fadeOut()
    },3000)

    $(".cont1 h2").click(function(){
        $(".cont1 h2").removeClass("on")
        $(this).addClass("on")
        $(".cont1 ul").hide();
        $(this).next("ul").css({display : "flex"})
    })
})//js