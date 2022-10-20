let valor1 = prompt("Escribe el primer valor");
let valor2 = prompt("Escribe el segundo valor");
let valor3 = prompt("Escribe el tercer valor");
let columna = 0;

document.write("<table border=0 cellspacing=2 bgcolor=black width=auto>");
document.write("<tr bgcolor=white height=auto>");

do{
    columna++;
    if (columna % 2 != 0){
        document.write("<td height="+ valor2 +" width="+ valor3 +" bgcolor=black>&nbsp;</td>");}
    else{
        document.write("<td height="+ valor2 +" width="+ valor3 +" bgcolor=white>&nbsp;</td>");}
}while (columna <= valor1)

document.write("</tr>");
document.write("</table>");