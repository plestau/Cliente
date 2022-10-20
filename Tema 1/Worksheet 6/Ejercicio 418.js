let valor1 = prompt("Escribe el primer valor");
let valor2 = prompt("Escribe el segundo valor");
let valor3 = prompt("Escribe el tercer valor");
let valor4 = prompt("Escribe el cuarto valor");

document.write("<table border=0 cellspacing=2 bgcolor=black width=auto>");
for (let fila = 0; fila <= valor3; fila++){
    document.write("<tr bgcolor=white height=auto>");
    for (let column = 0; column <= valor1; column++){
        document.write("<td height ="+ valor2 +" width ="+ valor3 +">&nbsp;</td>");}}
document.write("</tr>")
document.write("</table>");