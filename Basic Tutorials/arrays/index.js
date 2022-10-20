compra = ["Peras", "Manzanas", "Kiwis", "Plátanos", "Mandarinas"];

document.write("<h1>Ejercicio 1</h1>");
compra.splice(1, 1);
document.write(compra + "</br>");
compra.splice(3, 0, "Naranjas", "Sandía");
document.write(compra + "</br>");
compra.splice(1, 1, "Cerezas", "Nísperos");
document.write(compra + "</br>");

document.write("<h1>Ejercicio 2</h1>");
notas = [4, 8, 3, 10, 5];
ordenadas = notas.sort((a, b) => a-b);
document.write(ordenadas);

document.write("<h1>Ejercicio 3</h1>");
dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
xd = dias.filter((dia) => dia[0]=="M");
document.write(xd);

document.write("<h1>Ejercicio 4</h1>");
dia = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
result = dia.find(dia => dia.startsWith("M"));
document.write(result);


document.write("<h1>Ejercicio 5</h1>");
dia = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
hola = dia.findIndex((dia) => dia[0]=="M");
document.write(hola);

document.write("<h1>Ejercicio 6</h1>");
dia = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
result = dia.find(dia => dia.startsWith("S"));
document.write(result);

document.write("<h1>Ejercicio 7</h1>");
dia = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
resultado = dia.map(day => day.toUpperCase());
document.write(resultado);

document.write("<h1>Ejercicio 8</h1>");
notazas = [5.2, 3.9, 6, 9.75, 7.5, 3];
sumanotas = notazas.reduce((total, nota) => total += nota);
document.write(sumanotas/(notazas.length));

document.write("<h1>Ejercicio 9</h1>");
dia = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
martes = dia.includes("Martes");
document.write(martes);

document.write("<h1>Ejercicio 10</h1>");
arr1=["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
arr2 = arr1;
arr2.pop();
document.write(arr1);

arr3=arr1;
arr3.pop();
document.write(arr3);
