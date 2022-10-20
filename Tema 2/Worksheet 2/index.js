// Ejercicio 1
document.write(Math.random()*1 + "</br>");
document.write(Math.random()*200 + 100 + "</br>");
let valor1 = prompt("Escribe un número");
let valor2 = prompt("Escribe otro número");
document.write(Math.random()*valor2 + valor1 + "</br>");

// Ejercicio 5
let root1, root2;

let a = prompt("Introduce el primer valor");
let b = prompt("Introduce el segundo valor");
let c = prompt("Introduce el tercer valor");

let discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    document.write(`Los resultados de la operación son ${root1} y ${root2}</br>`);
}

else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    document.write(`Los resultados de la operación son ${root1} y ${root2}</br>`);
}

else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    document.write(`Los resultados de la operación son ${realPart} + ${imagPart}, y ${realPart} - ${imagPart}</br>`);
}

// Ejercicio 7
let valor = Math.random()*300 + 1;
let seno = Math.sin(valor);
document.write("<table border=0 cellspacing=2 bgcolor=black width=200>");
document.write("<tr bgcolor=white height=200>");
document.write("<td bgcolor=white height=100></br>" + valor + "</td>");
document.write("<td bgcolor=white height=100></br>" + seno + "</td>");
document.write("</tr>")
document.write("</table>")

// Ejercicio 8
let img = new Array()
img[0] = src='foto1.jpg width=920 height=600';
img[1] = src='foto2.jpg width=920 height=600';
img[2] = src='foto3.jpg width=920 height=600';
ran = Math.floor(3 * Math.random());
document.write("<img src="+img[ran]+">");
