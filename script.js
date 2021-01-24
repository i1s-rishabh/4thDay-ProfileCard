$(document).ready(function(){
    $(".readmore h3").click(function(){
        if($(this).text() == "show more") {
            $(".content").addClass("scroll");
            $(this).text("show less");
            $(".item").addClass("showfull");
        } else {
            $(".content").removeClass("scroll");
            $(this).text("show more");
            $(".item").removeClass("showfull")
        }
    }); 

    $(".like").click(function(){
        $(this).toggleClass("clicked");
    });
});