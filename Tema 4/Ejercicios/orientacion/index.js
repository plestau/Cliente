window.addEventListener("deviceorientation", handleOrientation, true);
a = DeviceOrientationEvent.alpha;
b = DeviceOrientationEvent.beta;
g = DeviceOrientationEvent.gamma;

if (a <= b){
    document.write("<img src=balon align=right>");
}