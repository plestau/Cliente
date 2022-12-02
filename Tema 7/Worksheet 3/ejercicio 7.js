$(document).ready(function(){
    $("#btn").click(function(){
        $("div").animate({fontSize: '7em'});
        $("div").animate({left: '750px'});
        $("div").animate({opacity: '0.5'});
    });
    $("#parar").click(function(){
        $("div").stop();
        $("div").stop();
    });
});
