const addItemsAction = document.querySelector('.accion-añadiritems');
const input = document.querySelector('.input-añadiritems');
const submit = document.querySelector('.submit-añadiritems');
const list = document.querySelector('.listacompra');
const displayItemsAction = document.querySelector('.accion-mostraritems');
const clear = document.querySelector('.clear-mostraritems');
submit.addEventListener('click', addItem);
document.addEventListener('DOMContentLoaded', displayStorage);
clear.addEventListener('click', removeItems);
list.addEventListener('click', removeSingleItem);


function addItem(event){
    event.preventDefault();
    let value = input.value;
    if (value === ''){
        showAction(addItemsAction, 'Añade un item a la lista', false);
    } else {
        showAction(addItemsAction, `${value} ha sido añadido a la lista`, true);
        createItem(value);
        updateStorage(value);
    }
}

function showAction(element, text, value){
    if (value === true){
        element.classList.add('exito');
        element.innerText = text;
        input.value = '';
        setTimeout(function(){
            element.classList.remove('exito');
        }, 3000)
    } else {
        element.classList.add('alerta');
        element.innerText = text;
        input.value = '';
        setTimeout(function(){
            element.classList.remove('alerta');
        }, 3000)
    }
}

// crear item
function createItem(value){
    let parent = document.createElement('div');
        parent.classList.add('itemlista');

    parent.innerHTML = `<h4 class="titulo-itemlista">${value}</h4>
    <a href="#" class="link-itemlista">
        <i class="far fa-trash-alt"></i>
    </a>`

    list.appendChild(parent);
}

//update almacenamiento
function updateStorage(value){
    let groceryList;
    
    groceryList = localStorage.getItem('listacompra') ? JSON.parse(localStorage.getItem('listacompra')) : [];

    groceryList.push(value);
    localStorage.setItem('listacompra', JSON.stringify(groceryList));
}

//mostrar items en almacenamiento local
function displayStorage(){
    let exists = localStorage.getItem('listacompra');
    
    if(exists){
        let storageItems = JSON.parse(localStorage.getItem('listacompra'));
        storageItems.forEach(function(element){
            createItem(element);
        })
    }
}

//ELiminar todos los items
function removeItems(){
    //Eliminar de almacenamiento local
    localStorage.removeItem('listacompra');
    let items = document.querySelectorAll('.itemlista');
    
    if(items.length > 0){
        //Eliminar cada item de la lista
        showAction(displayItemsAction, 'Todos los items han sido borrados', false);
        items.forEach(function(element){
            list.removeChild(element);
        })
    } else {
        showAction(displayItemsAction, 'No hay más items que borrar', false);
    }
}

//Eliminar 1 unico item

function removeSingleItem(event){
    event.preventDefault();
    
    let link = event.target.parentElement;
    if(link.classList.contains('link-itemlista')){
        let text = link.previousElementSibling.innerHTML;
        let groceryItem = event.target.parentElement.parentElement;
        // Elimina de la lista
        list.removeChild(groceryItem);
        showAction(displayItemsAction,`${text} ha sido eliminado de la lista`, true);

        //Elimina de almacenamiento local
        editStorage(text);

    }
}

function editStorage(item){
    let groceryItems = JSON.parse(localStorage.getItem('listacompra'));
    let index = groceryItems.indexOf(item);
    
    groceryItems.splice(index, 1);
    localStorage.removeItem('listacompra');
    localStorage.setItem('listacompra', JSON.stringify(groceryItems));
}
