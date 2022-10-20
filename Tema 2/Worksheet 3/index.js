// Ejercicio 1
function invertirCadenas(str){
    var newString = " ";
    for (var i = str.length - 1; i >= 0; i--){
        newString += str[i];
    }
    return newString;
}
document.write(invertirCadenas(prompt("Introduce una cadena de caractéres"))+"</br>");

function invertirPalabras(str){
    var newString = str.split(" ");
    for (var j = str.length - 1; j >= 0; j--){
        newString.reverse();
    }
    return newString;
}
document.write(invertirPalabras(prompt("Introduce una segunda cadena de caractéres"))+"</br>");

// Ejercicio 2


// Ejercicio 3
function apariciones(cadena, subcadena){
    let nueva_cadena = cadena.split(" ");
    contador = 0;
    for (palabra of nueva_cadena){
        if (palabra == subcadena){
            contador++;
        }
    }
    return contador;
}
document.write(apariciones("sol sol sol palabra sol", "sol"));

// Ejercicio 4
function disorganice(cad_arg){
    let lowercasedstring = cad_arg.toLowerCase();
    let resultingString = "";
    let veginingofString = "";
    let endOfString="";

    for (let i = 0; i < cad_arg.length; i++){
        let char = lowercasedstring.charCodeAt(i);
        if (char==97||char==101||char==105||char==111||char==117){
            begininofString = endOfString + cad_arg.charAt(i);
        }
    }
}
resultingString = begininofString + endOfString;
document.write(resultingString + "</br>");
return resultingString;

// Ejercicio 5
function outReps(cad_arg){
    newString = Array.from(new Set(cad_arg)).toString();
    document.write(newString);
}
document.write(outReps("no hay mas de una a ni n"));

// Ejercicio 6
function deleteRepeat(cadena){
    let arrCadena = cadena.split(" ");
    arr = [];
    set = new Set(arrCadena);
    arr = [...set];
    return arr.join('').toString();
}

function deleteRepat2(cadena){
    let aux = cadena;
    for (let i = 0; i < aux.length; i++){
        if (aux.indexOf(aux[i]) != aux.lastIndexOf(aux[i]) ){
            aux = aux.replaceAll(aux[i], '');
        }
    }
    return aux;
}
// Ejercicio 7


// Ejercicio 8


// Ejercicio 9
function tableWord(cadena){
    reves = invertirCadenas(cadena);
    document.write("<table border= \"0\" cellspacing=\"2\" bgcolor = \"black\" width = \"200\">");

    for (let i=0; i<cadena.length; i++){
        document.write("<tr bgcolor=\"white \"height = \"50 \">");
        if (i==0){
            for (let j=0; j<cadena.length; j++){
                document.write("<td width=\"50\" bgcolor=\"white \">${cadena[j]}</td>");
            }
        else if(i == cadena.length - 1){
            for (let j=0; j< cadena.length; j++){
                document.write("<td width=\"50\" bgcolor=\"white \">${reves[j]}</td>");
                }
        }
        else{
            
        }
        }
    }
}
