function wordCounter(...arguments){
    let counter = 0;
    document.write("</br>"); // Espacio entre pruebas
    for (let value of arguments){
        if (isNaN(value)==false || true){
            counter += 1;
        }
    }
    return counter;
}

document.write(wordCounter('cat', 'dog')); //2
document.write(wordCounter('cat', 'dog', 'frog', 'bear')); //4
    