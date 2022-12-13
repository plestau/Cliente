$(document).ready(function(){
    var peticionEnCurso = false;
    configureLoadingScreen($('#loading-screen'));
    $('#logo').click(function(){
        location.reload();
    });
    
    function configureLoadingScreen(screen){
        $(document)
            .ajaxStart(function(){
                screen.fadeIn();
            })
            .ajaxStop(function(){
                screen.fadeOut();
            });
    }

    fetch('https://fakestoreapi.com/products?limit=8')
                    .then(res=>res.json())
                    .then(data=>{
                        data.forEach(producto => {
                            let div = document.createElement('div');
                            div.className = 'tarjeta';
                            div.innerHTML = `
                            <h5 class="tarjeta__title">${producto.title}</h5>
                            <img src="${producto.image}" class="tarjeta__imagen_top">
                            <div class="tarjeta__body">
                                <p class="tarjeta__description">${producto.description}</p>
                                <p class="tarjeta__price">Precio: ${producto.price} $</p>
                            </div>
                            <input type="button" value="Ver detalles" class="tarjeta__button_detalles">
                            <input type="button" value="Añadir al carrito" class="tarjeta__button_añadir">
                            `;
                            $('#disponible').append(div);
                        });
                    });
                    var categoria = null;

    window.addEventListener('scroll', ()=>{
        // si estoy en el carrito, se detiene la carga de productos
        if(categoria == "carrito"){
            // no se muestra el loading screen
            $('#loading-screen').fadeOut(
                function(){
                    // se detiene la carga de productos
                    document.removeEventListener('scroll', ()=>{});
                });
        }
        else{
            scroll();
        }        
    });

    function peticionScroll(){
        if(!peticionEnCurso){
            peticionEnCurso = true;
            $.ajax({
                url: 'https://fakestoreapi.com/products?order=asc',
                type: 'GET',
                success: function(data){
                    data.forEach(producto => {
                        let div = document.createElement('div');
                        div.className = 'tarjeta';
                        div.innerHTML = `
                        <h5 class="tarjeta__title">${producto.title}</h5>
                        <img src="${producto.image}" class="tarjeta__imagen_top">
                        <div class="tarjeta__body">
                            <p class="tarjeta__description">${producto.description}</p>
                            <p class="tarjeta__price">Precio: ${producto.price} $</p>
                        </div>
                        <input type="button" value="Ver detalles" class="tarjeta__button_detalles">
                        <input type="button" value="Añadir al carrito" class="tarjeta__button_añadir">
                        `;
                        $('#disponible').append(div);
                    });
                },
            })
        }
    }

    function scroll(){
        if(window.scrollY + window.innerHeight + 10000 >= document.body.scrollHeight){
            peticionScroll();
        }
        else{
            peticionEnCurso = false;
        }
    }

    function reestablecerDisponible(){
        // cambia el display de disponible a block
        $('#disponible').css('display', 'block');
    }

    function cargarCategoria(){
        $('#disponible').empty();
        fetch("https://fakestoreapi.com/products/category/"+categoria)
        .then(res=>res.json())
        .then(data=>{
            data.forEach(producto => {
                let div = document.createElement('div');
                div.className = 'tarjeta';
                div.innerHTML = `
                <h5 class="tarjeta__title">${producto.title}</h5>
                <img src="${producto.image}" class="tarjeta__imagen_top">
                <div class="tarjeta__body">
                    <p class="tarjeta__description">${producto.description}</p>
                    <p class="tarjeta__price">Precio: ${producto.price} $</p>
                </div>
                <input type="button" value="Ver detalles" class="tarjeta__button_detalles">
                <input type="button" value="Añadir al carrito" class="tarjeta__button_añadir">
                `;
                reestablecerDisponible();
                $('#disponible').append(div);
            });
        });
    }
    // cambiando la vista al pulsar en los botones de categorias
    $('#electronica').click(function(){
        categoria = "electronics";
        cargarCategoria();
    });
    $('#joyeria').click(function(){
        categoria = "jewelery";
        cargarCategoria();
    });
    $('#hombre').click(function(){
        categoria = "men's clothing";
        cargarCategoria();
    });
    $('#mujer').click(function(){
        categoria = "women's clothing";
        cargarCategoria();
    });
    $('#descendente').click(function(){
        $('#disponible').empty();
        if(categoria == null){
            fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res=>res.json())
            .then(data=>{
                data.forEach(producto => {
                    let div = document.createElement('div');
                    div.className = 'tarjeta';
                    div.innerHTML = `
                    <h5 class="tarjeta__title">${producto.title}</h5>
                    <img src="${producto.image}" class="tarjeta__imagen_top">
                    <div class="tarjeta__body">
                        <p class="tarjeta__description">${producto.description}</p>
                        <p class="tarjeta__price">Precio: ${producto.price} $</p>
                    </div>
                    <input type="button" value="Añadir al carrito" class="tarjeta__button_añadir">
                    `;
                    $('#disponible').append(div);
                });
            });
        }else{
            fetch('https://fakestoreapi.com/products/category/'+ categoria +'?sort=desc')
                .then(res=>res.json())
                .then(data=>{
                    data.forEach(producto => {
                        let div = document.createElement('div');
                        div.className = 'tarjeta';
                        div.innerHTML = `
                        <h5 class="tarjeta__title">${producto.title}</h5>
                        <img src="${producto.image}" class="tarjeta__imagen_top">
                        <div class="tarjeta__body">
                            <p class="tarjeta__description">${producto.description}</p>
                            <p class="tarjeta__price">Precio: ${producto.price} $</p>
                        </div>
                        <input type="button" value="Ver detalles" class="tarjeta__button_detalles">
                        <input type="button" value="Añadir al carrito" class="tarjeta__button_añadir">
                        `;
                        $('#disponible').append(div);
                    });
                });
        }
    });
    $('#ascendente').click(function(){
        $('#disponible').empty();
        if(categoria == null){
            fetch('https://fakestoreapi.com/products?sort=asc')
            .then(res=>res.json())
            .then(data=>{
                data.forEach(producto => {
                    let div = document.createElement('div');
                    div.className = 'tarjeta';
                    div.innerHTML = `
                    <h5 class="tarjeta__title">${producto.title}</h5>
                    <img src="${producto.image}" class="tarjeta__imagen_top">
                    <div class="tarjeta__body">
                        <p class="tarjeta__price">Precio: ${producto.price} $</p>
                    </div>
                    <input type="button" value="Ver detalles" class="tarjeta__button_detalles">
                    <input type="button" value="Añadir al carrito" class="tarjeta__button_añadir">
                    `;
                    $('#disponible').append(div);
                });
            });
        }else{
            fetch('https://fakestoreapi.com/products/category/'+ categoria +'?sort=asc')
                .then(res=>res.json())
                .then(data=>{
                    data.forEach(producto => {
                        let div = document.createElement('div');
                        div.className = 'tarjeta';
                        div.innerHTML = `
                        <h5 class="tarjeta__title">${producto.title}</h5>
                        <img src="${producto.image}" class="tarjeta__imagen_top">
                        <div class="tarjeta__body">
                            <p class="tarjeta__price">Precio: ${producto.price} $</p>
                        </div>
                        <input type="button" value="Ver detalles" class="tarjeta__button_detalles">
                        <input type="button" value="Añadir al carrito" class="tarjeta__button_añadir">
                        `;
                        $('#disponible').append(div);
                    });
                });
        }
    });
    // al pulsar en el boton de añadir al carrito, se añade el producto al carrito
    $('#disponible').on('click', '.tarjeta__button_añadir', function(){
        let producto = $(this).parent().find('.tarjeta__title').text();
        let precio = $(this).parent().find('.tarjeta__price').text();
        let imagen = $(this).parent().find('.tarjeta__imagen_top').attr('src');
        let cantidad = 1;
        console.log(producto, precio, imagen);
        let div = document.createElement('div');
        div.className = 'tarjeta';
        div.innerHTML = `
        <h5 class="tarjeta__title">${producto}</h5>
        <div class="tarjeta__body">
            <img src="${imagen}" class="tarjeta__imagen_top">
            <p class="tarjeta__price">${precio}</p>
            <p class="tarjeta__cantidad">Cantidad: ${cantidad}</p>
        </div>
        <input type="button" value="Eliminar del carrito" class="tarjeta__button_borrar">
        `;
        document.getElementById('disponible_carrito').append(div);
        alert("Producto añadido al carrito");
    });
    // al pulsar en el boton de eliminar del carrito, se elimina el producto del carrito
    $('#disponible_carrito').on('click', '.tarjeta__button_borrar', function(){
        alert("Producto eliminado del carrito");
        $(this).parent().remove();
    });
    // al pulsar en el icono del carrito o en carrito, se muestra el carrito
    $('#carrito').click(function(){
        categoria = "carrito";
        // vacia el contenido de disponible
        $('#disponible').empty();
        // muestra el contenido de disponible_carrito
        $('#disponible_carrito').show();
        // hace visible la tarjeta de carrito
        $('#carrito').show();
    });

    // al pulsar en el boton de detalles, se muestra solo esa tarjeta con la descripcion
    $('#disponible').on('click', '.tarjeta__button_detalles', function(){
        categoria = "carrito";
        // copia la tarjeta en la que se ha pulsado
        let tarjeta = $(this).parent().clone();
        $('#disponible').empty();
        // elimina el botón de detalles
        tarjeta.find('.tarjeta__button_detalles').remove();
        // añade el boton de volver
        tarjeta.append('<input type="button" value="Volver a inicio" class="tarjeta__button_volver">');
        // cambia el display de description a block
        tarjeta.find('.tarjeta__description').css('display', 'block');
        // cambia la altura de description a auto
        tarjeta.find('.tarjeta__description').css('height', 'auto');
        // muestra la tarjeta copiada
        $('#disponible').append(tarjeta);
        // centra la tarjeta
        $('#disponible').css('display', 'flex');
        $('#disponible').css('justify-content', 'center');
        // cambia la clase de la tarjeta por tarjeta__detallada
        $('#disponible').find('.tarjeta').removeClass('tarjeta').addClass('tarjeta__detallada');

    });
    // al pulsar volver, se vuelve a mostrar la lista de productos
    $('#disponible').on('click', '.tarjeta__button_volver', function(){
        categoria = null;
        // reestablece el display de description a none
        $(this).parent().find('.tarjeta__description').css('display', 'none');
        reestablecerDisponible();
        $('#disponible').empty();
        $('#disponible_carrito').hide();
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                data.forEach(producto => {
                    let div = document.createElement('div');
                    div.className = 'tarjeta';
                    div.innerHTML = `
                    <h5 class="tarjeta__title">${producto.title}</h5>
                    <img src="${producto.image}" class="tarjeta__imagen_top">
                    <div class="tarjeta__body">
                        <p class="tarjeta__description">${producto.description}</p>
                        <p class="tarjeta__price">Precio: ${producto.price} $</p>
                    </div>
                    <input type="button" value="Ver detalles" class="tarjeta__button_detalles">
                    <input type="button" value="Añadir al carrito" class="tarjeta__button_añadir">
                    `;
                    $('#disponible').append(div);
                });
            });
        });
});