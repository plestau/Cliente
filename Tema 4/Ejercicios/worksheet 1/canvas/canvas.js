function creaCanvas(){
    document.write("<table border=1px solid black name='myCanvas' width='1000' height='500''>");
    for (x=0;x<=100;x++){
        document.write("<tr>");
        for (y=0;y<=100;y++){
            document.write("<td name=td></td>");
        }
        document.write("</tr>");
    }
}

function cambiaColor(){
    [...document.getElementsByTagName("td")].forEach(td => {
        td.addEventListener("mouseenter", darColor);
    });
}

function darColor(e) {
    if (e.ctrlKey)
        this.style.backgroundColor="rgb(255,0,0)";
    else if (e.shiftKey)
        this.style.backgroundColor="rgb(0,0,255)";
    else if (e.altKey)
        this.style.backgroundColor="inherit";
    else if (e.metaKey)
        window.location.reload();
}

document.addEventListener("keydown", function(event) {
    	if(event.key === "z"){
    		// Hacer algo, tal vez deshacer
            this.location.reload();
    	}
    }
);

function quitarColor() {
    myCanvas.style.backgroundColor="inherit";
}

window.onload = () => {
    creaCanvas();
    cambiaColor();
}
