var celsius = prompt("Temperatura en Celsius a Farenheit");
var celsiusToFarenheit = celsius * 9 / 5 + 32;

var farenheit = prompt("Temperatura en Farenheit a Celsius");
var farenheitToCelsius = (farenheit - 32) * 5 / 9;

document.write('<br/>' + celsius + 'º Celsius a Farenheit: ' + celsiusToFarenheit);
document.write('<br/>' + farenheit + 'º Farenheit a Celsius: ' + farenheitToCelsius);
