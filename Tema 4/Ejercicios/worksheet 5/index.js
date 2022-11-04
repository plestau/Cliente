function validarMayuscula(e){
    let regex= new RegExp('[A-ZÑ]');
    if(regex.test(e) == false){
        alert("El parametro debe constar de al menos un caracter en MAYUSCULA");
        return false;
    }
    return true;    
}

function validarCaracteresEspeciales(e){
    let regex= new RegExp('[!@#$%^&]');
    if(regex.test(e) == false){
        alert("El parametro debe constar de al menos uno de estos caracteres: !@#$%^&");
        return false;
    }
    alert("El parametro reune las caracteristicas necesarias")
    return true;    
}

// funcion que valida si el correo de un formulario es valido
function validarCorreo(e){
    let regex= new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
    if(regex.test(e) == false){
        alert("El parametro debe ser un correo electronico");
        return false;
    }
    alert("El parametro es correcto");
    return true;
}

function validarTarjetaCredito(e){

    var ccNum = document.getElementById("cardNum").value;

    var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    var amexpRegEx = /^(?:3[47][0-9]{13})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/; 


    if (visaRegEx.test(ccNum) === false ){ // Visa 
        return "Usa un numero valido de tarjeta";  
        }  
      else  
        {  
            return "Gracias";   
        } 

    if (mastercardRegEx.test(ccNum) === false){ // MasterCard 
        return "Usa un numero valido de tarjeta"; 
        }  
      else  
        {  
            return "Gracias"; 
        } 

    if(amexpRegEx.test(ccNum) === false){ // Amex  
        return "Usa un numero valido de tarjeta";   
        }  
      else  
        {   
            return "Gracias";   
        } 

    if (discovRegEx.test(ccNum) === false){ // Discover
        return "Usa un numero valido de tarjeta"; 
        }  
      else  
        {  
        return "Gracias";  
        } 

    }

function validarLongitud(e){
    let regex= new RegExp('[\w]{8,}/');
    if(regex.test(e) == false){
        alert("El parametro debe constar de al menos 8 caracteres ");
        return false;
    }
    alert("La longitud es correcta");
    return true;
}

function validarNumero(e){
    let regex= new RegExp('[\d]{1,}');
    if(regex.test(e) == false){
        alert("El parametro debe constar de al menos un dígito");
        return false;
    }
    alert("El parametro es correcto");
    return true;
}

function validarNombre(e=document.getElementById("nombre").value){
    let regex= new RegExp('[0-9]');
    if(regex.test(e) == true){
        alert("El parametro no debe contener números");
        return false;
    }
    alert("El parametro es correcto");
    return true;
}

function validarDNI(e=document.getElementById("dni").value){
    let regex= new RegExp('[0-9]{8}[A-Z]');
    if(regex.test(e) == false){
        alert("El parametro debe ser un DNI valido");
        return false;
    }
    alert("El parametro es correcto");
    return true;
}

function validarTelefono(e=document.getElementById("telefono").value){
    let regex= new RegExp('^[0-9]{9}$');
    if(regex.test(e) == false){
        alert("El parametro debe ser un numero de telefono valido");
        return false;
    }
    alert("El parametro es correcto");
    return true;
}

function validarCorreo2(e=document.getElementById("correo").value){
    let regex= new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
    if(regex.test(e) == false){
        alert("El parametro debe ser un correo electronico");
        return false;
    }
    alert("El parametro es correcto");
    return true;
}  

// funcion que valida que el nombre de usuario tenga al menos 8 caracteres, un numero y un signo de puntuacion
function validarNombreUsuario(e=document.getElementById("usuario").value){
    let regex= new RegExp('[\w]{8,}/');
    let regex2= new RegExp('[0-9]');
    let regex3= new RegExp('[!@#$%^&]');
    if(regex.test(e) == true){
        alert("El parametro debe constar de al menos 8 caracteres ");
        return false;
    }
    if(regex2.test(e) == false){
        alert("El parametro debe constar de al menos un dígito");
    }
    if(regex3.test(e) == false){
        alert("El parametro debe constar de al menos uno de estos caracteres: !@#$%^&");
    }else
    alert("Cumple todos los requisitos");
    return true;
}
