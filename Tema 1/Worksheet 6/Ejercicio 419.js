let alchura = prompt("Escribe el alto y lo ancho que serán las celdas");

document.write("<table border=0 cellspacing=2 bgcolor=black width=auto>");

for (let fila = 0; fila <= 8; fila++){
    if (fila % 2 == 0){
        document.write("<tr height ="+ alchura +" width ="+ alchura +" bgcolor=black>&nbsp;</td>");
        for (let column = 1; column <= 8; column++){    
            if (column % 2 == 0){
                document.write("<td height ="+ alchura +" width ="+ alchura +" bgcolor=white>&nbsp;</td>");}
            else{
                document.write("<td height ="+ alchura +" width ="+ alchura +" bgcolor=black>&nbsp;</td>");}}}
    if (fila %2 != 0){
        document.write("<tr height ="+ alchura +" width ="+ alchura +" bgcolor=white>&nbsp;</td>");
        for (let column = 1; column <= 8; column++){    
            if (column % 2 != 0){
                document.write("<td height ="+ alchura +" width ="+ alchura +" bgcolor=white>&nbsp;</td>");}
            else{
                document.write("<td height ="+ alchura +" width ="+ alchura +" bgcolor=black>&nbsp;</td>");}}}}

document.write("</tr>");
document.write("</table>");