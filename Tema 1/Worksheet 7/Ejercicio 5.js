function sumEveryOther(...arguments){
    let acumulator = 0;
    for (let position = 0; position <= arguments.length;position+=2){
        acumulator += arguments[position];
    }
    return acumulator;
}

document.write(sumEveryOther(5,6,3,4,1) + "</br>");
document.write(sumEveryOther(10,2,11,4) + "</br>");
