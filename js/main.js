// navbar scroll color
function checkScroll(){
    var startY = $('.landing-page').height() - 200  ; //The point where the navbar changes in px
    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}
if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}