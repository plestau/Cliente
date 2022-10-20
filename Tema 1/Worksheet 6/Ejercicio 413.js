let valor1 = prompt("Escribe el primer valor");
let valor2 = prompt("Escribe el segundo valor");
let valor3 = prompt("Escribe el tercer valor");

document.write("<table border=0 cellspacing=2 bgcolor=black width=auto>");
document.write("<tr bgcolor=white height=auto>");
let column = 0;
while (column <= valor1){
    column++;
    document.write("<td height ="+ valor2 +" width ="+ valor3 +">&nbsp;</td>");}
document.write("</tr>")
document.write("</table>");