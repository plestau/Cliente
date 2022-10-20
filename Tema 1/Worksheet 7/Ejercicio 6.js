function onlyUniques(...arguments){
    let uniqueArray = [...new Set(arguments)];
    return uniqueArray;
}

document.write(4,4,5,5,1,3);