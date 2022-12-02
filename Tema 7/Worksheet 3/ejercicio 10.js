$(document).ready(function(){
    var input = $("#pass");
    var message = $("#resultado");

    input.keyup(function(){
        var pass = input.val();
        if(pass.length == 0){
            message.text("");
        }else if(pass.length < 5){
            message.text("No es segura");
            message.fadeIn(1000);
        }else if(pass.length > 5 && pass.length < 8){
            message.text("Medio segura");
            message.fadeIn(1000);
        }else{
            message.text("Segura");
            message.fadeIn(1000);
        }
    });
});
