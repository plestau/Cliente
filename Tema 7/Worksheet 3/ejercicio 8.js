$(document).ready(function(){
    $("div").hide();
    $("#faster").click(function(){
        $("div").fadeIn(800);
    });
    $("#fast").click(function(){
        $("div").fadeIn(2000);
    });
    $("#slow").click(function(){
        $("div").fadeIn(4000);
    });
    $("#hide").click(function(){
        $("div").hide();
    });
});