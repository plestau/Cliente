// Ejercicio 1
document.write("<h1>Ejercicio 1</h1>");
document.write("<h2>Cliente</h2>");
document.write("<table>");
document.write("<tr><th>Nombre</th><th>Version</th><th>Lenguajes soportados</th><th>Online check</th><th>cookies</th><th>Agente</th><th>Credenciales</th><th>Lenguaje</th></tr>");
document.write("<tr><td>" + navigator.appName + "</td><td>" + navigator.appVersion + "</td><td>" + navigator.languages + "</td><td>" + navigator.cookieEnabled + "</td><td>" + navigator.userAgent + "</td><td>" + navigator.credentials + "</td><td>" + navigator.language + "</td></tr>");
document.write("</table>");

// Ejercicio 2
document.write("<h1>Ejercicio 2</h1>");
document.write("<h2>Pantalla</h2>");
document.write("<table>");
document.write("<tr><th>Ancho disponible</th><th>Alto disponible</th><th>Profundicad de color</th><th>Altura</th><th>Orientación</th><th>Profundidad del pixel</th><th>Ancho</th></tr>");
document.write("<tr><td>" + screen.availWidth + "</td><td>" + screen.availHeight + "</td><td>" + screen.colorDepth + "</td><td>" + screen.height + "</td><td>" + screen.orientation + "</td><td>" + screen.pixelDepth + "</td><td>" + screen.width + "</td></tr>");
document.write("</table>");
