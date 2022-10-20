setTimeout('document.location.reload()',10);

navigator.geolocation.getCurrentPosition(cb);

function cb(pos){
  lat = document.write(pos.coords.latitude + "</br>");
  long = document.write(pos.coords.longitude + "</br>");
}

if (cb = false){
  document.write("Ubicación no disponible");
}

newlat = pos.coords.latitude;
newlong = pos.coords.logitude;
if (newlat > lat|| newlong > long || newlat > lat && newlong > long|| lat > newlat || long < newlong|| lat > newlat && long > newlong){
  document.write("Latitud recorrida: ", newlat - lat);
  document.write("Longitud recorrida: ", newlong - long);
}